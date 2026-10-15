import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { SITE_DATA } from '../data/content';
import { MenuIcon, CloseIcon } from './Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
      window.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleEscape);
      };
    }
  }, [menuOpen]);

  const links = [
    { name: 'Marki', href: '#brands' },
    { name: 'O nas', href: '#about' },
    { name: 'Kontakt', href: '#contact' },
  ];

  const logoFilter = !scrolled ? 'brightness(0) invert(1)' : 'none';

  const mobileMenu = menuOpen && typeof document !== 'undefined' ? createPortal(
    <div 
      className="fixed inset-0 z-[100] bg-ink text-ivory flex flex-col px-6 py-8 animate-in fade-in duration-500"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex justify-between items-center mb-16">
        <img src={SITE_DATA.logos.main} alt="ITAL-GROUP" className="h-6 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
        <button onClick={() => setMenuOpen(false)} aria-label="Zamknij menu" className="p-2 text-ivory hover:text-champagne transition-colors">
          <CloseIcon />
        </button>
      </div>
      <nav className="flex flex-col gap-8 mt-12" ref={menuRef}>
        {links.map((link, idx) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-4xl font-serif text-ivory hover:text-champagne transition-colors"
            onClick={() => setMenuOpen(false)}
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {link.name}
          </a>
        ))}
      </nav>
      <div className="mt-auto border-t border-white/10 pt-8 flex flex-col gap-2 text-[11px] font-sans uppercase tracking-[0.25em] text-stone">
        <a href={`tel:${SITE_DATA.company.phone.replace(/\s+/g, '')}`} className="hover:text-champagne transition-colors">{SITE_DATA.company.phone}</a>
        <a href={`mailto:${SITE_DATA.company.email}`} className="hover:text-champagne transition-colors">{SITE_DATA.company.email}</a>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
          scrolled ? 'bg-ivory/95 backdrop-blur-md border-b border-sand py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center z-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne">
            <img 
              src={SITE_DATA.logos.main} 
              alt="ITAL-GROUP Logo" 
              className="h-5 md:h-6 object-contain transition-all duration-700" 
              style={{ filter: logoFilter }}
            />
          </a>

          <nav className="hidden md:flex gap-12 items-center">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-[11px] font-sans uppercase tracking-[0.25em] relative group pb-1 ${scrolled ? 'text-ink' : 'text-ivory'}`}
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-champagne transition-all duration-500 ease-out group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              className={`text-[11px] font-sans uppercase tracking-[0.25em] px-6 py-3 border transition-colors duration-500 ${
                scrolled 
                  ? 'border-ink text-ink hover:bg-ink hover:text-ivory' 
                  : 'border-ivory/30 text-ivory hover:border-ivory hover:bg-ivory/10'
              }`}
            >
              Skontaktuj się
            </a>
          </nav>

          <button 
            className={`md:hidden z-50 p-2 ${scrolled ? 'text-ink' : 'text-ivory'}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Otwórz menu"
            aria-expanded={menuOpen}
          >
            <MenuIcon />
          </button>
        </div>
      </header>
      {mobileMenu}
    </>
  );
}