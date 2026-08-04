# Analytics & Privacy Documentation

The Nukta corporate website uses a centralized analytics abstraction (`src/utils/analytics.ts`) to manage tracking safely and privately.

**Analytics are DISABLED by default.** To enable them, set `VITE_ENABLE_ANALYTICS=true` in your `.env` file and provide the required tool IDs (e.g., `VITE_GA4_ID`, `VITE_META_PIXEL_ID`).

## Core Principles
- **No PII (Personally Identifiable Information):** Never track form field values, phone numbers, email addresses, or business messages.
- **Opt-in loading:** Tracking scripts and events only fire if enabled via environment variables.
- **Clean events:** Use standardized event names and allowed parameters to avoid data fragmentation.

## Approved Event Names & Parameters

### 1. Page View (`page_view`)
Triggered automatically on route changes.
- **Parameters:**
  - `page_path` (e.g., `/contact`, `/portfolio`)
  - `page_title`

### 2. Lead Generation (`generate_lead`)
Triggered ONLY upon *successful* lead form submission. Do NOT trigger on form opens or errors.
- **Allowed Parameters:**
  - `currency`: 'BDT'
  - `support_type`: The category selected (e.g., 'branding', 'technology', 'operations')
  - `engagement_model`: The model selected (e.g., 'project', 'retainer')
- **Prohibited:** Name, email, phone, business name, or message content.

### 3. Contact Interaction (`contact_click`)
Triggered when a user clicks a direct contact link (mailto, tel, whatsapp).
- **Allowed Parameters:**
  - `contact_method`: 'email', 'phone', 'whatsapp', 'messenger'

### 4. Content Engagement (`view_item` / `select_content`)
Triggered when a user interacts with a major UI element, like opening a portfolio case study or reading an FAQ.
- **Allowed Parameters:**
  - `content_type`: 'portfolio', 'faq', 'career_job'
  - `item_id`: The ID of the item viewed (e.g., 'brand_guidelines_2023')

---

### Implementation Notes for Developers
- Ensure your privacy policy reflects the specific analytics tools you activate (e.g., Google Analytics 4, Meta Pixel, LinkedIn Insight Tag).
- If deploying in regions subject to GDPR or similar privacy laws, you MUST implement a cookie consent banner that gates the initialization of these tracking tools. The current system provides the abstraction, but the legal consent gateway must be added according to your specific compliance requirements.
