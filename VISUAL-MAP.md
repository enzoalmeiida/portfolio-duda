<!-- 
  ========================================
  MAPA VISUAL DO WEBSITE
  ========================================
  
  Este arquivo contém a estrutura visual completa do portfólio
  em representação ASCII e descrição textual
-->

# 📐 ESTRUTURA VISUAL - MAPA DO SITE

## Vista Geral do Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                         HEADER (STICKY)                          │
│  Duda (nome)        [Trabalhos] [Sobre] [Contato]               │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│                                                                   │
│                         HERO SECTION                              │
│                    (100vh com muita whitespace)                   │
│                                                                   │
│               Estratégia                                          │
│               encontra                                            │
│               Estética                                            │
│                                                                   │
│        Campanhas que transcendem e inspiram                      │
│                                                                   │
│              [Explorar Projetos]                                 │
│                                                                   │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│                         SEÇÃO TRABALHOS                           │
│ Trabalhos                                                         │
│ ────────                                                          │
│                                                                   │
│  ┌─────────────────────────────┐  ┌──────────────┐ ┌──────────┐
│  │                             │  │              │ │          │
│  │       PROJETO 1             │  │   PROJETO 2  │ │ PROJETO 3│
│  │       (2x2 large)           │  │   (normal)   │ │ (normal) │
│  │                             │  │              │ │          │
│  └─────────────────────────────┘  └──────────────┘ └──────────┘
│  │                             │  │              │ │          │
│  │                             │  │   PROJETO 4  │ │ PROJETO 5│
│  │                             │  │   (normal)   │ │ (normal) │
│  └─────────────────────────────┘  └──────────────┘ └──────────┘
│
│  ┌────────────────────────────────────────┐  ┌──────────────┐
│  │                                        │  │              │
│  │      PROJETO 4 (2x1 horizontal)       │  │   PROJETO 6  │
│  │                                        │  │   (normal)   │
│  └────────────────────────────────────────┘  └──────────────┘
│
│                    (Grid Masonry)
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│                         SEÇÃO SOBRE                               │
│                                                                   │
│  ┌────────────────────┐      Sobre                               │
│  │                    │      ─────                                │
│  │    FOTO            │                                           │
│  │  PROFISSIONAL      │      Sou uma diretora criativa com      │
│  │                    │      formação em Publicidade e Artes    │
│  │  ┌──────────────┐  │      Visuais...                         │
│  │  │ elem decor.  │  │                                          │
│  │  └──────────────┘  │      Minha abordagem combina            │
│  │                    │      estratégia com sensibilidade       │
│  │                    │      estética...                         │
│  └────────────────────┘      Conversar comigo →                 │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│                         CONTATO / FOOTER                          │
│                                                                   │
│              Vamos criar algo juntos?                             │
│    Estou aberta a novas ideias e colaborações.                   │
│                                                                   │
│                    contato@duda.com                              │
│                                                                   │
│            ◯  ◯  ◯                                               │
│           [B][I][L]  (Behance, Instagram, LinkedIn)             │
│                                                                   │
│            © 2024 Duda. Todos os direitos.                      │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📊 Grid de Projetos - Detalhado

### Desktop (3 colunas com Masonry)

```
┌─────────────────┬──────────┬──────────┐
│   GRANDE        │ NORMAL   │ NORMAL   │
│                 │          │          │
│   2cols x 2rows │ 1col x   │ 1col x   │
│                 │ 1row     │ 1row     │
│                 │          │          │
├─────────────────┼──────────┼──────────┤
│                 │ NORMAL   │ NORMAL   │
│                 │          │          │
│                 │ 1col x   │ 1col x   │
│                 │ 1row     │ 1row     │
├─────────────────┼──────────┴──────────┤
│   GRANDE        │   GRANDE             │
│                 │   2cols x 1row       │
│   (carrossel    │                      │
│   automático)   │                      │
├─────────────────┼─────────────────────┤
│   NORMAL        │   NORMAL  │ NORMAL  │
│   1col x 1row   │  (1col x  │ (1col x │
│                 │   1row)   │  1row)  │
└─────────────────┴───────────┴─────────┘
```

