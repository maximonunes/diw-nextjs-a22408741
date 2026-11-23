# App em React & Next.js

Lab 9 de Desenvolvimento e Interfaces Web (DIW) — Universidade Lusófona.

**Autor:** Máximo Nunes (a22408741)

**Deploy (Vercel):** https://diw-nextjs-a22408741.vercel.app/

## Rotas

| Rota               | Conteúdo                                       |
| ------------------ | ---------------------------------------------- |
| `/`                | Página inicial com o componente `MagiaDoJSX`   |
| `/sobre`           | Desenvolvimento Web Moderno                    |
| `/caracteristicas` | Lista de características (com evento de click) |
| `/tecnologias`     | Cards das tecnologias, lidas de um JSON        |

## Estrutura

```
app/
├─ layout.tsx              → moldura (header, nav, main, footer)
├─ page.tsx                → rota "/"
├─ globals.css
├─ sobre/page.tsx          → rota "/sobre"
├─ caracteristicas/page.tsx→ rota "/caracteristicas"
├─ tecnologias/page.tsx    → rota "/tecnologias"
└─ data/tecnologias.json   → dados das tecnologias
components/
└─ MagiaDoJSX/MagiaDoJSX.tsx
public/
└─ tecnologias/            → logotipos SVG
```

## Executar localmente

```bash
npm install
npm run dev
```

Abrir http://localhost:3000

## Scripts

| Comando                | O que faz                       |
| ---------------------- | ------------------------------- |
| `npm run dev`          | Servidor de desenvolvimento     |
| `npm run build`        | Build de produção               |
| `npm run lint`         | ESLint                          |
| `npm run format`       | Formata o código com o Prettier |
| `npm run format:check` | Verifica a formatação           |

## Tecnologias

Next.js · React · TypeScript · Tailwind CSS

Logotipos: [Devicon](https://devicon.dev) (licença MIT).
