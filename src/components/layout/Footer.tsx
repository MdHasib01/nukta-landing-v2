import { Mail, MapPin, Facebook, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { business } from '@/config/business';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '@/components/ui/logo';

export function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';

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
            <Link to="/" className="inline-block mb-6 h-10 filter brightness-0 invert">
              <Logo className="h-full justify-start" />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              {business.businessName} — {business.tagline}
            </p>
            <div className="flex gap-4">
              {business.facebookUrl && (
                <a href={business.facebookUrl} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {business.messengerUrl && (
                <a href={business.messengerUrl} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
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
                <button onClick={() => scrollTo('home')} className="text-white/70 hover:text-white transition-colors text-sm text-left">About Nukta</button>
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
          <p>© {new Date().getFullYear()} {business.businessName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