### Tablet (2 colunas)

```
┌─────────────────────┬─────────────────────┐
│   GRANDE            │   GRANDE            │
│                     │                     │
│   1col x 1row       │   1col x 1row       │
├─────────────────────┼─────────────────────┤
│   NORMAL            │   NORMAL            │
│                     │                     │
│   1col x 1row       │   1col x 1row       │
├─────────────────────┴─────────────────────┤
│   GRANDE (span 2 cols)                    │
│                                           │
│   2cols x 1row                            │
└───────────────────────────────────────────┘
```

### Mobile (1 coluna)

```
┌──────────────────┐
│   PROJETO 1      │
│   NORMAL height  │
└──────────────────┘
┌──────────────────┐
│   PROJETO 2      │
│   NORMAL height  │
└──────────────────┘
┌──────────────────┐
│   PROJETO 3      │
│   NORMAL height  │
└──────────────────┘
```

---

## 🎨 Espaçamento Detalhado

### Hero Section

```
                    ↕ 128px top (header + space)
    ┌─────────────────────────────────┐
    │                                 │
    │ ↕ 96px whitespace               │
    │                                 │
    │         Estratégia              │
    │         encontra                │
    │         Estética                │
    │                                 │
    │ ↕ 32px                          │
    │ Campanhas visuais que...        │
    │                                 │
    │ ↕ 24px                          │
    │    [Explorar Projetos]          │
    │                                 │
    │ ↕ 64px whitespace               │
    │                                 │
    └─────────────────────────────────┘
                    ↕ 96px bottom
```

### Grid de Projetos

```
PROJETOS
════════

↕ 64px (gap entre título e grid)

┌──────────┐  ← 24px gap →  ┌──────────┐
│ PROJETO  │                │ PROJETO  │
│          │                │          │
└──────────┘ ← 24px gap ↓   └──────────┘

↓ 24px gap

┌──────────┐                ┌──────────┐
│ PROJETO  │                │ PROJETO  │
│          │                │          │
└──────────┘                └──────────┘
```

---

## 🔄 Interações - Fluxo Visual

### Projeto - Hover Effect

```
PADRÃO:
┌──────────────────┐
│  [IMAGEM]        │
│                  │
│                  │
└──────────────────┘

AO PASSAR MOUSE:
┌──────────────────┐
│  [IMAGEM ESCURA] │
│                  │  ← Overlay fade-in
│  Nome do Projeto │  ← Texto branco centralizado
│                  │
└──────────────────┘

DETALHES:
- Scale: 1 → 1.02
- Overlay: 0% opacity → 40% opacity
- Texto: opacity 0 → 1
- Transição: 300ms ease-out
```

### Botão - Hover Effect

```
PADRÃO:
┌─────────────────────────┐
│  Explorar Projetos      │
└─────────────────────────┘
Border: 2px solid #1A1A1A
Text: #1A1A1A
Background: transparent

HOVER:
┌─────────────────────────┐
│  Explorar Projetos      │
└─────────────────────────┘
Border: 2px solid #1A1A1A
Text: #FAFAF8
Background: #1A1A1A (filled)
Transição: 300ms ease
```

---

## 📱 Responsividade - Breakpoints

### Desktop (lg: 1024px+)
- 3 colunas grid Masonry
- Hero text: 56px
- Espaçamento máximo
- Hover effects ativos

### Tablet (md: 768px - 1023px)
- 2 colunas grid
- Hero text: 48px
- Espaçamento balanceado
- Menu desktop visível

### Mobile (< 768px)
- 1 coluna
- Hero text: 40px
- Espaçamento reduzido: 16px
- Menu hamburger
- Elementos decorativos simplificados

---

## 🎭 Animações

### Ao Carregar Página

