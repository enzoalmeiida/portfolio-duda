# 📐 Guia de Design Visual - Portfólio de Publicidade & Artes Visuais

## 1️⃣ CONCEITO VISUAL

**Estilo:** Clean Girl Aesthetic + Galeria de Arte Contemporânea  
**Filosofia:** A interface desaparece para dar destaque aos projetos  
**Abordagem:** Minimalismo sofisticado com uso estratégico de espaço em branco

---

## 2️⃣ PALETA DE CORES

### Cores Principais
```
Off-White (Fundo Principal):  #FAFAF8
Branco Puro:                   #FFFFFF
Cinza Escuro (Textos):         #1A1A1A
Cinza Médio:                   #666666
Cinza Claro (Acessórios):      #E5E5E3
Preto (Acentos/Hover):         #000000
```

### Aplicação
- **Fundo de página:** Off-White (#FAFAF8)
- **Texto principal:** Cinza Escuro (#1A1A1A)
- **Texto secundário:** Cinza Médio (#666666)
- **Borders/Divisórias:** Cinza Claro com 20% opacity
- **Hover states:** Transição suave para Preto
- **Overlay em projetos:** Preto com 40% opacity no hover

---

## 3️⃣ TIPOGRAFIA

### Fontes Utilizadas

#### Títulos (Serif Elegante)
- **Font:** Merriweather
- **Weights:** 400 (Regular), 700 (Bold)
- **Uso:** H1, H2, nomes de projetos
- **Características:** Elegante, sofisticada, com serifs geométricos

```
Tamanhos Responsivos:
- H1 (Hero): 56px (desktop) → 40px (mobile)
- H2 (Seções): 48px (desktop) → 32px (mobile)
- H3 (Projetos): 28px (desktop) → 20px (mobile)
- Nome (Header): 28px (desktop) → 24px (mobile)
```

#### Corpo de Texto (Sans-Serif Geométrica)
- **Font:** Poppins
- **Weights:** 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Uso:** Parágrafos, menus, UI elements
- **Características:** Limpa, moderna, altamente legível

```
Tamanhos:
- Navegação: 14px
- Body Text: 18px (desktop) → 16px (mobile)
- Small Text: 12px
Line Height: 1.6 para readability
Letter Spacing: Tracking tight em titles
```

### Hierarquia Visual
1. **Primário:** H1 Merriweather Bold 56px
2. **Secundário:** H2 Merriweather Bold 48px
3. **Terciário:** Body Poppins Regular 18px
4. **Destaque:** Poppins SemiBold 14px
5. **Footer:** Poppins Light 12px

---

## 4️⃣ ESPAÇAMENTO E LAYOUT

### Princípios de Spacing
- **Seções:** 96px (desktop) / 48px (mobile) entre elas
- **Container Max Width:** 1280px (7xl em Tailwind)
- **Padding Horizontal:** 24px (lg) / 16px (md)
- **Gap Grid:** 24px entre itens

### White Space Intencional
```
Hero Section:
- 128px top padding (header + space)
- 96px bottom padding
- 96px vertical gaps internos
- Criar sensação de "respiração" visual

Projetos:
- 24px entre cards
- Sem bordas, apenas as imagens

Sobre:
- 64px gap entre foto e texto
- Elemento decorativo (border) para dinamismo
```

---

## 5️⃣ GRID DE PROJETOS - MASONRY

### Estrutura
```
Desktop (3 colunas):
1. [GRANDE - 2 cols x 2 rows] | [Normal] | [Normal]
                              | [Normal] | [Normal]
2. [Normal - 2 cols]          | [Normal]
```

### Dimensões
```
Grande:     height: auto (min 400px)
Normal:     height: 256px (16rem)
Responsive: 100% em mobile (1 coluna)
```

### Hover Effects
```
- Scale suave: 1 → 1.02
- Overlay: Fade do preto (0% → 40%)
- Texto: Fade-in branco, centralizado
- Transição: 300ms ease-out
- Cursor: pointer
```

### Sem Bordas
- Cards têm apenas as imagens/background
- Nenhuma borda visível
- Separação feita pelo gap (24px)
- Clean e limpo

---

## 6️⃣ COMPONENTES CHAVE

### Header (Sticky)
```
- Position: Fixed, top 0, z-50
- Height: 72px
- Backdrop blur: 10px
- Border bottom: 1px, cinza claro com 20% opacity
- Flex: nome à esquerda, menu à direita
- Menu desktop: 3 items (Trabalhos, Sobre, Contato)
- Menu mobile: Toggle button, dropdown
- Transparência: 95% background opacity
```

### Botão CTA "Explorar Projetos"
```
Style: Outlined / Hollow
- Border: 2px #1A1A1A
- Padding: 12px 32px
- Font: Poppins 14px SemiBold
- Hover: Background preto, texto branco
- Transition: 300ms ease
- Sem border-radius (anguladx)
```

### Cards de Projeto
```
Base:
- Aspect ratio: Variável (Masonry)
- Background: Gradient cinza (placeholder)
- Overflow: hidden
- Cursor: pointer

Overlay:
- Posição: Absolute full
- Background: rgba(0,0,0,0) → rgba(0,0,0,0.4)
- Flex center para texto
- Transition: 300ms ease

Texto:
- Cor: Branco
- Font: Merriweather Bold
- Tamanho: 20px-28px (dependendo do tamanho do card)
- Opacity: 0 → 1
```

### Seção Sobre - Assimétrica
```
Layout:
- Grid 2 colunas (desktop), 1 coluna (mobile)
- Lado esquerdo: Foto (aspect-square)
- Lado direito: Texto
- Gap: 64px
- Ordem invertida em mobile (foto abaixo)

Foto:
- Aspect ratio: 1:1
- Elemento decorativo: Border vazio no canto
- Tamanho: 400px x 400px
```

### Social Links (Footer)
```
Style:
- Ícones FA em círculos com border
- Width/Height: 48px
- Border: 1px #D3D3D3
- Cores: Cinza → Preto on hover
- Border também muda: Cinza → Preto
- Transition: 300ms ease
- Flex gap: 32px
- Centered
```

---

## 7️⃣ ANIMAÇÕES E INTERAÇÕES

### Scroll Animations
```
- Fade-in-up: 600ms ease-out
- Aplicar em seções ao entrar no viewport
- 10% threshold, margin -100px
```

### Hover Effects
```
- Links: Subtle color change (300ms)
- Botões: Background + text invert (300ms)
- Projetos: Scale 1.02 + overlay fade (300ms)
- Sociais: Border + icon color change (300ms)
```

### Mobile Interactions
```
- Menu toggle: smooth open/close
- No hover effects em touch (usar @media hover)
- Tap targets: min 44x44px
```

---

## 8️⃣ RESPONSIVIDADE

### Breakpoints Tailwind
```
Mobile:   < 640px (sm)
Tablet:   640px - 1024px (md, lg)
Desktop:  > 1024px (xl, 2xl)
```

### Ajustes por Device

**Mobile (< 640px)**
- 1 coluna para grid de projetos
- Font sizes reduzidas 20%
- Padding reduzido: 16px
- Menu hamburger
- Hero text: 40px
- Sem elementos decorativos complexos

**Tablet (640px - 1024px)**
- 2 colunas para grid
- Menu desktop visível
- Espaçamento balanceado
- Hero text: 48px

**Desktop (> 1024px)**
- 3 colunas com Masonry
- Espaçamento máximo
- Todos efeitos ativos
- Hero text: 56px

---

## 9️⃣ ACESSIBILIDADE

### Checklist
- [ ] Contraste de cores: WCAG AA (min 4.5:1 para text)
- [ ] Keyboard navigation: Tab entre elementos
- [ ] Focus states: Outline visível
- [ ] Alt text: Em todas as imagens
- [ ] Semantic HTML: h1, nav, section, footer
- [ ] Skip links: Pular para conteúdo principal
- [ ] Reduced motion: Respeitar preferência do SO

### Implementação
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}

/* Focus visible */
button:focus-visible,
a:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
}
```

---

## 🔟 PERFORMANCE E OTIMIZAÇÃO

### Imagens
- [ ] Usar formato WebP com fallback
- [ ] Lazy loading em projetos
- [ ] Srcset para responsividade
- [ ] Compressão: TinyPNG/ImageOptim
- [ ] Dimensões: 1200px width max

### CSS
- [ ] Tailwind Build: Purge unused classes
- [ ] Minify: 30-40KB gzipped
- [ ] Critical CSS: Inline acima da dobra

### JavaScript
- [ ] Vanilla JS (sem dependências desnecessárias)
- [ ] Defer loading scripts
- [ ] Event delegation para performance

### Lighthouse Targets
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95

---

## 1️⃣1️⃣ SECCIONES DETALHADAS

### Header
```html
- Fixed sticky
- Glassmorphism effect (blur background)
- Smooth shadow on scroll
- Mobile menu toggle
- Active link highlighting
```

### Hero
```html
- Min height: 100vh
- Padding top: 32 + header height
- Center content
- Large impactful headline
- Subheading smaller weight
- CTA button outlined style
- Lots of white space
```

### Projetos
```html
- Title section with underline (16px width, 4px height)
- Masonry grid auto-rows
- 6-9 projeto items
- Smooth hover animations
- No borders, only backgrounds
- Consistent spacing
```

### Sobre
```html
- Asymmetric grid layout
- Photo + Decorative border element
- Short, impactful bio
- Call to action link
- 2 column desktop, 1 column mobile
```

### Contato
```html
- Large centered heading
- Prominent email link
- Small horizontal divider
- Social icons in circles
- Copyright footer
```

---

## 1️⃣2️⃣ CUSTOMIZAÇÃO FUTURA

### Para Integração de Dados
1. Substituir placeholders de imagens por `<img src>` real
2. Criar componentes reutilizáveis em React/Vue
3. Adicionar CMS (Contentful, Sanity)
4. Integração com Behance API (opcional)

### Temas Opcionais
- [ ] Dark mode (CSS variables)
- [ ] Language switcher (i18n)
- [ ] Case study modal/pages
- [ ] Blog section

### Analytics
- [ ] Google Analytics 4
- [ ] Event tracking (links, CTA clicks)
- [ ] Scroll depth tracking

---

## 1️⃣3️⃣ CHECKLIST FINAL

- [ ] Cores implementadas corretamente
- [ ] Fontes carregando (Merriweather + Poppins)
- [ ] Responsividade testada (mobile, tablet, desktop)
- [ ] Hover effects suaves
- [ ] Imagens otimizadas
- [ ] Acessibilidade validada
- [ ] Performance testada (Lighthouse)
- [ ] SEO básico (meta tags, semantic HTML)
- [ ] Links funcionando
- [ ] Consistência visual
- [ ] Teste cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Deploy configurado

---

**Versão:** 1.0  
**Atualizado:** Maio 2024  
**Desenvolvedor:** Seu Nome  
**Propriedade:** Duda - Publicidade & Artes Visuais
