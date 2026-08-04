# Asset Requirements

The public Nukta corporate website requires the following assets to be present in the `/public` directory before deployment.

### 1. Logo
- **Path:** `/public/assets/brand/nukta-logo.png` (or `.svg`)
- **Purpose:** Primary brand identifier used in the header and footer.
- **Format:** Transparent PNG or scalable SVG.
- **Note:** Do NOT recreate or trace the logo. Use the official approved brand asset.

### 2. Hero Illustration
- **Path:** `/public/assets/hero/nukta-hero-illustration.webp`
- **Fallback:** `/public/assets/hero/nukta-hero-illustration.png`
- **Purpose:** Primary visual on the home page.
- **Dimensions:** Around 1600x1200 px.
- **Format:** WebP is preferred for performance. Provide a PNG fallback.
- **Style:** Transparent background or one that matches the warm-white theme (`#FCFCF9`).
- **Optimization:** Target below 350 KB.

### 3. Open Graph (Social Share) Image
- **Path:** `/public/assets/social/nukta-og-cover.jpg`
- **Purpose:** Displayed when the website link is shared on social media (Facebook, LinkedIn, Twitter, iMessage).
- **Dimensions:** Exactly 1200x630 px.
- **Format:** JPG or WebP.
- **Optimization:** Target below 300 KB.

### 4. Favicon
- **Path:** `/public/favicon.ico`
- **Purpose:** Browser tab icon.
- **Format:** Standard `.ico` file containing multiple sizes (16x16, 32x32, 64x64).

### 5. Apple Touch Icon
- **Path:** `/public/apple-touch-icon.png`
- **Purpose:** Icon used when saving the website to an iOS home screen.
- **Dimensions:** 180x180 px.
- **Format:** PNG (no transparency, solid background required by Apple).

---

### Important Developer Guidelines
- **Use meaningful filenames:** Avoid names like `final-v2-transparent.png`.
- **Lowercase only:** Ensure all paths and filenames are lowercase to prevent 404 errors on case-sensitive Linux servers.
- **No spaces:** Use hyphens instead of spaces in filenames.
- **Clean up:** Remove unused placeholder files or heavy duplicates before building for production.
