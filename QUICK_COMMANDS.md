# ⚡ Comandos Rápidos - Ferreira Tech Lab

## 🚀 Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
cd react-app
npm run dev

# Abrir automaticamente no navegador
npm run dev -- --open
```

## 🏗️ Build

```bash
# Build para produção
cd react-app
npm run build

# Preview do build
npm run preview
```

## 🔥 Deploy

```bash
# Deploy completo
firebase deploy

# Apenas hosting
firebase deploy --only hosting

# Ver status
firebase projects:list
```

## 📦 Dependências

```bash
# Instalar dependências
cd react-app
npm install

# Atualizar dependências
npm update

# Adicionar nova dependência
npm install nome-do-pacote
```

## 🧹 Limpeza

```bash
# Limpar node_modules e reinstalar
cd react-app
rm -rf node_modules package-lock.json
npm install

# Limpar build
rm -rf dist
```

## 🐛 Debug

```bash
# Ver logs do Firebase
firebase hosting:channel:list

# Ver erros de build
cd react-app
npm run build -- --debug

# Verificar versão do Node
node --version

# Verificar versão do npm
npm --version
```

## 📊 Análise

```bash
# Análise de bundle
cd react-app
npm run build -- --mode production

# Ver tamanho dos arquivos
ls -lh dist/assets/
```

## 🔧 Git

```bash
# Status
git status

# Adicionar mudanças
git add .

# Commit
git commit -m "Sua mensagem"

# Push
git push origin main
```

## 🎯 Atalhos Úteis

### Terminal 1 (Desenvolvimento)
```bash
cd react-app && npm run dev
```

### Terminal 2 (Firestore Emulator - Opcional)
```bash
firebase emulators:start
```

---

## 📱 URLs Importantes

- **Dev Local**: http://localhost:5173
- **Firebase Console**: https://console.firebase.google.com
- **Hosting URL**: https://ferreiratechlaboficial.web.app

---

## 🆘 Resolução Rápida de Problemas

### Erro: "Cannot find module"
```bash
cd react-app && npm install
```

### Erro: "Port 5173 already in use"
```bash
# Mudar porta
npm run dev -- --port 3000
```

### Erro: Firebase deploy falha
```bash
firebase login --reauth
cd react-app && npm run build
cd .. && firebase deploy
```

### Assets não carregam
```bash
# Verificar se a pasta existe
ls public/assets/

# Copiar novamente se necessário
cp -r ../public/assets public/
```

---

**Dica**: Salve este arquivo nos favoritos do seu navegador! 🔖
