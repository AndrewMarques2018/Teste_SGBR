# ConfigWave

> Uma aplicação web moderna que simula uma seção de **Configurações** e **Perfil de Usuário**, com foco em componentização, reatividade e boas práticas.

---

## 📘 Visão Geral

**ConfigWave** é uma SPA (Single Page Application) desenvolvida com **Vue 3**, **Vite**, **TypeScript** e **TailwindCSS**.  
O projeto combina **componentes reutilizáveis** e **integração com PrimeVue**, resultando em uma interface moderna, leve e escalável.

---

## ✨ Recursos

- 🔹 **Página de Perfil Dinâmica**  
  Carrega dados de uma API mockada e preenche automaticamente os campos do perfil.

- ⚙️ **Página de Configurações Interativa**  
  Interface intuitiva com múltiplos tipos de campo (Label, Switch, InputLine, InputBox, List, Button).

- 🌓 **Tema Claro/Escuro (Light/Dark Mode)**  
  Alternância de tema persistente usando `localStorage` e um composable (`useTheme`).

- 💬 **Serviços de UI Customizados**
  - **useCustomToast:** sistema global de notificações.  
  - **useCustomConfirm:** modal de confirmação baseado em *Promises*.

- 🧩 **Componentização Reutilizável**
  - `ConfigOption.vue` – renderiza campos dinamicamente.  
  - `SidebarButton.vue` – botão lateral customizado.  
  - `CustomToast.vue` e `CustomConfirmDialog.vue` – controlam UI global.

- 📚 **Documentação de Componentes com Storybook**  
  Visualização e teste isolado de componentes.

---

## 🧠 Decisões Técnicas

### 🏗️ Framework e Build
- **Vue 3 (Composition API)** com `<script setup>` e **TypeScript**, pela performance e tipagem forte.  
- **Vite** como ferramenta de build pela velocidade de HMR e simplicidade de configuração.

### 🎨 Estilização (Tailwind + PrimeVue)
- **TailwindCSS:** usado para layout, espaçamento e responsividade.  
- **PrimeVue:** para componentes complexos (Accordion, Button, Avatar).  
- **Pass Through (pt):** usado para sobrescrever estilos do PrimeVue, integrando à identidade visual do Tailwind.

### 🧩 Gerenciamento de Estado (Composables)
- `useTheme` – controla o tema e salva no `localStorage`.  
- `useUserProfile` – abstrai a busca e atualização dos dados do perfil.  
- `useCustomToast` / `useCustomConfirm` – serviços globais baseados em *reactive state*.

### 🌐 API Simulada
- **mockApi.ts** simula requisições assíncronas (com `setTimeout`) para perfis ou configurações, permitindo testar estados de loading e erro.

---

## 📱 Comportamento Mobile

- `/settings` → exibe **somente o menu principal**.  
- Ao clicar em um item → navega para `/settings/[nome-do-item]` exibindo apenas o **submenu**.  
- Um **ícone de voltar** aparece no topo para retornar ao menu anterior.

---

## 🚀 Começando

### 🔧 Pré-requisitos
- Node.js `v18+`  
- NPM `v9+` (ou Yarn / PNPM equivalente)

### 📦 Instalação

Clone o repositório  
```bash
git clone https://github.com/AndrewMarques2018/configwave.git
````

Acesse o diretório  
```bash
cd configwave
````

Instale as dependências  
```bash
npm install
```` 

### ▶️ Rodando o Projeto

Inicie o servidor de desenvolvimento (http://localhost:5173)  
```bash
npm run dev
```` 

### 📖 Rodando o Storybook

Inicie o catálogo de componentes (http://localhost:6006)  
```bash
npm run storybook
````

---

## 🧱 Estrutura do Projeto

````bash
configwave/
├── .storybook/           # Configurações do Storybook
├── src/
│   ├── api/              # Simulação de API (mockApi.ts)
│   ├── assets/           # Imagens e fontes
│   ├── components/       # Componentes Vue reutilizáveis (.vue)
│   │   ├── *.stories.ts  # Histórias do Storybook
│   │   ├── ConfigOption.vue
│   │   ├── CustomConfirmDialog.vue
│   │   ├── CustomToast.vue
│   │   └── SidebarButton.vue
│   ├── composables/      # Lógica reativa (useTheme, useCustomToast, etc.)
│   ├── data/             # Dados estáticos (settingsData.ts)
│   ├── layouts/          # Layouts principais (SidebarLeft, etc.)
│   ├── pages/            # Páginas (Home, Profile, Settings)
│   ├── router/           # Configuração do Vue Router
│   ├── styles/           # Arquivos de estilo (Tailwind, globais)
│   ├── App.vue           # Ponto de entrada principal do app
│   └── main.ts           # Inicialização do Vue, PrimeVue e Router
├── package.json
└── README.md
````

