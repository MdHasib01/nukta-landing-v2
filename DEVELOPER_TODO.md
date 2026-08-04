# Developer Notes & Production Roadmap

This repository is currently a **Frontend-Only** prototype. It contains the complete UI, forms, state management, and configuration architecture needed for production, but the actual backend integrations are stubbed.

## 1. Environment Configuration

Before deploying or running in production, duplicate `.env.example` to `.env` and fill out the values.

## 2. Lead Generation Pipeline (`LeadForm.tsx` & `lead.service.ts`)

The `submitLead` method in `src/services/lead.service.ts` is currently using `localStorage`.

**Next Steps:**
1. **API Integration:**
   - Uncomment the `fetch` block pointing to `${env.apiUrl}/leads`.
   - Implement the backend endpoint to receive `LeadPayload`.
2. **Webhook Integration:**
   - Uncomment the webhook fetch block to send leads directly to Zapier, Make, or n8n.
3. **Google Sheets:**
   - Create a Google Apps Script web app that receives POST requests and writes to a spreadsheet.
   - Set the `VITE_GOOGLE_SHEET_ENDPOINT` to the Apps Script URL.
4. **CRM Integration:**
   - Map `LeadPayload` to `CrmPayload` depending on your CRM provider (HubSpot, Salesforce, Pipedrive).
5. **Notifications:**
   - Email: Send a formatted `EmailPayload` to your email service provider (SendGrid, Resend, AWS SES).
   - WhatsApp/SMS: Trigger via webhook or API (Twilio).

## 3. Contact Form & Careers

- Similar to the Lead pipeline, `contact.service.ts` and `career.service.ts` require real endpoints.
- Ensure the backend handles file uploads (resumes, portfolios) for careers if `FormData` is used.

## 4. Analytics & Tracking

- Open `src/utils/analytics.ts`.
- GA4 and Meta Pixel logic is stubbed out.
- Inject the base snippet for these services in `index.html` (or via a tag manager) and use the utility functions to trigger events.
- Ensure `import.meta.env.PROD` is functioning properly so dev events aren't tracked.

## 5. SEO & Meta Tags

- The following files have been generated:
  - `public/robots.txt`
  - `public/sitemap.xml`
  - `public/manifest.webmanifest`
  - `public/browserconfig.xml`
- **Before launch:** Update `sitemap.xml` with the actual production domain and correct modification dates.
- Add Open Graph (`og:`) and Twitter card meta tags to `index.html`.

## 6. Form Security

- A hidden honeypot field (`website_url_honey`) is currently active to silently discard bot submissions.
- Basic client-side rate-limiting and cooldowns (60 seconds) are implemented in `LeadForm.tsx`.
- **Backend Requirement:** Server-side rate limiting and CAPTCHA validation (e.g., Turnstile or reCAPTCHA v3) should be implemented on the backend to prevent abuse.

## 7. Security (Headers & CSP)

When deploying to a production server (Node.js, Nginx, or similar), ensure the following security headers are configured:

```
Content-Security-Policy: default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://region1.google-analytics.com;
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Strict-Transport-Security: max-age=31536000; includeSubDomains
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

- These headers protect against XSS, clickjacking, and other common vulnerabilities.
- Adjust the CSP depending on the external scripts you load (e.g., Meta Pixel, Google Analytics).
