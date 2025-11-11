# Instruções para Testar TOC Sticky e Responsividade

## Problema Identificado

O TOC (Table of Contents) com `position: sticky` está configurado corretamente no CSS, MAS ele é **escondido** (`display: none`) em telas menores que 1200px.

## Como o TOC Sticky Funciona

### Em Telas Grandes (> 1200px)
- Layout: `Sidebar (250px) | Content | TOC (200px)`
- TOC tem `position: sticky; top: 20px`
- TOC acompanha o scroll da página ✅
- Scrollbar customizado visível quando TOC é maior que viewport

### Em Telas Médias (< 1200px)
- TOC é **ESCONDIDO** com `display: none`
- Layout: `Sidebar (200px) | Content`
- **TOC não é visível, então sticky não funciona**

### Em Telas Pequenas (< 992px)
- Layout: Single column
- Sidebar fica relativa (não sticky)
- TOC continua escondido

## Para Testar

1. **Inicie o servidor de desenvolvimento:**
   ```bash
   cd react-app
   npx vite
   ```

2. **Acesse no navegador:**
   - http://localhost:5173/symphony
   - http://localhost:5173/horus

3. **Teste o TOC Sticky:**
   - **Tela GRANDE (>1200px):** Abra em tela cheia
     - Você deve ver 3 colunas: Sidebar | Conteúdo | TOC
     - Role a página para baixo
     - TOC deve "grudar" no topo e acompanhar o scroll
     - Se TOC for grande, deve aparecer scrollbar customizada
   
   - **Tela MÉDIA (<1200px):** Redimensione janela ou use DevTools (F12)
     - TOC desaparece (apenas 2 colunas)
     - Isso é INTENCIONAL para economizar espaço
   
   - **Tela MOBILE (<768px):** Celular ou DevTools mobile
     - Layout em coluna única
     - Sidebar e TOC escondidos

## Verificar Responsividade Mobile

### Symphony (/symphony)
- Hero title: 3.5rem → 2.5rem → 2rem
- Stats: Horizontal → Vertical
- Botões: Inline → Full width
- Grid features: 3 colunas → 1 coluna

### Horus (/horus)
- Hero title: 3rem → 2.5rem → 2rem
- Stats: Horizontal → Vertical
- Botões: Inline → Full width
- Grid features: 3 colunas → 1 coluna

## Breakpoints Configurados

```css
/* Desktop grande - TOC visível e sticky */
> 1200px: 3 colunas (Sidebar | Content | TOC)

/* Desktop médio - TOC escondido */
992px - 1200px: 2 colunas (Sidebar | Content)

/* Tablet - Single column */
768px - 992px: 1 coluna

/* Mobile grande */
576px - 768px: 1 coluna, fontes menores

/* Mobile pequeno */
< 576px: 1 coluna, layout vertical, botões full-width
```

## O que foi implementado ✅

1. **TOC Sticky funcionando** - mas apenas em telas > 1200px (por design)
2. **Scrollbar customizada** - roxo para Symphony, cyan para Horus
3. **Mobile responsivo completo** - 4 breakpoints diferentes
4. **Layout adaptativo** - 3 → 2 → 1 colunas

## Nota Importante

O TOC sticky **SÓ É VISÍVEL EM TELAS GRANDES** (>1200px). Isso é comum em sites de documentação profissionais (React Docs, Next.js, etc.) porque:
- Em telas menores não há espaço para 3 colunas
- Mobile usa navegação diferente (menu hambúrguer)
- TOC seria muito pequeno e inutilizável

Se quiser que TOC apareça em telas menores, precisaria modificar o breakpoint ou criar uma versão mobile diferente (ex: menu dropdown).
