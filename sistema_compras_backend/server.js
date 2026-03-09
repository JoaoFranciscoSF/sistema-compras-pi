const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors()); /
app.use(express.json());

// =========================================================================
// BANCO DE DADOS EM MEMÓRIA (MOCK)
// =========================================================================

// Simulando a tabela 'products'
let produtos = [
  { id: 1, nome: "Papel A4 (Resma)", categoria: "Escritório", preco: 25.50, stock: 100, imagem: "https://placehold.co/100x100?text=Papel+A4" },
  { id: 2, nome: "Cadeira Ergonómica", categoria: "Mobiliário", preco: 850.00, stock: 15, imagem: "https://placehold.co/100x100?text=Cadeira" },
  { id: 3, nome: "Monitor 24''", categoria: "Tecnologia", preco: 1200.00, stock: 8, imagem: "https://placehold.co/100x100?text=Monitor" },
  { id: 4, nome: "Teclado Mecânico", categoria: "Tecnologia", preco: 350.00, stock: 20, imagem: "https://placehold.co/100x100?text=Teclado" }
];

// Simulando a tabela 'purchase_requests'
let solicitacoes = [
  {
    id: 101,
    requisitante: "Ana Ribeiro",
    data: new Date().toISOString(),
    status: "Pendente",
    total: 25.50,
    itens: [{ produtoId: 1, quantidade: 1 }]
  }
];

// =========================================================================
// ROTAS DA API (ENDPOINTS)
// =========================================================================

/**
 * ROTA: Listar todos os produtos
 * Usada na Tela Inicial para a Ana Ribeiro escolher itens.
 */
app.get('/api/produtos', (req, res) => {
  res.json(produtos);
});

/**
 * ROTA: Criar nova solicitação de compra
 * Usada pela Ana Ribeiro ao finalizar a requisição.
 */
app.post('/api/solicitacoes', (req, res) => {
  const { requisitanteId, itens, total } = req.body;

  const novaSolicitacao = {
    id: solicitacoes.length + 101,
    requisitante: "Ana Ribeiro", // Em produção, viria do ID do usuário autenticado
    data: new Date().toISOString(),
    status: "Pendente",
    total: total,
    itens: itens
  };

  solicitacoes.push(novaSolicitacao);
  console.log("Nova solicitação recebida:", novaSolicitacao.id);
  
  res.status(201).json({ message: "Solicitação enviada com sucesso!", id: novaSolicitacao.id });
});

/**
 * ROTA: Listar todas as solicitações
 * Usada pelo Marcos Silva (Gestor) para ver o que precisa ser aprovado.
 */
app.get('/api/solicitacoes', (req, res) => {
  res.json(solicitacoes);
});

/**
 * ROTA: Atualizar status da solicitação
 * Usada pelo Marcos Silva para Aprovar ou Rejeitar.
 */
app.patch('/api/solicitacoes/:id', (req, res) => {
  const { id } = req.params;
  const { novoStatus } = req.body; // "Aprovado" ou "Rejeitado"

  const index = solicitacoes.findIndex(s => s.id === parseInt(id));

  if (index !== -1) {
    solicitacoes[index].status = novoStatus;
    res.json({ message: `Solicitação ${id} atualizada para ${novoStatus}` });
  } else {
    res.status(404).json({ message: "Solicitação não encontrada" });
  }
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor Backend rodando em http://localhost:${PORT}`);
});