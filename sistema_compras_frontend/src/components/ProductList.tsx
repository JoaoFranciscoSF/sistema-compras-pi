import React, { useState, useEffect } from 'react';

// Definimos a interface para o TypeScript saber o que esperar da API
interface Produto {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  imagem: string;
}

const ProductList = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  // O useEffect é o "gatilho" que dispara quando a tela abre
  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        setCarregando(true);
        // Fazemos a chamada para o seu servidor backend (porta 3001)
        const resposta = await fetch('http://localhost:3001/api/produtos');
        
        if (!resposta.ok) {
          throw new Error('Falha ao procurar produtos no servidor');
        }

        const dados = await resposta.json();
        setProdutos(dados); // Guardamos os dados que vieram do Backend no Estado
      } catch (err) {
        setErro(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setCarregando(false);
      }
    };

    buscarProdutos();
  }, []);

  if (carregando) return <p className="p-4 text-orange-500">A carregar produtos do sistema...</p>;
  if (erro) return <p className="p-4 text-red-500">Erro: {erro}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {produtos.map((produto) => (
        <div key={produto.id} className="bg-white rounded-xl shadow-md p-4 border border-orange-100">
          <img src={produto.imagem} alt={produto.nome} className="w-full h-32 object-contain mb-4" />
          <h3 className="font-bold text-lg text-gray-800">{produto.nome}</h3>
          <p className="text-sm text-gray-500 mb-2">{produto.categoria}</p>
          <div className="flex justify-between items-center">
            <span className="text-orange-600 font-bold">
              R$ {produto.preco.toFixed(2).replace('.', ',')}
            </span>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
              Selecionar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;