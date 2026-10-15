import { SITE_DATA } from '../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ink text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img src={SITE_DATA.logos.mini} alt="ITAL-GROUP Mini Logo" className="h-8 mb-6 object-contain bg-white rounded-sm p-1" loading="lazy" />
            <p className="text-sm text-gray-400 text-center md:text-left max-w-xs">
              Generalny dystrybutor marek premium sprzętu AGD i armatury w Polsce.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left text-sm text-gray-400">
            <div>
              <p className="text-white font-medium mb-3">Siedziba</p>
              <p>{SITE_DATA.company.address}</p>
              <p className="mt-2">NIP: {SITE_DATA.company.nip}</p>
              <p>KRS: {SITE_DATA.company.krs}</p>
            </div>
            <div>
              <p className="text-white font-medium mb-3">Kontakt</p>
              <a href={`tel:${SITE_DATA.company.phone.replace(/\s+/g, '')}`} className="block hover:text-white transition-colors">{SITE_DATA.company.phone}</a>
              <a href={`mailto:${SITE_DATA.company.email}`} className="block mt-2 hover:text-white transition-colors">{SITE_DATA.company.email}</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          &copy; {currentYear} {SITE_DATA.company.name}. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}