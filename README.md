# Seth Portfolio

Personal portfolio for Seth Lim, built with Next.js and React.

## Tech Stack

- Next.js
- React
- TypeScript
- CSS modules via the Next app router global stylesheet
- Node.js built-in test runner

## Getting Started

Use Node.js 24. This repo includes `.node-version` for `fnm`, `nvm`, and other compatible version managers.

Install dependencies:

```bash
npm ci
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run lint
npm test
npm run build
npm run start
```

## Deployment

The app is designed for Vercel or any platform that supports a standard Next.js production build.

Recommended production check before deployment:

```bash
npm ci
npm run lint
npm test
npm run build
```

## Environment Variables

No environment variables are required for the current static portfolio build. Keep local `.env*` files out of git.

## License

MIT
