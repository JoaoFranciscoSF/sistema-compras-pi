# Sistema de Compras PI - Gestão e Governança

    Este é um sistema desenvolvido para o Projeto Integrador (PI) que visa digitalizar e otimizar o fluxo de requisições de compras numa organização. O sistema utiliza uma arquitetura moderna e sincronização em tempo real.

# 1. Funcionalidades

# 1.1 Persona: Ana Ribeiro (Requisitante)

    Criar novas solicitações de compras com detalhes técnicos (categoria, centro de custo, prioridade).

    Acompanhar o estado das suas solicitações em tempo real através de um painel de rastreamento.

    Receber confirmação visual após o protocolo bem-sucedido.

# 1.2 Persona: Marcos Silva (Gestor)

    Visualizar uma fila de análise compacta com todos os pedidos pendentes.

    Aprovar ou rejeitar solicitações com um clique.

    Aceder a uma Matriz Analítica com KPIs de volume total, ticket médio e distribuição por filial/categoria.

# 2. Tecnologias Utilizadas

    Frontend: React.js, TypeScript, Tailwind CSS.

    Ícones: Lucide React.

    Backend/Base de Dados: Firebase (Firestore e Authentication).

    Ferramenta de Build: Vite.

# 3. Como Instalar e Rodar

    Clonar o repositório:

    git clone [https://github.com/teu-usuario/sistema-compras-pi.git](https://github.com/teu-usuario/sistema-compras-pi.git)

# 4. Instalar as dependências:

    cd frontend
    npm install

# 5. Configurar as Variáveis de Ambiente:

    Cria um ficheiro .env na raiz da pasta frontend.

    Utiliza o modelo contido em .env.example e preenche com as tuas chaves do Firebase.

# 6. Executar o projeto:

    npm run dev

# 7. Segurança e Boas Práticas

    Este projeto foi construído seguindo padrões profissionais de segurança:

    Variáveis de Ambiente: As chaves de acesso ao Firebase são mantidas no ficheiro .env, que é ignorado pelo Git através do .gitignore.

    Regras do Firestore: O acesso aos dados é protegido por regras que exigem autenticação (Firebase Auth).

# 8. Licença

    Este projeto foi desenvolvido para fins académicos no âmbito do curso de Análise e Desenvolvimento de Sistemas do SENAC.

    Desenvolvido por:
        Eric Matheus Sousa do Vale - @ericmvale
        João Francisco de Souza Ferreira - @JoaoFranciscoSF
        Lavínia Talissa Machado - @laviniat05
        Lorena Brito Cartaxo - @lorenacartaxo
        Lucas Ferreira dos Santos - @CalmLikeab0mb
