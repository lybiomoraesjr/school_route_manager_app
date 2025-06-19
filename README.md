# 🚌 School Route Manager

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-purple.svg)](https://vitejs.dev/)
[![Mantine](https://img.shields.io/badge/Mantine-7.17.4-blue.svg)](https://mantine.dev/)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)

> **Sistema Web de Gerenciamento de Rotas Escolares** - Uma solução completa para administração de transporte escolar municipal

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Configuração](#instalação-e-configuração)
- [Como Usar](#como-usar)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## 🎯 Sobre o Projeto

O **School Route Manager** é uma aplicação web moderna desenvolvida para informatizar e otimizar o gerenciamento de rotas escolares municipais. O sistema substitui processos manuais baseados em planilhas eletrônicas por uma solução digital completa e intuitiva.

### 🏛️ Instituição

**Instituto Federal de Educação, Ciência e Tecnologia São Paulo**  
**Campus Bragança Paulista**  
**Tecnologia em Análise e Desenvolvimento de Sistemas**

### 👥 Equipe de Desenvolvimento

- **Arthur de Faria** - BP3038289
- **Inácio Fernandes Santana** - BP3039307
- **João Paulo Pereira Costa** - BP3039331
- **Lybio Croton de Moraes Junior** - BP303934X

### 📍 Localização

Bragança Paulista, 2025

## ✨ Funcionalidades

### 🔐 Sistema de Autenticação

- Login seguro com diferentes perfis de usuário
- Controle de acesso baseado em roles
- Proteção de rotas privadas

### 👨‍🎓 Gestão de Alunos

- Cadastro completo de estudantes
- Informações pessoais e acadêmicas
- Vinculação com responsáveis
- Histórico escolar

### 👨‍👩‍👧‍👦 Gestão de Responsáveis

- Cadastro de pais e responsáveis
- Informações de contato
- Múltiplos responsáveis por aluno
- Histórico de comunicação

### 🚗 Gestão de Veículos

- Cadastro de frota escolar
- Informações técnicas dos veículos
- Controle de capacidade
- Manutenção preventiva

### 👨‍💼 Gestão de Motoristas

- Cadastro de condutores
- Licenças e documentação
- Histórico de rotas
- Avaliações de desempenho

### 👩‍🏫 Gestão de Monitores

- Cadastro de acompanhantes
- Atribuição de rotas
- Controle de presença
- Relatórios de incidentes

### 🏫 Gestão de Escolas

- Cadastro de instituições
- Informações de localização
- Horários de funcionamento
- Capacidade de alunos

### 🛣️ Gestão de Rotas

- Criação e edição de rotas
- Definição de paradas
- Otimização de trajetos
- Horários de saída e chegada

### 🚏 Gestão de Paradas

- Pontos de embarque/desembarque
- Horários específicos
- Localização geográfica
- Capacidade de atendimento

### 📊 Dashboard e Relatórios

- Visão geral do sistema
- Estatísticas em tempo real
- Gráficos interativos
- Relatórios personalizáveis

## 🛠️ Tecnologias Utilizadas

### Frontend

- **[React 19](https://reactjs.org/)** - Biblioteca JavaScript para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript tipado
- **[Vite](https://vitejs.dev/)** - Build tool e dev server
- **[Mantine](https://mantine.dev/)** - Biblioteca de componentes UI
- **[React Router DOM](https://reactrouter.com/)** - Roteamento da aplicação
- **[Zod](https://zod.dev/)** - Validação de schemas
- **[Axios](https://axios-http.com/)** - Cliente HTTP
- **[SWR](https://swr.vercel.app/)** - Hooks para data fetching

### Desenvolvimento

- **[ESLint](https://eslint.org/)** - Linter JavaScript/TypeScript
- **[Prettier](https://prettier.io/)** - Formatador de código
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[Commitlint](https://commitlint.js.org/)** - Validação de commits

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Configuração principal da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Providers globais
│   └── routes.tsx         # Configuração de rotas
├── features/              # Módulos da aplicação
│   ├── auth/             # Autenticação
│   ├── driver/           # Gestão de motoristas
│   ├── guardian/         # Gestão de responsáveis
│   ├── home/             # Dashboard principal
│   ├── monitor/          # Gestão de monitores
│   ├── route/            # Gestão de rotas
│   ├── school/           # Gestão de escolas
│   ├── stop/             # Gestão de paradas
│   ├── student/          # Gestão de alunos
│   └── vehicles/         # Gestão de veículos
├── shared/               # Componentes e utilitários compartilhados
│   ├── components/       # Componentes reutilizáveis
│   ├── constants/        # Constantes da aplicação
│   ├── hooks/           # Custom hooks
│   ├── layouts/         # Layouts da aplicação
│   ├── types/           # Tipos TypeScript
│   └── utils/           # Utilitários
├── libs/                # Bibliotecas e configurações
│   ├── api/             # Configuração de APIs
│   ├── providers/       # Providers de contexto
│   └── storage/         # Gerenciamento de storage
└── theme/               # Configuração de tema
```

## 🚀 Instalação e Configuração

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Yarn ou npm
- Git

### Passos para Instalação

1. **Clone o repositório**

    ```bash
    git clone <url-do-repositorio>
    cd school_route_manager_webapp
    ```

2. **Instale as dependências**

    ```bash
    yarn install
    # ou
    npm install
    ```

3. **Configure as variáveis de ambiente**

    ```bash
    cp .env.example .env
    # Edite o arquivo .env com suas configurações
    ```

4. **Execute o projeto em modo de desenvolvimento**

    ```bash
    yarn dev
    # ou
    npm run dev
    ```

5. **Acesse a aplicação**
    ```
    http://localhost:5173
    ```

### Scripts Disponíveis

```bash
# Desenvolvimento
yarn dev              # Inicia o servidor de desenvolvimento
yarn build            # Gera build de produção
yarn preview          # Visualiza o build de produção

# Qualidade de Código
yarn lint             # Executa o linter
yarn format           # Formata o código com Prettier

# Deploy
yarn predeploy        # Prepara para deploy
yarn deploy           # Faz deploy para GitHub Pages
```

## 📖 Como Usar

### 1. Acesso ao Sistema

- Acesse a URL da aplicação
- Faça login com suas credenciais
- O sistema redirecionará para o dashboard principal

### 2. Navegação

- Use o menu lateral para acessar os diferentes módulos
- Cada módulo possui funcionalidades específicas de CRUD
- Utilize os filtros e busca para encontrar informações

### 3. Gestão de Dados

- **Cadastros**: Use os formulários para adicionar novos registros
- **Edição**: Clique no ícone de edição para modificar dados
- **Exclusão**: Use o ícone de lixeira para remover registros
- **Visualização**: Clique no ícone de olho para ver detalhes

### 4. Relatórios

- Acesse o dashboard para visualizar estatísticas
- Use os filtros de data para personalizar relatórios
- Exporte dados quando necessário

## 🤝 Contribuição

Este é um projeto acadêmico desenvolvido por estudantes do IFSP Campus Bragança Paulista. Para contribuições ou suporte comercial, entre em contato através dos canais listados abaixo.

## 📄 Licença

Este projeto está licenciado sob uma **Licença Proprietária**. Todos os direitos reservados.

**⚠️ IMPORTANTE**: Este software é propriedade intelectual dos desenvolvedores e está protegido por direitos autorais. A reprodução, distribuição ou modificação sem autorização expressa é proibida.

Para informações sobre licenciamento comercial, entre em contato conosco.

## 📞 Contato

### Equipe de Desenvolvimento

- **Arthur de Faria** - BP3038289
- **Inácio Fernandes Santana** - BP3039307
- **João Paulo Pereira Costa** - BP3039331
- **Lybio Croton de Moraes Junior** - BP303934X

### Instituição

**Instituto Federal de Educação, Ciência e Tecnologia São Paulo**  
**Campus Bragança Paulista**  
**Tecnologia em Análise e Desenvolvimento de Sistemas**

### Informações do Projeto

- **Nome**: Gerenciamento de Rotas Escolares
- **Versão**: 1.0.0
- **Ano**: 2025
- **Localização**: Bragança Paulista, SP

---

<div align="center">
  <p>Desenvolvido com ❤️ pelos alunos do IFSP Campus Bragança Paulista</p>
  <p>© 2025 - Todos os direitos reservados</p>
</div>
