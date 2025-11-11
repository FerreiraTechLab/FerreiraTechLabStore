# Ferreira Tech Lab Store - React App

Aplicação React moderna para exibir e gerenciar os projetos da Ferreira Tech Lab.

## Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool ultra-rápida
- **React Router DOM** - Roteamento client-side
- **Firebase 9+** - Backend (Firestore + Hosting + Analytics)
- **Bootstrap 5** - Framework CSS responsivo
- **Font Awesome** - Biblioteca de ícones

## Estrutura do Projeto

```
react-app/
├── public/
│   └── assets/          # Imagens, logos, CSS estático
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Páginas da aplicação
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetails.jsx
│   │   ├── Contact.jsx
│   │   ├── Donates.jsx
│   │   └── Rules.jsx
│   ├── services/        # Configurações externas
│   │   └── firebaseConfig.js
│   ├── hooks/           # Custom React hooks (futuro)
│   ├── App.jsx          # Componente principal com rotas
│   ├── App.css          # Estilos globais
│   └── main.jsx         # Entry point
└── package.json
```

## Como Executar

### Desenvolvimento

```bash
cd react-app
npm install
npm run dev
```

Acesse: http://localhost:5173

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados em `dist/`

### Preview do Build

```bash
npm run preview
```

## Firebase

### Configuração

As credenciais do Firebase estão em `src/services/firebaseConfig.js`

### Estrutura do Firestore

**Coleção: `apps`**

Cada documento representa um aplicativo com os campos:

- nome, descricaoCurta, descricao, categoria
- logoUrl, apkUrl, repoUrl, screenshots[]
- arquiteturaSuportada[], tamanhoDownload, tamanhoInstalado
- funcionalidades (CSV), requisitos (CSV)

### Deploy no Firebase Hosting

```bash
# Na raiz do projeto
cd ..
firebase deploy
```

O `firebase.json` já está configurado para usar `react-app/dist/`

## Rotas da Aplicação

- `/` - Homepage com features
- `/projects` - Lista de todos os projetos (do Firestore)
- `/project/:appId` - Detalhes de um projeto específico
- `/contact` - Página de contato
- `/donates` - Informações de doação (PIX)
- `/rules` - Regras para submissão de apps

## Customização

### Cores Principais

- **Primária**: `#196FB6` (azul)
- **Secundária**: `#0056b3` (azul escuro)
- **Background**: `#f8f9fa` (cinza claro)

Altere em `src/App.css`

## Dependências Principais

- react ^18.3.1
- react-router-dom ^6.28.0
- firebase ^11.0.2
- bootstrap ^5.3.3
- @fortawesome/fontawesome-free ^6.7.2

## Solução de Problemas

### Erro: "Module not found"

```bash
npm install
```

### Imagens não aparecem

Verifique se a pasta `public/assets/` contém as imagens

### Firebase não conecta

Verifique as credenciais em `src/services/firebaseConfig.js`

## Licença

© 2024 Ferreira Tech Lab. Todos os direitos reservados.

---

**Desenvolvido com ❤️ por Weslei Ferreira**

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
