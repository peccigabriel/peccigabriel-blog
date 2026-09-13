# [peccigabriel] blog

Blog pessoal em **Next.js 15 (App Router)** + **Chakra UI v3** + **next-intl** (pt-br / en), com posts em MDX renderizados por `next-mdx-remote`.

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run lint     # eslint .
```

Requer Node >= 20.

## Estrutura

```
content/posts/<locale>/<slug>.mdx   # posts (mesmo slug nos dois idiomas)
messages/<locale>.json              # textos da UI
public/images/                      # capas dos posts
src/app/[locale]/                   # rotas (home, about, posts/[slug])
src/app/{sitemap,robots}.js         # SEO
src/components/                     # UI + mdx-components (mapeia tags MDX → Chakra)
src/helpers/                        # getAllPosts, formatDate, seo
src/i18n/                           # routing, navigation, request (next-intl)
```

O idioma é escolhido por cookie (`localePrefix: "never"`): a mesma URL serve pt-br e en.

## Escrevendo um post

Crie `content/posts/pt-br/<slug>.mdx` e `content/posts/en/<slug>.mdx` com o frontmatter:

```yaml
---
title: "Título do post"
date: "2026-01-31"            # YYYY-MM-DD
cover: "/images/capa.webp"    # em public/images, idealmente 16:9
coverAlt: "Descrição da imagem"
description: "Resumo curto usado na home e como meta description."
---
```

`description` é opcional — sem ela, a home usa os primeiros 280 caracteres do texto.
