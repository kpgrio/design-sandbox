# design-sandbox

A practice site for fixing UI inconsistencies through pull requests. Stack: Vite, React, Tailwind v4, Storybook.

- Site: https://kpgrio.github.io/design-sandbox/
- Storybook: https://kpgrio.github.io/design-sandbox/storybook/

## Run locally

```bash
npm install
npm run dev          # app at localhost:5173/design-sandbox/
npm run storybook    # Storybook at localhost:6006
```

## Practice targets

Design tokens live in `src/index.css` under `@theme`. The components in `src/components/` contain deliberate inconsistencies: arbitrary values like `px-[18px]` and `text-[#222222]`, and radii that don't match the tokens. Fix them one per branch, one PR each, with before/after screenshots from Storybook.
