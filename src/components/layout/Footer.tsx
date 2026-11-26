import { Mail, MapPin, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { business, foundingYear } from '@/config/business';
import { hasPortfolioContent } from '@/config/portfolio';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About Nukta', href: '/#about' },
      { label: 'How We Work', href: '/#how-we-work' },
      { label: 'Why Nukta', href: '/#why-nukta' },
      { label: 'Products', href: '/#products' },
    ],
  },
  {
    title: 'Services',
    links: ['Branding', 'Marketing', 'Website', 'Automation', 'Operations'].map((label) => ({
      label,
      href: '/#services',
    })),
  },
  {
    title: 'Explore',
    links: [
      ...(hasPortfolioContent ? [{ label: 'Portfolio', href: '/#brands' }] : []),
      { label: 'Careers', href: '/#careers' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
];

const socials = [
  { url: business.linkedinUrl, label: 'Nukta Technologies on LinkedIn', icon: Linkedin },
  { url: business.facebookUrl, label: 'Nukta Technologies on Facebook', icon: Facebook },
  { url: business.messengerUrl, label: 'Message Nukta on Messenger', icon: MessageCircle },
].filter((s): s is typeof s & { url: string } => Boolean(s.url));

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white/70">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden="true" />
      <Container className="pt-16 md:pt-20 pb-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <Link href="/" className="inline-block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30">
              <Logo tone="light" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {business.tagline}. Brand operations and AI-powered business tools, built in Jashore for founders across Bangladesh.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                <a href={`mailto:${business.email}`} className="transition-colors hover:text-white">
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                <span>{business.fullAddress}</span>
              </li>
            </ul>

            {socials.length > 0 && (
              <div className="mt-8 flex gap-3">
                {socials.map(({ url, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2 last:col-span-2 last:md:col-span-3">
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-white">{col.title}</h4>
              <ul className="space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 md:flex-row">
          <p>© {foundingYear}–{new Date().getFullYear()} {business.legalName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms of Service</Link>
            <Link href="/disclaimer" className="transition-colors hover:text-white">Disclaimer</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