```
Elementos:        Animação
─────────────────────────────────
Header           Fade-in instant
Hero Section     Fade-in-up (600ms)
Seção Trabalhos  Fade-in-up ao scroll (600ms)
Seção Sobre      Fade-in-up ao scroll (600ms)
Footer           Fade-in-up ao scroll (600ms)

Timing: Staggered via Intersection Observer
```

### Durante Scroll

```
Header:
- Scroll > 100px → Add subtle shadow
- Scroll < 100px → Remove shadow

Links ativos:
- Realçar link de seção visível
- Mudar cor de neutral-700 para neutral-900
```

### Interações de Mouse

```
Link:
- Color transition: 300ms
- Text color: neutral-700 → neutral-900

Projeto card:
- Scale: 1 → 1.02 (300ms)
- Overlay: 0% → 40% opacity (300ms)

Botão:
- Background: transparent → neutral-900 (300ms)
- Text color: neutral-900 → neutral-50 (300ms)

Social icon:
- Border color: neutral-300 → neutral-900 (300ms)
- Icon color: neutral-600 → neutral-900 (300ms)
```

---

## 🔤 Tipografia - Hierarquia

```
PÁGINA

┌─ H1 (Hero) ───────────────────────┐
│ Merriweather Bold                  │
│ 56px (desktop) / 40px (mobile)     │
│ line-height: 1.2                   │
│ tracking: -0.02em                  │
│ Color: #1A1A1A                     │
└────────────────────────────────────┘

┌─ H2 (Seções) ──────────────────────┐
│ Merriweather Bold                  │
│ 48px (desktop) / 32px (mobile)     │
│ line-height: 1.2                   │
│ tracking: -0.01em                  │
│ Color: #1A1A1A                     │
└────────────────────────────────────┘

┌─ Body Text ────────────────────────┐
│ Poppins Regular (400)              │
│ 18px (desktop) / 16px (mobile)     │
│ line-height: 1.6                   │
│ tracking: 0                        │
│ Color: #666666 (secundário)        │
└────────────────────────────────────┘

┌─ Small Text ───────────────────────┐
│ Poppins Regular (400)              │
│ 14px                               │
│ line-height: 1.5                   │
│ Color: #999995                     │
└────────────────────────────────────┘

┌─ Menu ─────────────────────────────┐
│ Poppins Medium (500)               │
│ 14px                               │
│ Color: #666666                     │
│ Hover: #1A1A1A                     │
└────────────────────────────────────┘
```

---

## 📐 Componentes Principais - Dimensões

### Header
```
Height: 72px (6rem)
Padding: 24px horizontal
Gap: Menu items 48px
Logo size: 28px font
```

### Hero CTA Button
```
Padding: 12px 32px (py-3 px-8)
Font: 14px Poppins Medium
Border: 2px
Min-width: 200px
```

### Projeto Card Normal
```
Height: 256px (16rem)
Aspect ratio: Auto
Border-radius: 0 (sharp)
```

### Projeto Card Grande
```
Height: 400px+ (desktop) / 256px (mobile)
Aspect ratio: Auto
```

### Social Icon
```
Width: 48px
Height: 48px
Border-radius: 50% (circular)
Border: 1px
Icon size: 18px
```

---

## 🎯 Ordem de Importância Visual

1. **Nome (Duda)** - Topo esquerdo, destaque
2. **Frase de Impacto** - Hero, grande e centralizada
3. **Imagens de Projetos** - Centro, múltiplas
4. **Email de Contato** - Footer, grande
5. **Menu** - Secundário, topo direito
6. **Textos explicativos** - Terciário
7. **Ícones sociais** - Baixa hierarquia

---

## ✨ Elementos Decorativos

```
1. Linha sob títulos de seção
   Width: 64px (w-16)
   Height: 4px (h-1)
   Color: #1A1A1A

2. Elemento no canto da foto (Sobre)
   Width: 128px
   Height: 128px
   Border: 1px neutral-200
   Position: absolute bottom-right

3. Dividers entre seções
   Height: 1px
   Color: #E5E5E3 com 20% opacity
```

---

**Referência Visual Completa - Portfólio Duda**  
Atualizado: Maio 2024
