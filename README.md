# Adam Mrotek — Portfolio

Personal portfolio of **Adam Mrotek**, full-stack & AI engineer. A clean,
Apple-inspired single-page site that features [VillageOS](https://github.com/AdamMrotek/VillageOS)
as the flagship project alongside selected work and a current tech stack.

🔗 **Live:** https://adammrotek.github.io/portfolio/

## Stack

- **React 19** + **TypeScript**
- **Vite 6**
- **Tailwind CSS v4**
- Scroll-reveal animations via a lightweight `IntersectionObserver` hook
- Contact form powered by [FormSubmit](https://formsubmit.co/)

## Development

```bash
npm install
npm run dev      # http://localhost:5173/portfolio/
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
├── components/   # Nav, Hero, FeaturedProject, Projects, Stack, About, Contact, Footer
├── data/         # projects.ts, stack.ts — single source for content
├── hooks/        # useScrollReveal
└── index.css     # Tailwind v4 import + @theme design tokens
public/           # images served under the /portfolio/ base
```

To swap in a real VillageOS screenshot, drop `villageos.png` into `public/`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages. (Set Pages source to "GitHub Actions" in
the repository settings.)
