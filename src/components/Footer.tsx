import { SITE_DATA } from '../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-line py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          
          <div className="max-w-sm">
            <img 
              src={SITE_DATA.logos.main} 
              alt="ITAL-GROUP" 
              className="h-6 mb-6 object-contain" 
              loading="lazy" 
            />
            <p className="text-grey font-medium text-sm leading-relaxed">
              Wyłączny dystrybutor i autoryzowany przedstawiciel europejskich marek wyposażenia wnętrz klasy premium w Polsce.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-12 md:gap-24 font-medium text-sm text-ink">
            <div>
              <p className="text-sage-deep font-bold mb-4">Adres</p>
              <p className="text-grey mb-1">{SITE_DATA.company.address}</p>
              <p className="text-grey">NIP: {SITE_DATA.company.nip}</p>
            </div>
            <div>
              <p className="text-sage-deep font-bold mb-4">Kontakt</p>
              <a href={`tel:${SITE_DATA.company.phone.replace(/\s+/g, '')}`} className="block text-grey hover:text-sage-deep transition-colors mb-2">
                {SITE_DATA.company.phone}
              </a>
              <a href={`mailto:${SITE_DATA.company.email}`} className="block text-grey hover:text-sage-deep transition-colors">
                {SITE_DATA.company.email}
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-grey">
          <p>&copy; {currentYear} {SITE_DATA.company.name}. Wszelkie prawa zastrzeżone.</p>
          <p>Projekt i wdrożenie dla B2B</p>
        </div>
      </div>
    </footer>
  );
}