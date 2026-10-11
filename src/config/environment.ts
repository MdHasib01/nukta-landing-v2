const getEnv = (viteKey: string, nextKey: string): string => {
  if (typeof process !== 'undefined' && process.env) {
    if (process.env[nextKey]) return process.env[nextKey] as string;
    if (process.env[viteKey]) return process.env[viteKey] as string;
  }
  return '';
};

export const env = {
  siteUrl: getEnv('VITE_SITE_URL', 'NEXT_PUBLIC_SITE_URL') || 'https://nuktatechnologies.com',
  apiUrl: getEnv('VITE_API_URL', 'NEXT_PUBLIC_API_URL'),
  leadWebhookUrl: getEnv('VITE_LEAD_WEBHOOK_URL', 'NEXT_PUBLIC_LEAD_WEBHOOK_URL'),
  googleSheetEndpoint: getEnv('VITE_GOOGLE_SHEET_ENDPOINT', 'NEXT_PUBLIC_GOOGLE_SHEET_ENDPOINT'),
  contactEmail: getEnv('VITE_CONTACT_EMAIL', 'NEXT_PUBLIC_CONTACT_EMAIL'),
  whatsappNumber: getEnv('VITE_WHATSAPP_NUMBER', 'NEXT_PUBLIC_WHATSAPP_NUMBER'),
  facebookPageUrl: getEnv('VITE_FACEBOOK_PAGE_URL', 'NEXT_PUBLIC_FACEBOOK_PAGE_URL'),
  messengerUrl: getEnv('VITE_MESSENGER_URL', 'NEXT_PUBLIC_MESSENGER_URL'),
  linkedinPartnerId: getEnv('VITE_LINKEDIN_PARTNER_ID', 'NEXT_PUBLIC_LINKEDIN_PARTNER_ID'),
  googleMapsUrl: getEnv('VITE_GOOGLE_MAPS_URL', 'NEXT_PUBLIC_GOOGLE_MAPS_URL'),
  ga4Id: getEnv('VITE_GA4_ID', 'NEXT_PUBLIC_GA4_ID'),
  metaPixelId: getEnv('VITE_META_PIXEL_ID', 'NEXT_PUBLIC_META_PIXEL_ID'),
  enableAnalytics: getEnv('VITE_ENABLE_ANALYTICS', 'NEXT_PUBLIC_ENABLE_ANALYTICS') === 'true',
  enableRemoteLeadSubmission: getEnv('VITE_ENABLE_REMOTE_LEAD_SUBMISSION', 'NEXT_PUBLIC_ENABLE_REMOTE_LEAD_SUBMISSION') === 'true',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
};
