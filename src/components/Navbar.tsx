import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { SITE_DATA } from '../data/content';
import { MenuIcon, CloseIcon } from './Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    { name: 'Nasze portfolio', href: '#brands' },
    { name: 'O firmie', href: '#about' },
  ];

  const mobileMenu = menuOpen && typeof document !== 'undefined' ? createPortal(
    <div 
      className="fixed inset-0 z-[100] bg-white flex flex-col px-6 py-6 transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex justify-between items-center mb-16">
        <img src={SITE_DATA.logos.main} alt="ITAL-GROUP" className="h-6 object-contain" />
        <button onClick={() => setMenuOpen(false)} aria-label="Zamknij menu" className="p-2 text-ink hover:text-sage-deep transition-colors bg-mist rounded-full">
          <CloseIcon />
        </button>
      </div>
      <nav className="flex flex-col gap-6 mt-4" ref={menuRef}>
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-3xl font-semibold text-ink hover:text-sage-deep transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#contact" 
          className="text-3xl font-semibold text-ink hover:text-sage-deep transition-colors mt-4"
          onClick={() => setMenuOpen(false)}
        >
          Kontakt
        </a>
      </nav>
      <div className="mt-auto border-t border-line pt-8 flex flex-col gap-3 text-sm font-medium text-grey">
        <a href={`tel:${SITE_DATA.company.phone.replace(/\s+/g, '')}`} className="hover:text-sage-deep transition-colors">{SITE_DATA.company.phone}</a>
        <a href={`mailto:${SITE_DATA.company.email}`} className="hover:text-sage-deep transition-colors">{SITE_DATA.company.email}</a>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md border-b border-line py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center z-50 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-deep">
            <img 
              src={SITE_DATA.logos.main} 
              alt="ITAL-GROUP Logo" 
              className="h-5 md:h-6 object-contain transition-all duration-300" 
            />
          </a>

          <nav className="hidden md:flex gap-8 items-center bg-white/60 backdrop-blur-md px-6 py-2 rounded-full border border-line shadow-sm shadow-black/5">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-ink hover:text-sage-deep transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a 
              href="#contact" 
              className="text-sm font-medium px-6 py-2.5 rounded-full bg-ink text-white hover:bg-sage-deep transition-colors shadow-sm shadow-black/5"
            >
              Skontaktuj się
            </a>
          </div>

          <button 
            className="md:hidden z-50 p-2 text-ink bg-mist rounded-full"
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