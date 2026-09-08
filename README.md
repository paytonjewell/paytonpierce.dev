# paytonpierce.dev

Source for [paytonpierce.dev](https://paytonpierce.dev), my personal portfolio site.

## Stack

- [Next.js](https://nextjs.org/) (App Router, Turbopack)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) + [daisyUI](https://daisyui.com/)
- [Nunito](https://fonts.google.com/specimen/Nunito) via `next/font/google`
- [Vercel Analytics](https://vercel.com/docs/analytics)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

```
app/
  layout.tsx           # root layout: font, page shell, analytics
  page.tsx              # homepage content
  globals.css           # Tailwind entry point + theme tokens
  components/
    Footer.tsx
    nav/Navbar.tsx
public/                 # static assets (images, resume PDF)
```

## Deployment

Deployed on [Vercel](https://vercel.com/), auto-deploying from `main`.
