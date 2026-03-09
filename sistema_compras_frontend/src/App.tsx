import React, { useState, useEffect } from 'react';
import { 
  Package, CheckCircle2, Search, ArrowRight, ClipboardList, Users, 
  LogOut, Clock, Check, X, Building2, Tag, DollarSign, ListOrdered, 
  MessageSquare, AlertTriangle, FileText, Plus, BarChart3, 
  LayoutGrid, TrendingUp, PieChart 
} from 'lucide-react';

// 1. IMPORTAÇÕES DO FIREBASE
import { initializeApp } from "firebase/app";
import { 
  getFirestore, collection, addDoc, onSnapshot, 
  doc, updateDoc 
} from "firebase/firestore";
import { 
  getAuth, signInAnonymously, onAuthStateChanged 
} from "firebase/auth";

// =========================================================================
// 2. CONFIGURAÇÃO USANDO VARIÁVEIS DE AMBIENTE (Padrão Vite)
// =========================================================================
// Nota: O Vite substitui import.meta.env durante o build. 
// Adicionamos valores de fallback vazios para evitar erros de compilação em ambientes restritos.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ""
};

// Inicialização dos serviços
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// =========================================================================
// INTERFACES
// =========================================================================
interface Solicitacao {
  id: string;
  requisitante: string;
  filial: string;
  descricao: string;
  categoria: string;
  centroCusto: string;
  prioridade: 'Baixa' | 'Média' | 'Alta';
  valorEstimado: number;
  quantidade: number;
  justificativa: string;
  data: string;
  status: 'Pendente' | 'Aprovado' | 'Rejeitado';
  timestamp: number;
}

interface Usuario {
  id: number;
  nome: string;
  papel: 'Requisitante' | 'Gestor';
}

