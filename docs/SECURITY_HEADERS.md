# Production Security Headers

When deploying the Nukta corporate website to a production environment, you should configure your server or CDN to serve the following HTTP security headers. 

These headers protect the frontend against common vulnerabilities like XSS, clickjacking, and MIME-type sniffing.

## Recommended Configuration

```http
Content-Security-Policy: default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://region1.google-analytics.com;
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### Important Considerations:
1. **Content-Security-Policy (CSP):** The provided CSP allows Google Analytics and Meta Pixel. If you add additional third-party tools (like a live chat widget or video player), you MUST update the CSP to explicitly allow their domains.
2. **X-Frame-Options:** Set to `DENY` to prevent clickjacking. If you need to embed this site in an iframe elsewhere, change this to `SAMEORIGIN` or use `frame-ancestors` in the CSP.
3. **Strict-Transport-Security (HSTS):** Only apply this if your domain is fully secured with an SSL certificate.

## Implementation Examples

### Nginx

Add the following to your `server` block:

```nginx
add_header Content-Security-Policy "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://region1.google-analytics.com;" always;
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
```

### Vercel (`vercel.json`)

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Strict-Transport-Security", "value": "max-age=31536000; includeSubDomains; preload" },
        { "key": "Permissions-Policy", "value": "geolocation=(), microphone=(), camera=()" }
      ]
    }
  ]
}
```
*(Note: CSP is best handled carefully on Vercel to avoid breaking deployments without testing).*
