# Pre-Handover Checklist

This checklist must be reviewed by the developer before the project is considered fully handed over and ready for production launch.

### Code Health
- [x] Production build passes (`npm run build`)
- [x] Typecheck passes (`npm run typecheck`)
- [x] No console errors
- [x] No fake data (placeholder text should be finalized)
- [x] No fake URLs in hrefs (use `/` or real links)
- [x] No internal-system references (e.g., NAOS, Command Center)

### Assets & Branding
- [ ] Logo asset verified (`/public/assets/brand/nukta-logo.png`)
- [ ] Hero asset verified (`/public/assets/hero/nukta-hero-illustration.webp`)
- [ ] OG image verified (`/public/assets/social/nukta-og-cover.jpg`)
- [ ] Favicon & Apple Touch Icon present

### Business Information
- [ ] Email verified
- [ ] Office address verified
- [ ] Social URLs pending or verified
- [ ] Final domain pending

### Backend & Integrations
- [ ] Lead backend pending (Update `lead.service.ts` and set `VITE_ENABLE_REMOTE_LEAD_SUBMISSION`)
- [ ] Analytics pending (Update `.env` IDs and consent management)

### Legal
- [ ] Legal review pending for `/privacy-policy`
- [ ] Legal review pending for `/terms`
- [ ] Legal review pending for `/disclaimer`

### Quality Assurance (QA)
- [x] Mobile QA completed (320px - 430px)
- [x] Desktop QA completed (768px - 1920px)
- [ ] Cross-browser QA completed (Chrome, Safari, Firefox, Edge)
- [x] 404 route handling correctly
- [x] Form submission cooldowns and honeypot active
