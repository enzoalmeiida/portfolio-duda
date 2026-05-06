# Portfólio de Duda - Publicidade & Artes Visuais

## 🎨 Visão Geral

Um website de portfólio minimalista e sofisticado para uma profissional de Publicidade e Propaganda e Artes Visuais. Design Clean Girl Aesthetic misturado com galeria de arte contemporânea.

### Características Principais
- ✨ Design minimalista e elegante
- 📱 Responsivo (Mobile, Tablet, Desktop)
- ⚡ Performance otimizada
- ♿ Acessível (WCAG AA)
- 🎯 Foco nos projetos (sem competição visual)
- 🎭 Interações suaves e refinadas

---

## 🚀 Quick Start

### Opção 1: Abrir Diretamente (Mais Simples)
```bash
# Apenas abrir index.html no navegador
# Tailwind CSS é carregado via CDN
```

### Opção 2: Com Servidor Local
```bash
# Python 3
python -m http.server 8000

# Acessar: http://localhost:8000
```

### Opção 3: Desenvolvimento Completo
```bash
# Ver DEVELOPMENT-GUIDE.md para instruções detalhadas
npm install
npm run dev
```

---

## 📁 Estrutura de Arquivos

```
portfolio-duda/
├── index.html              # Página principal
├── css/styles.css          # Estilos personalizados
├── js/script.js            # Interatividades
├── assets/                 # Imagens e recursos
├── DESIGN-GUIDE.md        # Especificações visuais detalhadas
├── DEVELOPMENT-GUIDE.md   # Guia técnico de desenvolvimento
└── README.md              # Este arquivo
```

---

## 🎯 Seções do Site

### 1. Header (Topo Fixo)
- Nome "Duda" alinhado à esquerda
- Menu navegação: Trabalhos, Sobre, Contato
- Efeito glassmorphism (blur background)
- Menu móvel responsivo

### 2. Hero Section
- Frase de impacto: "Estratégia encontra Estética"
- Muito espaço em branco (white space intencional)
- Botão CTA "Explorar Projetos"
- Min height: 100vh

### 3. Seção de Projetos
- Grid Masonry com 3 colunas
- 6 projetos com diferentes tamanhos
- Hover effect: overlay com texto branco
- Imagens sem bordas, apenas backgrounds

### 4. Sobre
- Layout assimétrico
- Foto profissional + Elemento decorativo
- Texto curto e direto
- Call-to-action link

### 5. Contato / Footer
- Texto amigável "Vamos criar algo juntos?"
- Email em destaque
- Ícones sociais (Behance, Instagram, LinkedIn)
- Copyright

---

## 🎨 Paleta de Cores

| Cor | Hexadecimal | Uso |
|-----|-------------|-----|
| Off-White | #FAFAF8 | Fundo principal |
| Branco | #FFFFFF | Seções alternadas |
| Cinza Escuro | #1A1A1A | Textos principais |
| Cinza Médio | #666666 | Textos secundários |
| Cinza Claro | #E5E5E3 | Borders, divisórias |
| Preto | #000000 | Acentos, hover |

---

## 🔤 Tipografia

### Títulos (Merriweather - Serif)
- Elegante, sofisticada
- Weights: 400, 700
- Sizes: H1 56px, H2 48px

### Corpo (Poppins - Sans-serif)
- Limpa, moderna, legível
- Weights: 300, 400, 500, 600, 700
- Sizes: 18px body, 14px UI

---

## 📱 Responsividade

- **Mobile:** < 640px (1 coluna de projetos)
- **Tablet:** 640px - 1024px (2 colunas)
- **Desktop:** > 1024px (3 colunas Masonry)

Todos os elementos adaptam tamanho e espaçamento conforme necessário.

---

## 🎭 Animações

- Fade-in ao scroll (600ms)
- Hover suave em links (300ms)
- Overlay em projetos (300ms)
- Scale suave em cards (300ms)
- Smooth scroll entre seções

---

## 🔧 Customização

### Adicionar Projetos
1. Duplicar um `<div class="group">` no grid
2. Ajustar tamanho (col-span, row-span)
3. Alterar nome do projeto

### Mudar Cores
Editar `css/styles.css` ou usar Tailwind classes:
```html
<h1 class="text-blue-900">Novo Título</h1>
```

### Alterar Fontes
1. Procurar fontes no [Google Fonts](https://fonts.google.com/)
2. Atualizar link no `<head>`
3. Configurar em `tailwind.config.js`

---

## ⚡ Performance

- Lighthouse Score: Target > 90
- Images: Otimizadas (TinyPNG)
- CSS: Minificado via Tailwind
- JS: Vanilla (sem dependências pesadas)
- Fonts: Carregadas via CDN

---

## ♿ Acessibilidade

- Contraste WCAG AA
- Keyboard navigation
- Focus states visíveis
- Semantic HTML
- Alt text em imagens
- Respeita preferência de redução de movimento

---

## 🚢 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
Conectar repositório GitHub, deploy automático

### GitHub Pages
Push para repositório, site em `https://usuario.github.io/portfolio-duda`

### Hosting Tradicional
Upload via FTP com FileZilla

Ver [DEVELOPMENT-GUIDE.md](DEVELOPMENT-GUIDE.md) para detalhes completos.

---

## 📚 Documentação

- **[DESIGN-GUIDE.md](DESIGN-GUIDE.md)** - Especificações visuais detalhadas
- **[DEVELOPMENT-GUIDE.md](DEVELOPMENT-GUIDE.md)** - Guia técnico e setup

---

## 🛠️ Tecnologias

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS
- **Vanilla JavaScript** - Interatividades
- **Google Fonts** - Tipografia

---

## 📞 Próximos Passos

1. ✅ Substituir imagens placeholder por imagens reais
2. ✅ Preencher textos com conteúdo próprio
3. ✅ Configurar links sociais (Behance, Instagram, LinkedIn)
4. ✅ Adicionar Google Analytics
5. ✅ Otimizar imagens
6. ✅ Testar responsividade e performance
7. ✅ Deploy em hosting

---

## ✨ Showcase

Abra `index.html` no navegador para ver o website em ação!

---

**Desenvolvido com ❤️ para Publicidade & Artes Visuais**  
Versão 1.0 | Maio 2024
