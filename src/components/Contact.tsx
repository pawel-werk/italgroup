import { SITE_DATA } from '../data/content';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-4">Skontaktuj się z nami</h2>
            <p className="text-ink-light max-w-2xl mx-auto">Jesteśmy do dyspozycji od poniedziałku do piątku. Wybierz odpowiedni dział.</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Kolumna 1: Główne dane firmy */}
          <div className="lg:col-span-1">
            <Reveal>
              <div className="bg-brand text-white p-8 rounded-xl shadow-lg h-full">
                <h3 className="text-xl font-semibold mb-6">Siedziba Firmy</h3>
                <p className="font-serif text-lg mb-2">{SITE_DATA.company.name}</p>
                <p className="mb-8 opacity-90">{SITE_DATA.company.address}</p>
                
                <div className="space-y-4 mb-8">
                  <a href={`tel:${SITE_DATA.company.phone.replace(/\s+/g, '')}`} className="block hover:opacity-80 transition-opacity">
                    📞 {SITE_DATA.company.phone}
                  </a>
                  <a href={`mailto:${SITE_DATA.company.email}`} className="block hover:opacity-80 transition-opacity">
                    ✉️ {SITE_DATA.company.email}
                  </a>
                </div>

                <div className="pt-8 border-t border-white/20 text-sm opacity-80 space-y-1">
                  <p>NIP: {SITE_DATA.company.nip}</p>
                  <p>KRS: {SITE_DATA.company.krs}</p>
                  <p>REGON: {SITE_DATA.company.regon}</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Kolumna 2: Kontakty zespołu */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {SITE_DATA.team.map((person, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-full">
                  <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">{person.role}</div>
                  <h4 className="text-lg font-semibold text-ink mb-4">{person.name}</h4>
                  <div className="space-y-2 text-sm">
                    {person.phone.map(tel => (
                      <a key={tel} href={`tel:${tel.replace(/\s+/g, '')}`} className="block text-ink-light hover:text-brand">
                        Tel: {tel}
                      </a>
                    ))}
                    <a href={`mailto:${person.email}`} className="block text-ink-light hover:text-brand">
                      {person.email}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mapa */}
        <Reveal delay={200}>
          <div className="mt-16 w-full h-[400px] rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d2503.743845945934!2d17.147253!3d51.131597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe7b16584c2f1%3A0x6a16c7f8c11e7e40!2zxYhha293YSA2LCA1NS0wOTUgTWlya8Ozdw!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa dojazdu do ITAL-GROUP"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}