# Nukta Corporate Website

This repository contains the **public Nukta corporate website only**.
*Note: NAOS, TAKO, and Tentsa are separate systems and are not included in this repository.*

## Architecture
- **Framework:** React 19 (SPA)
- **Bundler:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Routing:** React Router v7
- **Animations:** Motion (Framer Motion)
- **SEO:** React Helmet Async

This is a frontend-only project. The current lead form uses an abstraction layer (`src/services/lead.service.ts`) that saves to `localStorage` for development, and can be easily configured to POST to a backend API or webhook.

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create environment variables:
   Copy `.env.example` to `.env` and fill out the required variables. Do NOT commit the `.env` file.

3. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev`: Starts the local development server.
- `npm run build`: Creates a production-ready optimized build in the `dist/` directory.
- `npm run preview`: Serves the `dist/` directory locally to preview the production build.
- `npm run typecheck`: Runs the TypeScript compiler to check for type errors without emitting files.
- `npm run validate`: Runs both type checking and the production build to ensure the code is safe to deploy.

## Production Build

To build the project for production, run:

```bash
npm run build
```

This will output the optimized static files to the `dist/` folder. You can upload the contents of this folder to any static hosting provider (e.g., Netlify, Vercel, AWS S3, or cPanel/Apache).

If you are deploying to an Apache server, refer to `deployment/apache/.htaccess.example` for the correct SPA routing configuration.

## Pre-Launch Requirements

Before going live, a developer must complete the following:
1. **Assets:** Review `docs/ASSET_REQUIREMENTS.md` and replace the placeholder assets in `/public` with actual production graphics.
2. **APIs:** Edit `src/services/lead.service.ts` to connect to your real backend CRM, Google Sheet, or webhook (enable via `VITE_ENABLE_REMOTE_LEAD_SUBMISSION=true`).
3. **Analytics:** If tracking is required, enable it via `VITE_ENABLE_ANALYTICS=true` and provide the GA4/Meta Pixel IDs. Review `docs/ANALYTICS_EVENTS.md`.
4. **Security:** Implement the headers listed in `docs/SECURITY_HEADERS.md`.
5. **Legal:** The content in `/privacy-policy`, `/terms`, and `/disclaimer` must be reviewed and approved by legal counsel before launch.

## Documentation

- [Project Structure](docs/PROJECT_STRUCTURE.md)
- [Asset Requirements](docs/ASSET_REQUIREMENTS.md)
- [Security Headers](docs/SECURITY_HEADERS.md)
- [Analytics Events](docs/ANALYTICS_EVENTS.md)
- [Pre-Handover Checklist](PRE_HANDOVER_CHECKLIST.md)
