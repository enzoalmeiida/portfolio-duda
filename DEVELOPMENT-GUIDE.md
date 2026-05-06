# 🚀 Guia de Desenvolvimento - Portfólio Duda

## 📋 Índice
1. Estrutura do Projeto
2. Instalação e Setup
3. Desenvolvimento Local
4. Customização
5. Deploy
6. Recursos Úteis

---

## 📁 Estrutura do Projeto

```
portfolio-duda/
├── index.html                 # Página principal (single page)
├── css/
│   └── styles.css            # Estilos personalizados + Tailwind
├── js/
│   └── script.js             # Interatividades e animações
├── assets/
│   ├── images/               # Imagens dos projetos
│   ├── icons/                # Ícones SVG customizados
│   └── fonts/                # Fontes customizadas (se necessário)
├── DESIGN-GUIDE.md           # Este arquivo de design
├── README.md                 # Documentação geral
├── tailwind.config.js        # Configuração Tailwind (opcional)
└── package.json              # Dependências npm (se usar build)
```

---

## ⚙️ Instalação e Setup

### Opção 1: Desenvolvimento Simples (Sem Build)
```bash
# Apenas abrir index.html no navegador
# Tailwind é carregado via CDN
```

### Opção 2: Desenvolvimento com Build (Recomendado)

#### Prerequisitos
- Node.js 16+ instalado
- npm ou yarn

#### Setup
```bash
# 1. Navegar até a pasta do projeto
cd portfolio-duda

# 2. Inicializar npm (se não existir package.json)
npm init -y

# 3. Instalar Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# 4. Inicializar Tailwind
npx tailwindcss init -p

# 5. Instalar dependências de desenvolvimento
npm install -D concurrently chokidar

# 6. (Opcional) Instalar servidor local
npm install -D http-server
```

#### Configurar Tailwind (tailwind.config.js)
```javascript
module.exports = {
  content: [
    './index.html',
    './js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#FAFAF8',
          100: '#F5F5F3',
          200: '#E5E5E3',
          500: '#666666',
          700: '#4F4F4F',
          900: '#1A1A1A',
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '80rem',
      }
    },
  },
  plugins: [],
}
```

#### Configurar package.json
```json
{
  "scripts": {
    "dev": "concurrently \"npm run tailwind\" \"npm run serve\"",
    "tailwind": "tailwindcss -i ./css/styles.css -o ./css/output.css --watch",
    "serve": "http-server . -p 8000",
    "build": "tailwindcss -i ./css/styles.css -o ./css/output.css --minify"
  }
}
```

#### Executar
```bash
# Desenvolvimento (com watch e servidor)
npm run dev

# Build para produção
npm run build
```

---

## 💻 Desenvolvimento Local

### Servidor Local Simples
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node (se instalado http-server)
npx http-server

# Live Server (VS Code extension)
# Clicar em "Go Live" no VS Code
```

Acesso: `http://localhost:8000`

---

## 🎨 Customização

### Alterar Cores
Editar [css/styles.css](css/styles.css) ou usar Tailwind classes no HTML:

```html
<!-- Antes (cinza escuro) -->
<h1 class="text-neutral-900">Título</h1>

<!-- Depois (azul customizado) -->
<h1 class="text-blue-900">Título</h1>
```

### Alterar Fontes
No `<head>` do index.html, mudar link do Google Fonts:

```html
<!-- Serif (títulos) -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">

<!-- Sans-serif (corpo) -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Depois atualizar em `tailwind.config.js`:
```javascript
fontFamily: {
  serif: ['Playfair Display', 'serif'],
  sans: ['Inter', 'sans-serif'],
}
```

### Adicionar Seções Novas
```html
<!-- Template para nova seção -->
<section id="nova-secao" class="py-24 px-6 lg:px-8 bg-white">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-5xl font-serif font-bold text-neutral-900 mb-16">
      Título da Seção
    </h2>
    <!-- Conteúdo aqui -->
  </div>
</section>
```

### Adicionar Projetos
Duplicar um `<div class="group">` no grid de projetos e alterar:
- Nome do projeto
- Dimensões (col-span, row-span)
- Texto do hover

```html
<div class="group lg:col-span-1">
  <div class="relative bg-neutral-300 h-64 overflow-hidden cursor-pointer">
    <img src="assets/images/projeto-7.jpg" alt="Projeto 7" class="w-full h-full object-cover">
    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
      <h3 class="text-white text-lg font-serif font-bold opacity-0 group-hover:opacity-100">
        Novo Projeto
      </h3>
    </div>
  </div>
</div>
```

### Integrar Imagens Reais
Criar pasta `assets/images/` e adicionar:

```html
<!-- Substituir placeholders -->
<img src="assets/images/projeto-1.jpg" alt="Identidade Visual Marca A" class="w-full h-full object-cover">

