import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';
import { business } from '@/config/business';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isHome]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsMobileMenuOpen(false);
      };
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/#home', id: 'home' },
    { name: 'Services', href: '/#services', id: 'services' },
    { name: 'How We Work', href: '/#how-we-work', id: 'how-we-work' },
    { name: 'Why Nukta', href: '/#why-nukta', id: 'why-nukta' },
    { name: 'Portfolio', href: '/#brands', id: 'brands' },
    { name: 'Careers', href: '/#careers', id: 'careers' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (isHome && href.startsWith('/#')) {
      const id = href.substring(2);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || isMobileMenuOpen || !isHome
          ? 'h-20 md:h-24 bg-white/95 backdrop-blur-md border-b border-bg-ivory py-2 flex items-center shadow-sm'
          : 'bg-transparent py-4 md:py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 xl:px-8 w-full max-w-[1200px]">
        <div className="flex items-center justify-between">
          <Link to="/" className="z-50 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg h-14 md:h-16 lg:h-20 py-1">
            <Logo className="h-full" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <ul className="flex items-center gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {isHome ? (
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('/#')) {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }
                      }}
                      className={cn(
                        'transition-colors py-2 relative',
                        activeSection === link.id ? 'text-charcoal' : 'text-gray-500 hover:text-primary'
                      )}
                    >
                      {link.name}
                      {activeSection === link.id && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
                      )}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-primary transition-colors py-2 relative"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <Button size="sm" onClick={() => {
              if (isHome) {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contact';
              }
            }}>
              আপনার Business নিয়ে কথা বলুন
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-charcoal z-50 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={cn(
          "lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform flex flex-col pt-20",
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col h-full overflow-y-auto pb-6 custom-scrollbar">
          <ul className="flex flex-col gap-2 mt-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                {isHome ? (
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('/#')) {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }
                    }}
                    className={cn(
                      "block px-4 py-3 rounded-xl font-medium text-lg transition-colors",
                      activeSection === link.id ? "bg-sage text-primary font-bold" : "text-charcoal hover:bg-bg-warm"
                    )}
                  >
                    {link.name}
                  </a>
                ) : (
                  <a
                    href={link.href}
                    className="block px-4 py-3 rounded-xl font-medium text-lg text-charcoal hover:bg-bg-warm transition-colors"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
          
          <div className="mt-auto pt-8">
            <Button 
              className="w-full" 
              size="lg"
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (isHome) {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#contact';
                }
              }}
            >
              আপনার Business নিয়ে কথা বলুন
            </Button>
            <div className="text-center mt-6">
              <p className="text-[10px] text-gray-400 font-medium uppercase tracking-[0.2em] mb-1">Built for Bangladesh Brands</p>
              <p className="text-[10px] text-gray-500 font-bold">{business.officeAddress} • {business.email}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