// =========================================================================
// COMPONENTE PRINCIPAL
// =========================================================================
export default function App() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [user, setUser] = useState<any>(null);
  const [view, setView] = useState<'login' | 'form' | 'rastreamento' | 'gestor' | 'gestor-resumo' | 'sucesso'>('login');
  const [solicitacoes, setSolicitacoes] = useState<Solicitacao[]>([]);
  const [carregando, setCarregando] = useState(false);
  const [erroBanco, setErroBanco] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    filial: '',
    descricao: '',
    categoria: '',
    centroCusto: '',
    prioridade: 'Média' as 'Baixa' | 'Média' | 'Alta',
    valorEstimado: 0,
    quantidade: 1,
    justificativa: ''
  });

  // 3. LÓGICA DE AUTENTICAÇÃO
  useEffect(() => {
    // Verificação se as variáveis de ambiente foram carregadas corretamente no seu ambiente local
    if (!import.meta.env.VITE_FIREBASE_API_KEY) {
      console.warn("Aviso: Variáveis de ambiente VITE_FIREBASE_* não detectadas. Verifique o seu arquivo .env");
    }

    signInAnonymously(auth)
      .then(() => console.log("✅ Autenticado no Firebase"))
      .catch(err => {
        console.error("❌ Erro Auth:", err);
        if (err.code === 'auth/configuration-not-found') {
          setErroBanco("Login Anônimo não ativado no Firebase Console.");
        } else {
          setErroBanco("Erro ao conectar ao Firebase. Verifique sua conexão.");
        }
      });
    
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  // 4. ESCUTA EM TEMPO REAL (FIRESTORE)
  useEffect(() => {
    if (!user) return;
    const colRef = collection(db, 'solicitacoes');
    const unsubscribeSnap = onSnapshot(colRef, (snapshot) => {
      const lista = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Solicitacao[];
      // Ordenação em memória por timestamp decrescente (mais recentes primeiro)
      setSolicitacoes(lista.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0)));
      setErroBanco(null);
    }, (error) => {
      console.error("❌ Erro Firestore:", error);
    });
    return () => unsubscribeSnap();
  }, [user]);

  // AÇÕES DO SISTEMA
  const fazerLogin = (papel: 'Requisitante' | 'Gestor') => {
    const userProfile = papel === 'Requisitante' 
      ? { id: 1, nome: "Ana Ribeiro", papel: 'Requisitante' as const }
      : { id: 2, nome: "Marcos Silva", papel: 'Gestor' as const };
    setUsuario(userProfile);
    setView(papel === 'Requisitante' ? 'form' : 'gestor');
  };

  const logout = () => {
    setUsuario(null);
    setView('login');
  };

  const enviarSolicitacao = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setCarregando(true);
    try {
      await addDoc(collection(db, 'solicitacoes'), {
        requisitante: usuario?.nome,
        filial: formData.filial,
        descricao: formData.descricao,
        categoria: formData.categoria,
        centroCusto: formData.centroCusto,
        prioridade: formData.prioridade,
        valorEstimado: Number(formData.valorEstimado),
        quantidade: Number(formData.quantidade),
        justificativa: formData.justificativa,
        status: 'Pendente',
        data: new Date().toISOString(),
        timestamp: Date.now()
      });
      setView('sucesso');
      setFormData({ filial: '', descricao: '', categoria: '', centroCusto: '', prioridade: 'Média', valorEstimado: 0, quantidade: 1, justificativa: '' });
    } catch (err) { 
        console.error("Erro ao enviar:", err); 
    }
    setCarregando(false);
  };

  const mudarStatus = async (id: string, novoStatus: 'Aprovado' | 'Rejeitado') => {
    if (!user) return;
    try {
        await updateDoc(doc(db, 'solicitacoes', id), { status: novoStatus });
    } catch (err) {
        console.error("Erro ao atualizar status:", err);
    }
  };

  // Funções de Cálculo e Dashboard (Matriz Analítica)
  const totalGeral = solicitacoes.reduce((acc, s) => acc + (s.valorEstimado * s.quantidade), 0);
  const pendentes = solicitacoes.filter(s => s.status === 'Pendente').length;

  const filtrarPorUsuario = (lista: Solicitacao[]) => {
    if (!usuario?.nome) return [];
    return lista.filter(s => 
      s.requisitante?.toString().trim().toLowerCase() === usuario.nome.trim().toLowerCase()
    );
  };

  const calcularPorFilial = () => {
    const resumo: Record<string, number> = {};
    solicitacoes.forEach(s => {
      resumo[s.filial] = (resumo[s.filial] || 0) + (s.valorEstimado * s.quantidade);
    });
    return resumo;
  };

  const calcularPorPrioridade = () => {
    const resumo: Record<string, number> = { Alta: 0, Média: 0, Baixa: 0 };
    solicitacoes.forEach(s => {
      resumo[s.prioridade] = (resumo[s.prioridade] || 0) + (s.valorEstimado * s.quantidade);
    });
    return resumo;
  };

  const calcularPorCategoria = () => {
    const resumo: Record<string, { total: number; qtd: number }> = {};
    solicitacoes.forEach(s => {
      const key = s.categoria || 'Outros';
      if (!resumo[key]) resumo[key] = { total: 0, qtd: 0 };
      resumo[key].total += (s.valorEstimado * s.quantidade);
      resumo[key].qtd += 1;
    });
    return resumo;
  };

  // =========================================================================
  // RENDERIZAÇÃO
  // =========================================================================

  if (view === 'login') {
    return (
      <div className="min-h-screen bg-[#030213] flex items-center justify-center p-6 text-slate-900 font-sans">
        <div className="bg-white p-10 rounded-[40px] shadow-2xl max-w-4xl w-full flex flex-col md:flex-row gap-10">
          <div className="flex-1 flex flex-col justify-center">
            {erroBanco && (
              <div className="bg-rose-50 border border-rose-100 p-4 rounded-2xl mb-6">
                <p className="text-rose-600 text-[10px] font-black uppercase tracking-widest mb-1">Aviso Técnico</p>
                <p className="text-slate-600 text-xs font-medium">{erroBanco}</p>
              </div>
            )}
            <div className="bg-[#1e40af] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-100">
              <Package className="text-white w-8 h-8" />
            </div>
            <h2 className="text-4xl font-black text-[#030213] mb-2 uppercase italic tracking-tighter leading-none">PI Compras</h2>
            <p className="text-slate-500 mb-10 font-medium italic">Gestão e Governança Conectada.</p>
            <div className="space-y-4">
              <button onClick={() => fazerLogin('Requisitante')} className="w-full flex items-center justify-between p-8 bg-slate-50 border border-slate-200 rounded-[32px] hover:border-blue-600 hover:bg-blue-50 transition group active:scale-95 text-left">
                <div className="flex items-center gap-5">
                  <div className="bg-blue-100 p-4 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors"><Users className="w-7 h-7" /></div>
                  <div><p className="font-black text-slate-800 text-xl leading-none">Ana Ribeiro</p><p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">Requisitante Operacional</p></div>
                </div>
                <ArrowRight className="text-blue-600" />
              </button>
              <button onClick={() => fazerLogin('Gestor')} className="w-full flex items-center justify-between p-8 bg-slate-50 border border-slate-200 rounded-[32px] hover:border-[#030213] hover:bg-slate-100 transition group active:scale-95 text-left">
                <div className="flex items-center gap-5">
                  <div className="bg-slate-200 p-4 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors"><ClipboardList className="w-7 h-7" /></div>
                  <div><p className="font-black text-slate-800 text-xl leading-none">Marcos Silva</p><p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">Gestor de Suprimentos</p></div>
                </div>
                <ArrowRight />
              </button>
            </div>
          </div>
          <div className="hidden md:flex flex-1 bg-[#1e40af] rounded-[40px] items-center justify-center p-12 text-white relative overflow-hidden">
             <TrendingUp className="w-32 h-32 absolute top-10 right-10 opacity-10" />
             <div className="z-10 text-center"><h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4">Análise em Tempo Real</h3><p className="opacity-70 leading-relaxed font-medium">Sincronização imediata entre a ponta requisitante e a gestão financeira.</p></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fc] flex flex-col text-slate-900 font-sans">
      <header className={`${usuario?.papel === 'Gestor' ? 'bg-[#030213]' : 'bg-[#1e40af]'} text-white p-5 sticky top-0 z-50 shadow-xl transition-colors`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 font-black text-xl uppercase italic tracking-tighter"><Package className="w-5 h-5 text-blue-300" /> PI Compras</div>
          <nav className="flex gap-4 items-center">
            <button onClick={() => setView(usuario?.papel === 'Gestor' ? 'gestor' : 'form')} className="text-[10px] font-black uppercase tracking-widest opacity-80 hover:opacity-100 transition">Início</button>
            {usuario?.papel === 'Gestor' && (
                <button onClick={() => setView('gestor-resumo')} className="text-[10px] font-black uppercase tracking-widest opacity-80 hover:opacity-100 transition">Matriz Analítica</button>
            )}
            {usuario?.papel === 'Requisitante' && (
                <button onClick={() => setView('rastreamento')} className="text-[10px] font-black uppercase tracking-widest opacity-80 hover:opacity-100 transition">Meus Pedidos</button>
            )}
            <button onClick={logout} className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition"><LogOut className="w-4 h-4" /></button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6 flex-1">
        
        {/* VIEW: FORMULÁRIO ANA */}
        {view === 'form' && (
          <div className="max-w-2xl mx-auto bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 animate-in fade-in duration-500">
            <h2 className="text-2xl font-black uppercase italic mb-8 border-b pb-4 tracking-tighter">Nova Solicitação</h2>
            <form onSubmit={enviarSolicitacao} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Unidade / Filial</label>
                    <select required className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold outline-none" value={formData.filial} onChange={e => setFormData({...formData, filial: e.target.value})}>
                        <option value="">Selecione...</option>
                        <option value="Filial A - SP">Filial A - SP</option>
                        <option value="Filial B - RJ">Filial B - RJ</option>
                        <option value="Matriz - BH">Matriz - BH</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Centro de Custo</label>
                    <select required className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold outline-none" value={formData.centroCusto} onChange={e => setFormData({...formData, centroCusto: e.target.value})}>
                        <option value="">Selecione...</option>
                        <option value="Administrativo">Administrativo</option>
                        <option value="TI">TI</option>
                        <option value="Operacional">Operacional</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Descrição do Material</label>
                <input type="text" placeholder="Ex: Monitor Dell 27'" required className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold focus:ring-2 focus:ring-blue-500 outline-none transition" value={formData.descricao} onChange={e => setFormData({...formData, descricao: e.target.value})} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Valor Unitário (R$)</label>
                  <input type="number" step="0.01" placeholder="0,00" required className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold outline-none transition" value={formData.valorEstimado || ''} onChange={e => setFormData({...formData, valorEstimado: Number(e.target.value)})} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Quantidade</label>
                  <input type="number" min="1" required className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold outline-none transition" value={formData.quantidade} onChange={e => setFormData({...formData, quantidade: Number(e.target.value)})} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Categoria</label>
                  <select required className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold outline-none" value={formData.categoria} onChange={e => setFormData({...formData, categoria: e.target.value})}>
                    <option value="">Selecione...</option>
                    <option value="Material de Escritório">Material de Escritório</option>
                    <option value="Manutenção">Manutenção</option>
                    <option value="Tecnologia e Equipamentos">Tecnologia e Equipamentos</option>
                    <option value="Transporte">Transporte</option>
                    <option value="Serviço">Serviço</option>
                  </select>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Prioridade</label>
                    <div className="flex gap-2">
                        {['Baixa', 'Média', 'Alta'].map(p => (
                            <button key={p} type="button" onClick={() => setFormData({...formData, prioridade: p as any})} className={`flex-1 py-4 rounded-xl text-[10px] font-black uppercase border transition-all ${formData.prioridade === p ? 'bg-blue-600 border-blue-600 text-white shadow-lg' : 'bg-white border-slate-100 text-slate-400'}`}>{p}</button>
                        ))}
                    </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Justificativa da Compra</label>
                <textarea placeholder="Explique a necessidade..." required className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl h-32 outline-none resize-none transition" value={formData.justificativa} onChange={e => setFormData({...formData, justificativa: e.target.value})} />
              </div>

              <button type="submit" disabled={carregando} className="w-full py-6 bg-blue-600 text-white font-black rounded-3xl uppercase tracking-widest text-xs shadow-xl shadow-blue-200 hover:bg-blue-700 transition active:scale-95">{carregando ? 'Gravando Dados...' : 'Finalizar Pedido'}</button>
            </form>
          </div>
        )}

        {/* VIEW: RASTREAMENTO ANA */}
        {view === 'rastreamento' && (
          <div className="max-w-5xl mx-auto animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-10">
                <div><h2 className="text-3xl font-black text-[#030213] uppercase italic mb-1 tracking-tighter">Acompanhamento</h2><p className="text-slate-400 font-medium">Histórico de suas requisições sincronizadas em nuvem.</p></div>
                <button onClick={() => setView('form')} className="bg-blue-600 text-white px-8 py-5 rounded-3xl font-black flex items-center gap-2 shadow-xl hover:bg-blue-700 transition text-[10px] uppercase tracking-widest"><Plus className="w-5 h-5"/> Novo Pedido</button>
            </div>
            <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden">
               <table className="w-full text-left">
                  <thead className="bg-slate-50 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                    <tr><th className="px-8 py-6">Protocolo</th><th className="px-8 py-6">Descrição</th><th className="px-8 py-6">Valor Total</th><th className="px-8 py-6 text-center">Estado</th></tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {filtrarPorUsuario(solicitacoes).map(s => (
                      <tr key={s.id} className="hover:bg-blue-50/10 transition">
                        <td className="px-8 py-6 font-black text-slate-300">#{s.id.substring(0, 4)}</td>
                        <td className="px-8 py-6">
                           <p className="font-black text-slate-800 uppercase italic text-sm">{s.descricao}</p>
                           <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">{s.categoria} • {s.filial}</p>
                        </td>
                        <td className="px-8 py-6 font-black text-blue-600 italic">R$ {(s.valorEstimado * s.quantidade).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                        <td className="px-8 py-6 text-center">
                          <span className={`px-5 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2 mx-auto w-32 ${
                            s.status === 'Pendente' ? 'bg-amber-100 text-amber-600' : s.status === 'Aprovado' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'
                          }`}>
                            {s.status === 'Pendente' ? <Clock className="w-3.5 h-3.5"/> : s.status === 'Aprovado' ? <Check className="w-3.5 h-3.5"/> : <X className="w-3.5 h-3.5"/>}
                            {s.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                    {filtrarPorUsuario(solicitacoes).length === 0 && (
                      <tr>
                        <td colSpan={4} className="py-20 text-center text-slate-300 font-black uppercase text-xs tracking-widest italic opacity-50">Nenhum pedido encontrado.</td>
                      </tr>
                    )}
                  </tbody>
               </table>
            </div>
          </div>
        )}

        {/* VIEW: FILA DO GESTOR MARCOS (COMPACTO) */}
        {view === 'gestor' && (
          <div className="max-w-3xl mx-auto space-y-4 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-end mb-6">
               <div><h2 className="text-3xl font-black uppercase italic tracking-tighter leading-none">Fila de Análise</h2><p className="text-slate-400 text-xs mt-1">Gestão de aprovações pendentes.</p></div>
               <div className="bg-white p-3 rounded-2xl border border-slate-100 text-center min-w-[100px] shadow-sm">
                  <p className="text-[9px] font-black uppercase text-amber-500 tracking-widest leading-none mb-1">Pendentes</p>
                  <p className="text-2xl font-black text-slate-800">{pendentes}</p>
               </div>
            </div>
            
            <div className="space-y-3">
              {solicitacoes.filter(s => s.status === 'Pendente').map(s => (
                <div key={s.id} className="bg-white rounded-[32px] shadow-sm border border-slate-50 overflow-hidden flex flex-col md:flex-row transition-all hover:shadow-lg">
                  <div className={`w-2 md:w-3 ${s.prioridade === 'Alta' ? 'bg-rose-500' : 'bg-blue-500'}`}></div>
                  <div className="flex-1 p-5 md:p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4 mb-4 border-b border-slate-50 pb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="bg-slate-100 text-slate-400 px-2 py-0.5 rounded text-[8px] font-black uppercase">#{s.id.substring(0, 4)}</span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{s.requisitante}</span>
                        </div>
                        <h3 className="text-xl font-black text-slate-800 uppercase italic leading-none">{s.descricao}</h3>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{s.categoria} | {s.filial}</p>
                      </div>
                      <div className="text-right flex flex-col justify-center min-w-[160px]">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic leading-none mb-1">
                          {s.quantidade} UN x R$ {s.valorEstimado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                        <p className="text-2xl font-black text-blue-600 leading-none tracking-tighter italic">
                          R$ {(s.valorEstimado * s.quantidade).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-5">
                       <p className="text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Justificativa Operacional:</p>
                       <p className="text-xs italic text-slate-500 bg-slate-50 p-3 rounded-xl">"{s.justificativa}"</p>
                    </div>

                    <div className="flex gap-3 justify-end">
                       <button onClick={() => mudarStatus(s.id, 'Rejeitado')} className="px-5 py-2.5 border-2 border-rose-50 text-rose-500 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-rose-50 transition">Negar</button>
                       <button onClick={() => mudarStatus(s.id, 'Aprovado')} className="px-8 py-2.5 bg-[#030213] text-white rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-slate-800 transition shadow-lg">Autorizar</button>
                    </div>
                  </div>
                </div>
              ))}
              {pendentes === 0 && (
                <div className="text-center py-16 bg-white rounded-[40px] border border-dashed border-slate-200">
                  <CheckCircle2 className="w-10 h-10 text-slate-200 mx-auto mb-3" />
                  <p className="text-slate-300 font-black uppercase text-[10px] tracking-widest">Nenhuma requisição aguardando análise.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIEW: MATRIZ ANALÍTICA (SUMMARY DASHBOARD) */}
        {view === 'gestor-resumo' && (
          <div className="max-w-6xl mx-auto space-y-10 scale-in duration-500">
            <div className="flex justify-between items-end mb-8">
               <div><h2 className="text-5xl font-black text-[#030213] tracking-tighter uppercase italic leading-none">Matriz Analítica</h2><p className="text-slate-500 font-medium mt-4">Monitoramento orçamentário consolidado em tempo real.</p></div>
               <button onClick={() => setView('gestor')} className="bg-blue-600 text-white px-10 py-6 rounded-[32px] font-black flex items-center gap-3 hover:bg-blue-700 transition shadow-2xl active:scale-95 text-[10px] uppercase tracking-widest"><LayoutGrid className="w-5 h-5"/> Ver Fila</button>
            </div>
            
            <div className="bg-[#030213] p-12 rounded-[56px] text-white flex flex-col md:flex-row justify-around items-center shadow-2xl relative overflow-hidden">
                <TrendingUp className="w-96 h-96 absolute -right-20 -bottom-20 opacity-5 pointer-events-none" />
                <div className="text-center z-10">
                  <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Volume Total Solicitado</p>
                  <p className="text-6xl font-black italic tracking-tighter uppercase">R$ {totalGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                </div>
                <div className="w-px h-24 bg-white/10 hidden md:block"></div>
                <div className="text-center z-10">
                  <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Ticket Médio / Pedido</p>
                  <p className="text-6xl font-black italic tracking-tighter uppercase">R$ {solicitacoes.length > 0 ? (totalGeral / solicitacoes.length).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) : '0,00'}</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-white p-10 rounded-[48px] shadow-sm border border-slate-50 flex flex-col transition-all hover:shadow-2xl">
                  <div className="flex items-center gap-4 mb-10 text-[#030213]"><div className="bg-rose-50 p-4 rounded-3xl"><AlertTriangle className="text-rose-600 w-6 h-6"/></div><h3 className="text-xl font-black tracking-tighter uppercase italic">Criticidade</h3></div>
                  <div className="space-y-8 flex-1">
                     {Object.entries(calcularPorPrioridade()).map(([prio, valor]) => {
                        const percent = totalGeral > 0 ? (valor / totalGeral) * 100 : 0;
                        return (
                          <div key={prio}>
                             <div className="flex justify-between items-end mb-3"><p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{prio}</p><p className="font-black text-slate-800 text-base tracking-tighter italic uppercase">R$ {valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p></div>
                             <div className="w-full h-2.5 bg-slate-50 rounded-full overflow-hidden"><div className={`h-full transition-all duration-1000 ${prio === 'Alta' ? 'bg-rose-500' : prio === 'Média' ? 'bg-amber-400' : 'bg-blue-400'}`} style={{ width: `${percent}%` }}></div></div>
                          </div>
                        );
                     })}
                  </div>
               </div>
               
               <div className="bg-white p-10 rounded-[48px] shadow-sm border border-slate-100 transition-all hover:shadow-2xl">
                  <div className="flex items-center gap-4 mb-10 text-[#030213]"><div className="bg-blue-50 p-4 rounded-3xl"><Building2 className="text-blue-600 w-6 h-6"/></div><h3 className="text-xl font-black tracking-tighter uppercase italic">Filiais</h3></div>
                  <div className="space-y-8">
                     {Object.entries(calcularPorFilial()).map(([filial, valor]) => {
                        const percent = totalGeral > 0 ? (valor / totalGeral) * 100 : 0;
                        return (
                          <div key={filial}>
                             <div className="flex justify-between items-center mb-3 text-[10px] font-black uppercase text-slate-700 tracking-widest"><p>{filial}</p><p className="text-blue-800 font-black">{percent.toFixed(1)}%</p></div>
                             <div className="w-full h-3.5 bg-slate-50 rounded-full overflow-hidden"><div className="h-full bg-blue-600 transition-all duration-1000 shadow-inner" style={{ width: `${percent}%` }}></div></div>
                          </div>
                        );
                     })}
                  </div>
               </div>

               <div className="bg-white p-10 rounded-[48px] shadow-sm border border-slate-50 transition-all hover:shadow-2xl">
                  <div className="flex items-center gap-4 mb-10 text-[#030213]"><div className="bg-emerald-50 p-4 rounded-3xl"><Tag className="text-emerald-600 w-6 h-6"/></div><h3 className="text-xl font-black tracking-tighter uppercase italic">Categorias</h3></div>
                  <div className="space-y-4">
                     {Object.entries(calcularPorCategoria()).map(([cat, dados]) => (
                        <div key={cat} className="flex justify-between items-center p-5 bg-slate-50/50 rounded-[28px] border border-slate-100 transition hover:bg-emerald-50/20 group">
                           <div><p className="font-black text-slate-800 text-[10px] uppercase tracking-widest leading-none">{cat}</p><p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-2 leading-none">{dados.qtd} Pedidos</p></div>
                           <div className="text-right"><p className="text-base font-black text-emerald-600 italic uppercase leading-none">R$ {dados.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p></div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        )}

        {/* VIEW: SUCESSO PROTOCOLO */}
        {view === 'sucesso' && (
          <div className="text-center py-24 animate-in zoom-in-95 duration-700">
             <div className="bg-emerald-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner"><Check className="text-emerald-500 w-12 h-12" /></div>
             <h2 className="text-4xl font-black uppercase italic mb-4 tracking-tighter">Pedido Protocolado!</h2>
             <p className="text-slate-400 mb-10 max-w-xs mx-auto text-sm font-medium">Sua solicitação foi enviada para a fila de análise orçamentária em tempo real.</p>
             <div className="flex gap-4 justify-center">
                <button onClick={() => setView('rastreamento')} className="px-10 py-6 bg-[#030213] text-white font-black rounded-3xl uppercase text-[10px] tracking-widest shadow-xl transition active:scale-95">Ver Meus Pedidos</button>
                <button onClick={() => setView('form')} className="px-10 py-6 bg-blue-600 text-white font-black rounded-3xl uppercase text-[10px] tracking-widest shadow-xl shadow-blue-100 transition active:scale-95">Nova Solicitação</button>
             </div>
          </div>
        )}
      </main>

      <footer className="py-12 text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] italic opacity-50">
        &copy; 2025 • PI Compras • Gestão de Suprimentos & Governança Corporativa
      </footer>
    </div>
  );
}