<!-- Com lazy loading -->
<img src="assets/images/projeto-1.jpg" alt="Projeto 1" class="w-full h-full object-cover loading="lazy">
```

---

## 📱 Responsividade - Testes

### Breakpoints Tailwind
```
sm  = 640px
md  = 768px
lg  = 1024px
xl  = 1280px
2xl = 1536px
```

### Testar em DevTools
```javascript
// No console do navegador
// Simular viewport
// F12 > Menu (três pontos) > More tools > Device mode
```

### Componentes Responsivos - Exemplo
```html
<!-- Oculto em mobile, visível em desktop -->
<ul class="hidden md:flex gap-12">
  <!-- Menu desktop -->
</ul>

<!-- Visível em mobile, oculto em desktop -->
<button class="md:hidden">
  <!-- Menu mobile -->
</button>

<!-- Diferentes tamanhos de fonte -->
<h1 class="text-4xl md:text-6xl lg:text-7xl">Título</h1>

<!-- Diferentes espaçamentos -->
<section class="py-12 lg:py-24 px-4 lg:px-8">
  <!-- Conteúdo -->
</section>
```

---

## 🚢 Deploy

### Opção 1: Vercel (Recomendado)
```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Fazer login
vercel login

# 3. Deploy
vercel

# 4. Domínio customizado
vercel env add VERCEL_URL
```

### Opção 2: Netlify
```bash
# 1. Conectar repositório GitHub a Netlify
# 2. Build command: npm run build
# 3. Publish directory: ./
# 4. Deploy automático ao push
```

### Opção 3: GitHub Pages
```bash
# 1. Criar repositório 'portfolio-duda' no GitHub
# 2. Push do código
git add .
git commit -m "Initial commit"
git push origin main

# 3. GitHub Pages configurado automaticamente
# Acessar em: https://seu-usuario.github.io/portfolio-duda
```

### Opção 4: Hostinger / Namecheap
```bash
# 1. Upload via FTP
# 2. Usar FileZilla ou painel da hosting
# 3. Fazer upload de todos os arquivos
# 4. Configurar domínio customizado
```

---

## ✅ Checklist de Qualidade

### Antes do Deploy
- [ ] Teste em desktop, tablet, mobile
- [ ] Teste em Chrome, Firefox, Safari, Edge
- [ ] Lighthouse score > 90
- [ ] Sem erros no console
- [ ] Imagens otimizadas (< 500KB cada)
- [ ] Links internos funcionando
- [ ] Links externos abrindo em nova aba (`target="_blank"`)
- [ ] Email funcional (mailto:)
- [ ] Social links corretos

### SEO Básico
- [ ] Meta description adicionada
- [ ] OG tags para social sharing
- [ ] Favicon adicionado
- [ ] robots.txt criado
- [ ] sitemap.xml criado

### Performance
- [ ] Fontes carregando rápido
- [ ] Images lazy loading
- [ ] CSS minificado
- [ ] JS minificado
- [ ] Sem render-blocking resources

---

## 📚 Recursos Úteis

### Documentação
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org)
- [HTML Semantic](https://html.spec.whatwg.org/)

### Ferramentas
- [Color Picker](https://color-picker.com/)
- [Unsplash](https://unsplash.com/) - Imagens grátis
- [FontAwesome](https://fontawesome.com/) - Ícones
- [TinyPNG](https://tinypng.com/) - Compressão de imagens
- [Google Fonts](https://fonts.google.com/)

### Validação
- [W3C HTML Validator](https://validator.w3.org/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WAVE Accessibility](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Inspiração
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)
- [Awwwards](https://www.awwwards.com/)
- [Design Inspiration](https://designinspiration.com/)

---

## 🐛 Troubleshooting

### Tailwind não está funcionando
```bash
# Reconstruir CSS
npm run build

# Ou verificar CDN link no HTML
<script src="https://cdn.tailwindcss.com"></script>
```

### Fontes não carregando
```bash
# Verificar link Google Fonts
# Testar em incognito (sem cache)
# Verificar Network Tab (DevTools)
```

### Mobile menu não abrindo
```javascript
// Verificar no console
console.log(document.getElementById('mobile-menu'));
// Confirmar IDs batem no HTML
```

### Imagens não aparecem
```bash
# Verificar caminho relativo
# assets/images/projeto-1.jpg vs ./assets/images/projeto-1.jpg
# Usar paths relativos à raiz
```

---

## 📞 Suporte e Dúvidas

Para dúvidas sobre desenvolvimento:
1. Verificar [DESIGN-GUIDE.md](DESIGN-GUIDE.md) para detalhes visuais
2. Consultar [Tailwind Docs](https://tailwindcss.com/docs)
3. Verificar console do navegador (F12)
4. Testar em diferentes navegadores

---

**Versão:** 1.0  
**Atualizado:** Maio 2024  
**Desenvolvedor:** Seu Nome
