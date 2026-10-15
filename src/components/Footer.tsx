import { SITE_DATA } from '../data/content';
import { ArrowUp } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink text-ivory relative">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-champagne/30"></div>
      
      {/* Bardzo dyskretne paski z kolorami włoskiej flagi z logo, o szerokości 30px */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex h-[2px]">
         <div className="w-[15px] bg-[#009246]"></div>
         <div className="w-[15px] bg-[#CE2B37]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          <div className="w-full md:w-auto">
            <img 
              src={SITE_DATA.logos.main} 
              alt="ITAL-GROUP" 
              className="h-6 mb-8 object-contain" 
              style={{ filter: 'brightness(0) invert(1)' }} 
              loading="lazy" 
            />
            <p className="text-ivory/50 font-light max-w-xs text-sm">
              Wyłączny dystrybutor i autoryzowany przedstawiciel europejskich marek premium w Polsce.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-12 md:gap-24 font-light text-sm text-ivory/70">
            <div>
              <p className="text-[11px] font-sans uppercase tracking-[0.25em] text-champagne mb-4">Adres</p>
              <p className="mb-1">{SITE_DATA.company.address}</p>
              <p>NIP: {SITE_DATA.company.nip}</p>
            </div>
            <div>
              <p className="text-[11px] font-sans uppercase tracking-[0.25em] text-champagne mb-4">Kontakt</p>
              <a href={`tel:${SITE_DATA.company.phone.replace(/\s+/g, '')}`} className="block hover:text-champagne transition-colors mb-1">{SITE_DATA.company.phone}</a>
              <a href={`mailto:${SITE_DATA.company.email}`} className="block hover:text-champagne transition-colors">{SITE_DATA.company.email}</a>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-sans uppercase tracking-[0.2em] text-ivory/40">
          <p>&copy; {currentYear} {SITE_DATA.company.name}. Wszelkie prawa zastrzeżone.</p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-champagne transition-colors group p-2"
            aria-label="Wróć do góry"
          >
            Do góry
            <span className="group-hover:-translate-y-1 transition-transform"><ArrowUp /></span>
          </button>
        </div>
      </div>
    </footer>
  );
}