import nuktaLogo from '@/assets/nukta-logo.jpg';
import nuktaLogoMark from '@/assets/nukta-logo-mark.png';
import nuktaLogoHorizontal from '@/assets/nukta-logo-horizontal.png';

const toSrc = (img: unknown, fallback: string) =>
  typeof img === 'string' ? img : (img as { src?: string })?.src || fallback;

const logoSrc = toSrc(nuktaLogo, '/nukta-logo.jpg');

export const assets = {
  logo: logoSrc,
  /** Square, centered emblem (no text) — used in the nav/footer logo box next to the live "NUKTA" wordmark. */
  logoMark: toSrc(nuktaLogoMark, logoSrc),
  /** Horizontal lockup: emblem + "NUKTA" wordmark side by side. */
  logoHorizontal: toSrc(nuktaLogoHorizontal, logoSrc),
  heroIllustration: logoSrc,
  heroIllustrationFallback: logoSrc,
  openGraphImage: logoSrc,
  favicon: logoSrc,
};
