# 📦 Guia de Deploy - Ferreira Tech Lab Store

## 🚀 Deploy no Firebase Hosting

### Pré-requisitos

1. **Firebase CLI instalado**
```bash
npm install -g firebase-tools
```

2. **Login no Firebase**
```bash
firebase login
```

3. **Projeto Firebase configurado**
O projeto já está configurado: `ferreiratechlaboficial`

---

## 📋 Passo a Passo para Deploy

### 1. Build da Aplicação React

```bash
cd react-app
npm run build
```

Isso vai gerar a pasta `dist/` com os arquivos otimizados.

### 2. Deploy no Firebase

Volte para a raiz do projeto:

```bash
cd ..
firebase deploy
```

Ou apenas o hosting:

```bash
firebase deploy --only hosting
```

### 3. Verificar Deploy

Após o deploy, você verá a URL:
```
✔  Deploy complete!

Hosting URL: https://ferreiratechlaboficial.web.app
```

---

## 🔄 Workflow Completo

```bash
# 1. Fazer mudanças no código
cd react-app
# ... editar arquivos ...

# 2. Testar localmente
npm run dev

# 3. Build para produção
npm run build

# 4. Preview do build (opcional)
npm run preview

# 5. Deploy
cd ..
firebase deploy
```

---

## 🛠️ Comandos Úteis

### Ver status do Firebase
```bash
firebase projects:list
```

### Ver logs do hosting
```bash
firebase hosting:channel:list
```

### Fazer rollback (voltar versão anterior)
```bash
firebase hosting:clone SOURCE_SITE_ID:SOURCE_CHANNEL_ID TARGET_SITE_ID:live
```

### Deploy em canal de preview (teste)
```bash
firebase hosting:channel:deploy preview
```

---

## ⚡ Deploy Automático (GitHub Actions)

Para automatizar o deploy, crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Install dependencies
        run: |
          cd react-app
          npm install
          
      - name: Build
        run: |
          cd react-app
          npm run build
          
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: ferreiratechlaboficial
```

---

## 📊 Otimizações Pós-Deploy

### 1. Configurar Cache Headers

No `firebase.json`:

```json
{
  "hosting": {
    "public": "react-app/dist",
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

### 2. Configurar Redirecionamentos

```json
{
  "hosting": {
    "redirects": [
      {
        "source": "/old-page",
        "destination": "/new-page",
        "type": 301
      }
    ]
  }
}
```

### 3. Ativar Compressão

Já ativado por padrão no Firebase Hosting.

---

## 🔐 Variáveis de Ambiente

Para produção, considere usar variáveis de ambiente:

1. Crie `.env.production` em `react-app/`:

```
VITE_FIREBASE_API_KEY=AIzaSyDvpId7612-DvYVZ44T6lOQvN-D_IyLHgE
VITE_FIREBASE_AUTH_DOMAIN=ferreiratechlaboficial.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=ferreiratechlaboficial
```

2. Use no código:

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // ...
};
```

---

## 📈 Monitoramento

### Firebase Analytics
Já configurado em `firebaseConfig.js`

### Ver métricas
```bash
firebase hosting:metrics
```

Ou acesse: https://console.firebase.google.com/project/ferreiratechlaboficial/hosting

---

## ❌ Solução de Problemas

### Erro: "No targets found"
```bash
firebase init hosting
```

### Erro: "Build failed"
```bash
cd react-app
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Erro: "Permission denied"
```bash
firebase login --reauth
```

---

## 📞 Suporte

Documentação Firebase: https://firebase.google.com/docs/hosting

---

**Deploy realizado com sucesso! 🎉**
