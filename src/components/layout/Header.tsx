'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { buttonClasses } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';
import { business } from '@/config/business';
import { hasPortfolioContent } from '@/config/portfolio';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/ui/language-switcher';

const navLinks = [
  { key: 'services' as const, href: '/#services', id: 'services' },
  { key: 'products' as const, href: '/#products', id: 'products' },
  { key: 'howWeWork' as const, href: '/#how-we-work', id: 'how-we-work' },
  { key: 'whyNukta' as const, href: '/#why-nukta', id: 'why-nukta' },
  ...(hasPortfolioContent ? [{ key: 'portfolio' as const, href: '/#brands', id: 'brands' }] : []),
  { key: 'careers' as const, href: '/#careers', id: 'careers' },
];

export function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    document.body.style.overflow = 'hidden';
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    if (isHome && href.startsWith('/#')) {
      e.preventDefault();
      document.getElementById(href.substring(2))?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const solid = isScrolled || isMobileMenuOpen || !isHome;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 border-b',
        solid ? 'bg-white/85 border-line/80 shadow-[0_1px_0_rgba(10,31,23,0.02)]' : 'bg-transparent border-transparent',
        // backdrop-filter makes the header the containing block for the fixed mobile menu, clipping it to header height
        solid && !isMobileMenuOpen && 'backdrop-blur-xl backdrop-saturate-150'
      )}
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-6">
        <div className="flex h-16 md:h-[72px] items-center justify-between gap-6">
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, '/#home')}
            className="relative z-50 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav aria-label={t('header.primaryNav')} className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-1 text-sm font-medium">
              {navLinks.map((link) => {
                const active = isHome && activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      aria-current={active ? 'true' : undefined}
                      className={cn(
                        'rounded-full px-3.5 py-2 transition-colors',
                        active ? 'bg-primary-soft text-primary-deep' : 'text-body hover:text-ink hover:bg-ink/[0.04]'
                      )}
                    >
                      {t(`header.nav.${link.key}`)}
                    </a>
                  </li>
                );
              })}
            </ul>
            <LanguageSwitcher />
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className={buttonClasses({ size: 'sm', className: 'font-bengali' })}
            >
              <span className="xl:hidden">{t('common.ctaTalkShort')}</span>
              <span className="hidden xl:inline">{t('common.ctaTalkBusiness')}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
            </a>
          </nav>

          {/* Mobile: language toggle + menu toggle */}
          <div className="lg:hidden relative z-50 flex items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            className="-mr-2 rounded-full p-2.5 text-ink hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={t('header.toggleMenu')}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden fixed inset-0 z-40 flex flex-col bg-white pt-16 transition-[opacity,transform] duration-300 ease-out',
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-2'
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mx-auto flex h-full w-full flex-col overflow-y-auto px-5 pb-8 custom-scrollbar">
          <ul className="mt-6 flex flex-col divide-y divide-line border-y border-line">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    'flex items-center justify-between py-4 font-display text-xl font-semibold transition-colors',
                    isHome && activeSection === link.id ? 'text-primary' : 'text-ink hover:text-primary'
                  )}
                >
                  {t(`header.nav.${link.key}`)}
                  <ArrowRight className="h-5 w-5 text-muted-text" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-10">
            <a
              href="/#contact"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onClick={(e) => handleNavClick(e, '/#contact')}
              className={buttonClasses({ size: 'lg', className: 'w-full font-bengali' })}
            >
              {t('common.ctaTalkBusiness')}
            </a>
            <p className="mt-6 text-center text-xs text-muted-text">
              {business.officeAddress} · {business.email}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
