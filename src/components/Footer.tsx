import { SITE_DATA } from '../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-line py-10 md:py-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Kontener główny stopki */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          
          {/* Lewa kolumna - dodano text-center, flex, flex-col i items-center */}
          <div className="max-w-sm flex flex-col items-center text-center md:items-center">
            <a 
              href="#" 
              className="inline-block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-deep mb-4"
              aria-label="Wróć na górę strony"
            >
              <img 
                src={SITE_DATA.logos.main} 
                alt="ITAL-GROUP" 
                // Dodano mx-auto dla pewności, że logo zawsze trzyma się środka
                className="h-6 object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 active:grayscale-0 active:opacity-100 mx-auto" 
                loading="lazy" 
              />
            </a>
            <p className="text-grey font-medium text-sm leading-relaxed">
              Wyłączny dystrybutor i autoryzowany przedstawiciel europejskich marek wyposażenia wnętrz klasy premium w Polsce.
            </p>
          </div>
          
          {/* Prawa strona (Adres i Kontakt) */}
          <div className="flex flex-col sm:flex-row gap-10 md:gap-24 font-medium text-sm text-ink">
            <div className="text-center">
              <p className="text-sage-deep font-bold mb-3">Adres</p>
              <p className="text-grey mb-1">{SITE_DATA.company.address}</p>
              <p className="text-grey">NIP: {SITE_DATA.company.nip}</p>
            </div>
            <div className="text-center">
              <p className="text-sage-deep font-bold mb-3">Kontakt</p>
              <a href={`tel:${SITE_DATA.company.phone.replace(/\s+/g, '')}`} className="block text-grey hover:text-sage-deep transition-colors mb-1">
                {SITE_DATA.company.phone}
              </a>
              <a href={`mailto:${SITE_DATA.company.email}`} className="block text-grey hover:text-sage-deep transition-colors">
                {SITE_DATA.company.email}
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-line text-center text-sm font-medium text-grey">
          <p>&copy; {currentYear} {SITE_DATA.company.name}. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}