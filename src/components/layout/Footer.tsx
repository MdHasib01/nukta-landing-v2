'use client';

import { Mail, MapPin, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { business, foundingYear } from '@/config/business';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/logo';

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const scrollTo = (id: string) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <footer className="bg-charcoal text-white pt-16 md:pt-20 pb-8 md:pb-10 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6 h-20 md:h-24 bg-white rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <Logo className="h-full justify-start" />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              {business.businessName} — {business.tagline}
            </p>
            <div className="flex gap-4">
              {business.linkedinUrl && (
                <a href={business.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Nukta Technologies on LinkedIn" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {business.facebookUrl && (
                <a href={business.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Nukta Technologies on Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {business.messengerUrl && (
                <a href={business.messengerUrl} target="_blank" rel="noopener noreferrer" aria-label="Message Nukta on Messenger" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              )}
            </div>
            
            <ul className="space-y-4 mt-8">
              <li className="flex items-start gap-3 text-white/70">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a href={`mailto:${business.email}`} className="hover:text-white transition-colors">
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{business.officeAddress}</span>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6 font-serif">Company</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollTo('about')} className="text-white/70 hover:text-white transition-colors text-sm text-left">About Nukta</button>
              </li>
              <li>
                <button onClick={() => scrollTo('how-we-work')} className="text-white/70 hover:text-white transition-colors text-sm text-left">How We Work</button>
              </li>
              <li>
                <button onClick={() => scrollTo('why-nukta')} className="text-white/70 hover:text-white transition-colors text-sm text-left">Why Nukta</button>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6 font-serif">Services</h4>
            <ul className="space-y-3">
              {['Branding', 'Marketing', 'Website', 'Automation', 'Operations'].map((item) => (
                <li key={item}>
                  <button onClick={() => scrollTo('services')} className="text-white/70 hover:text-white transition-colors text-sm text-left">{item}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Col */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-lg font-bold mb-6 font-serif">Explore</h4>
            <ul className="space-y-3 flex flex-row lg:flex-col gap-6 lg:gap-0 flex-wrap">
              <li>
                <button onClick={() => scrollTo('brands')} className="text-white/70 hover:text-white transition-colors text-sm text-left">Portfolio</button>
              </li>
              <li>
                <button onClick={() => scrollTo('careers')} className="text-white/70 hover:text-white transition-colors text-sm text-left">Careers</button>
              </li>
              <li>
                <button onClick={() => scrollTo('faq')} className="text-white/70 hover:text-white transition-colors text-sm text-left">FAQ</button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="text-white/70 hover:text-white transition-colors text-sm text-left">Contact</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {foundingYear}–{new Date().getFullYear()} {business.legalName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
