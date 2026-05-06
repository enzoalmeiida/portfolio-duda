# ✅ CHECKLIST DE IMPLEMENTAÇÃO

## 📋 Pré-Desenvolvimento

- [ ] Decidir sobre domínio (duda.com.br, portfolio-duda.com, etc)
- [ ] Coletar todas as imagens dos projetos
- [ ] Definir biografia final e descrições dos projetos
- [ ] Confirmar links sociais (Behance, Instagram, LinkedIn)
- [ ] Definir email de contato
- [ ] Definir se será single page ou com case studies

---

## 🎨 Fase 1: Setup Visual

### Cores
- [ ] Validar paleta neutra com cliente
- [ ] Testar contraste (WCAG AA minimum 4.5:1)
- [ ] Criar arquivo de variáveis CSS

### Tipografia
- [ ] Confirmar Google Fonts (Merriweather + Poppins)
- [ ] Testar legibilidade em diferentes tamanhos
- [ ] Verificar carregamento das fontes

### Responsividade
- [ ] Testar em iPhone SE (375px)
- [ ] Testar em iPad (768px)
- [ ] Testar em desktop (1920px)
- [ ] Verificar orientação landscape/portrait

---

## 🖼️ Fase 2: Imagens e Assets

### Otimização de Imagens
```
Para cada imagem:
1. Redimensionar para ~1200px width max
2. Compressão: TinyPNG ou ImageOptim
3. Formato: WebP com fallback JPG
4. Nomear: projeto-1.jpg, projeto-2.jpg, etc
5. Local: /assets/images/
```

### Placeholder Temporário
```html
<!-- Enquanto não tem imagens reais -->
<div class="bg-gradient-to-br from-neutral-300 to-neutral-400">
  <!-- Ou usar Unsplash no desenvolvimento -->
  <img src="https://unsplash.com/photos/random" alt="">
</div>
```

### Ícones Sociais
- [ ] Instalar Font Awesome (já no projeto via CDN)
- [ ] Ou substituir por SVG customizados
- [ ] Testar em diferentes cores de fundo

---

## 📝 Fase 3: Conteúdo

### Header
- [ ] Confirmar nome profissional
- [ ] Ajustar link do logo (href="#home" ou "/")

### Hero Section
- [ ] Definir frase de impacto principal
- [ ] Escrever subtítulo/descrição
- [ ] Testar tamanho da fonte em mobile

### Seção Projetos
Para cada projeto:
- [ ] Título/nome do projeto
- [ ] Descrição breve
- [ ] Categoria (Publicidade, Artes Visuais, etc)
- [ ] Imagem de 1200px
- [ ] Link para case study (opcional)

Recomendado: 6-12 projetos

### Seção Sobre
- [ ] Foto profissional de alta qualidade
- [ ] Biografia (2-3 parágrafos)
- [ ] Resumo de formação
- [ ] Visão criativa

### Contato
- [ ] Email funcional
- [ ] Links Behance/Instagram/LinkedIn corretos
- [ ] Testar todos os links

---

## 🛠️ Fase 4: Desenvolvimento

### Substituir Placeholders
```bash
1. Abrir index.html
2. Procurar por "Campanha 01", "Campanha 02", etc
3. Substituir por nomes reais dos projetos
4. Atualizar imagens de placeholder
```

### Customizar Textos
```html
<!-- Encontrar e substituir -->
"Estratégia encontra Estética" 
→ "Sua frase de impacto"

"Campanhas visuais que transcendem..."
→ "Sua descrição"

"Duda"
→ "Nome profissional"
```

### Adicionar/Remover Projetos
```html
<!-- Para adicionar projeto -->
<!-- Copiar um <div class="group"> do grid -->
<!-- Alterar imagem e nome -->

<!-- Para remover -->
<!-- Deletar o <div class="group"> completo -->
```

### Configurar Links
```html
<!-- Atualizar links em: -->
- Email: contato@duda.com → seu-email@gmail.com
- Behance: https://behance.net → seu-behance
- Instagram: https://instagram.com → seu-instagram
- LinkedIn: https://linkedin.com → seu-linkedin
```

---

## 🔧 Fase 5: Funcionalidades

### Menu Mobile
- [ ] Testar toggle button
- [ ] Verificar se fecha ao clicar em link
- [ ] Testar em diferentes tamanhos de mobile

### Smooth Scroll
- [ ] Testar navegação entre seções
- [ ] Verificar offset do header fixo

### Hover Effects
- [ ] Testar em desktop (projetos, botões, links)
- [ ] Verificar em tablet (não deve quebrar)
- [ ] Desabilitar em mobile se necessário

### Scroll Animations
- [ ] Verificar fade-in ao entrar no viewport
- [ ] Testar em diferentes velocidades de scroll

---

## 📱 Fase 6: Testes

### Cross-Browser
- [ ] Chrome (Desktop + Mobile)
- [ ] Firefox (Desktop + Mobile)
- [ ] Safari (Desktop + Mobile)
- [ ] Edge (Desktop)

### Performance
- [ ] Google Lighthouse > 90
- [ ] Verificar imagens carregando
- [ ] Verificar fontes carregando rápido
- [ ] Check network waterfall

### Acessibilidade
- [ ] Keyboard navigation (Tab entre elementos)
- [ ] Focus states visíveis
- [ ] Color contrast checked (WAVE)
- [ ] Screen reader test (mobile + desktop)

### Mobile
- [ ] Zoom/pinch funciona
- [ ] Touch targets > 44x44px
- [ ] Sem horizontal scroll
- [ ] Tudo legível em 375px

