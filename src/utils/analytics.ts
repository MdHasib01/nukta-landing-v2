import { env } from '@/config/environment';

export const Analytics = {
  pageView(url: string) {
    if (!env.isProduction) return;
    
    // TODO: GA4 Implementation
    // if (env.ga4Id && typeof window.gtag === 'function') {
    //   window.gtag('config', env.ga4Id, { page_path: url });
    // }

    // TODO: Meta Pixel Implementation
    // if (env.metaPixelId && typeof window.fbq === 'function') {
    //   window.fbq('track', 'PageView');
    // }
  },

  trackEvent(eventName: string, params?: Record<string, any>) {
    if (!env.isProduction) return;

    // TODO: GA4 Implementation
    // if (env.ga4Id && typeof window.gtag === 'function') {
    //   window.gtag('event', eventName, params);
    // }

    // TODO: Meta Pixel Implementation
    // if (env.metaPixelId && typeof window.fbq === 'function') {
    //   window.fbq('trackCustom', eventName, params);
    // }
  },
  
  trackLeadGen() {
    this.trackEvent('generate_lead', {
      currency: 'BDT',
    });
    // Meta standard event
    if (env.isProduction && env.metaPixelId && typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Lead');
    }
  }
};
