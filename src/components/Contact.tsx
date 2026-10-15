import { SITE_DATA } from '../data/content';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function Contact() {
  // Grupowanie zespołu
  const groupedTeam = SITE_DATA.team.reduce((acc, person) => {
    if (!acc[person.role]) acc[person.role] = [];
    acc[person.role].push(person);
    return acc;
  }, {} as Record<string, typeof SITE_DATA.team>);

  return (
    <section id="contact" className="py-32 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal>
          <SectionHeader number="03" title="Kontakt" />
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <Reveal>
              <h3 className="text-xl font-serif text-stone mb-4">Siedziba Główna</h3>
              <p className="text-3xl md:text-4xl font-serif mb-2 tracking-tight">{SITE_DATA.company.name}</p>
              <p className="text-stone font-light text-lg mb-12">{SITE_DATA.company.address}</p>
              
              <div className="space-y-6 mb-16">
                <a href={`tel:${SITE_DATA.company.phone.replace(/\s+/g, '')}`} className="block text-2xl font-serif hover:text-champagne transition-colors">
                  {SITE_DATA.company.phone}
                </a>
                <a href={`mailto:${SITE_DATA.company.email}`} className="block text-2xl font-serif hover:text-champagne transition-colors">
                  {SITE_DATA.company.email}
                </a>
              </div>

              <div className="pt-8 border-t border-sand flex gap-6 text-[11px] font-sans uppercase tracking-[0.2em] text-stone">
                <span>NIP {SITE_DATA.company.nip}</span>
                <span>KRS {SITE_DATA.company.krs}</span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-sand">
              {Object.entries(groupedTeam).map(([role, members], groupIdx) => (
                <Reveal key={role} delay={groupIdx * 100}>
                  <div className="flex flex-col md:flex-row border-b border-sand py-8 group">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                      <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-champagne">{role}</span>
                    </div>
                    <div className="md:w-2/3 space-y-6">
                      {members.map((person, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                          <h4 className="text-xl font-serif tracking-tight text-ink">{person.name}</h4>
                          <div className="text-stone font-light flex gap-4 text-sm">
                            {person.phone.length > 0 && (
                              <a href={`tel:${person.phone[0].replace(/\s+/g, '')}`} className="hover:text-champagne transition-colors">
                                {person.phone[0]}
                              </a>
                            )}
                            <a href={`mailto:${person.email}`} className="hover:text-champagne transition-colors">
                              {person.email}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={200}>
          <div className="mt-24 w-full h-[420px] overflow-hidden bg-sand">
            <iframe 
              src="https://maps.google.com/maps?q=ul.+%C5%81%C4%85kowa+6%2C+55-095+Mirk%C3%B3w&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja ITAL-GROUP"
              className="grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-1000"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}