---

## 🚀 Fase 7: Deploy

### Preparação
- [ ] Minificar CSS/JS
- [ ] Otimizar imagens final
- [ ] Verificar todos os links internos
- [ ] Verificar todos os links externos (abrem nova aba?)
- [ ] Remover console.log() de debug

### SEO Básico
```html
<!-- Adicionar ao <head> -->
<meta name="description" content="Seu portfólio...">
<meta name="keywords" content="publicidade, design, artes visuais">
<meta property="og:title" content="Duda - Publicidade & Artes Visuais">
<meta property="og:description" content="...">
<meta property="og:image" content="/assets/images/og-image.jpg">
<link rel="canonical" href="https://seu-dominio.com/">
```

### Escolher Plataforma
- [ ] Vercel (Recomendado - git + deploy automático)
- [ ] Netlify (Alternativa)
- [ ] GitHub Pages (Grátis)
- [ ] Hostinger/Namecheap (Tradicional)

### Deploy
```bash
# Vercel
npm install -g vercel
vercel login
vercel

# ou via GitHub + Netlify
# Conectar repositório → Deploy automático
```

---

## ✨ Fase 8: Pós-Launch

### Monitoramento
- [ ] Instalar Google Analytics 4
- [ ] Configurar events (clique em projetos, email, sociais)
- [ ] Testar rastreamento funcionando

### Backups
- [ ] Backup código fonte (GitHub)
- [ ] Backup imagens
- [ ] Backup database (se houver formulário)

### Manutenção
- [ ] Atualizar projetos a cada 3 meses
- [ ] Adicionar novo projeto ao site
- [ ] Monitorar links quebrados
- [ ] Verificar performance mensalmente

---

## 🎯 Customizações Comuns

### Mudar Esquema de Cores
```bash
1. Editar tailwind.config.js (cores)
2. Ou usar Tailwind classes diretamente
3. Exemplo: class="text-blue-900" em vez de neutral-900
```

### Adicionar Seção Nova
```html
<!-- Copiar template -->
<section id="nova-secao" class="py-24 px-6 lg:px-8 bg-white">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-5xl font-serif font-bold">Título</h2>
    <!-- Conteúdo -->
  </div>
</section>

<!-- Adicionar link no menu -->
<li><a href="#nova-secao">Seção Nova</a></li>
```

### Integrar Formulário de Contato
```html
<!-- Usar Formspree, Netlify Forms, ou SendGrid -->
<form action="https://formspree.io/f/seu-id" method="POST">
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Enviar</button>
</form>
```

### Dark Mode (Futuro)
```css
/* Adicionar variáveis CSS para dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #1a1a1a;
    --color-text: #fafaf8;
  }
}
```

---

## 📊 Timeline Recomendado

| Fase | Duração | Descrição |
|------|---------|-----------|
| Setup | 1-2 dias | Ambiente, dependências |
| Conteúdo | 2-3 dias | Coleta de imagens, textos |
| Desenvolvimento | 3-5 dias | Customização do código |
| Testes | 2-3 dias | Cross-browser, mobile, performance |
| Deploy | 1 dia | Publicação online |
| **Total** | **~2 semanas** | |

---

## 🔗 Recursos Rápidos

### Para Imagens
- Unsplash: https://unsplash.com/
- Pexels: https://www.pexels.com/
- Compress: https://tinypng.com/

### Para Ícones
- FontAwesome: https://fontawesome.com/ (já instalado)
- Feather Icons: https://feathericons.com/
- HeroIcons: https://heroicons.com/

### Para Inspiração
- Dribbble: https://dribbble.com/
- Behance: https://www.behance.net/
- Awwwards: https://www.awwwards.com/

### Para Validação
- Lighthouse: https://pagespeed.web.dev/
- WAVE: https://wave.webaim.org/
- Validator: https://validator.w3.org/

---

## ❓ FAQ - Perguntas Frequentes

### P: Posso mudar as cores?
**R:** Sim! Editar `tailwind.config.js` ou usar classes Tailwind diferentes.

### P: Como adicionar um novo projeto?
**R:** Duplicar um `<div class="group">` no grid de projetos e ajustar.

### P: Como mudar a tipografia?
**R:** Google Fonts no `<head>` + atualizar `tailwind.config.js`.

### P: O site é responsivo?
**R:** Sim! Teste em devicemode no Chrome DevTools.

### P: Posso remover seções?
**R:** Sim! Deletar o `<section>` completo e remover link do menu.

### P: Como adicionar formulário?
**R:** Usar Formspree, Netlify Forms, ou email via mailto.

### P: Como fazer dark mode?
**R:** Adicionar CSS custom properties e media query `prefers-color-scheme`.

### P: Como integrar blog?
**R:** Usar CMS (Contentful, Sanity) ou Jekyll/Hugo.

### P: Posso converter para React?
**R:** Sim! Estrutura é simples e pode ser componentizada.

---

## 📞 Suporte

Se tiver dúvidas:
1. Verificar [DESIGN-GUIDE.md](DESIGN-GUIDE.md) para visual
2. Verificar [DEVELOPMENT-GUIDE.md](DEVELOPMENT-GUIDE.md) para técnico
3. Verificar [COMPONENTS-SNIPPETS.html](COMPONENTS-SNIPPETS.html) para componentes
4. Consultar Tailwind docs: https://tailwindcss.com/docs

---

**Versão:** 1.0  
**Atualizado:** Maio 2024  
**Status:** ✅ Pronto para desenvolvimento
