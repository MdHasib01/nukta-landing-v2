import nuktaLogo from '@/assets/nukta-logo.jpg';

const logoSrc = typeof nuktaLogo === 'string' ? nuktaLogo : (nuktaLogo as any)?.src || '/nukta-logo.jpg';

export const assets = {
  logo: logoSrc,
  heroIllustration: logoSrc,
  heroIllustrationFallback: logoSrc,
  openGraphImage: logoSrc,
  favicon: logoSrc,
};
