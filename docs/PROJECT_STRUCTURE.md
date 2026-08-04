# Project Structure

This document outlines the organization of the Nukta corporate website codebase. This is a React SPA built with Vite and Tailwind CSS.

## Directory Layout

```text
├── deployment/                 # Deployment configurations and examples
│   └── apache/                 # Apache .htaccess examples for cPanel/shared hosting
├── docs/                       # Developer documentation and requirements
├── public/                     # Static assets served directly at the root
│   ├── assets/                 # Images, icons, and illustrations
│   │   ├── brand/              # Logos
│   │   ├── hero/               # Hero illustrations
│   │   └── social/             # OpenGraph/Twitter card images
│   ├── robots.txt              # Search engine crawling rules
│   ├── sitemap.xml             # XML sitemap for SEO
│   └── manifest.webmanifest    # PWA web manifest
├── src/                        # Main source code directory
│   ├── components/             # React components
│   │   ├── layout/             # Global layout components (Header, Footer)
│   │   ├── sections/           # Large page sections (Hero, LeadForm, Portfolio)
│   │   └── ui/                 # Reusable, small UI primitives (Button, Container)
│   ├── config/                 # Centralized configuration files
│   │   ├── environment.ts      # Validated environment variables
│   │   ├── business.ts         # Static business data (address, taglines)
│   │   ├── routes.ts           # Route path definitions
│   │   └── validation.ts       # Regex and validation rules
│   ├── data/                   # Static mock data (until APIs are connected)
│   ├── pages/                  # Top-level route components (PrivacyPolicy, NotFound)
│   ├── services/               # API abstraction layer (lead.service.ts)
│   ├── types/                  # TypeScript interfaces and type definitions
│   ├── utils/                  # Helper functions (analytics, error handling)
│   ├── App.tsx                 # Main application router and structure
│   ├── main.tsx                # React DOM entry point
│   └── index.css               # Global Tailwind CSS entry
├── .env.example                # Template for environment variables
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite bundler configuration
```

### Key Architectural Boundaries

- **`src/services/`**: This is where frontend meets backend. The `lead.service.ts` file currently handles local storage or remote submission based on environment flags. If you need to connect a new API (e.g., for careers or contact), create a new service here. Do NOT make raw `fetch` calls inside components.
- **`src/config/`**: Contains pure data configurations. Avoid putting React logic here.
- **`src/components/ui/`**: These components should be highly reusable and agnostic to business logic.
- **`src/components/sections/`**: These components combine UI primitives and business logic to form large pieces of a page (like the Lead Form).
