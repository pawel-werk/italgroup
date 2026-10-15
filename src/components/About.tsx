import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { ShieldIcon, UsersIcon, ToolIcon } from './Icons';

export default function About() {
  const pillars = [
    { icon: <ShieldIcon />, title: "Precyzyjna selekcja", desc: "Oferujemy tylko sprawdzonych, europejskich producentów. Jakość nie uznaje kompromisów." },
    { icon: <UsersIcon />, title: "Wsparcie partnerskie", desc: "Merytoryczne doradztwo dla architektów i salonów na każdym etapie procesu projektowego." },
    { icon: <ToolIcon />, title: "Własny serwis", desc: "Zapewniamy bezpośrednią autoryzowaną opiekę techniczną i pełne poczucie bezpieczeństwa." }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal>
          <SectionHeader label="O firmie" title="Dlaczego ITAL-GROUP?" />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mt-12">
          
          {/* Lewa strona - karty atutów */}
          <div className="flex flex-col gap-6">
            {pillars.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={idx * 150}>
                <div className="bg-mist rounded-2xl p-8 border border-line flex gap-6 hover:bg-sage-soft/50 transition-colors">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-sage-soft text-sage-deep flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-2">{pillar.title}</h3>
                    <p className="text-grey font-medium leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Prawa strona - tekst i zdjęcie */}
          <div className="flex flex-col gap-8">
            <Reveal>
              <div className="bg-sage-soft p-8 md:p-10 rounded-3xl">
                <p className="text-xl font-medium text-sage-deep leading-relaxed">
                  Jesteśmy doświadczonym, generalnym dystrybutorem sprzętu AGD i armatury w Polsce. Naszym celem jest upraszczanie procesów zakupowych dla branży wyposażenia wnętrz i dostarczanie niezawodnych produktów.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="rounded-3xl overflow-hidden aspect-[16/9] shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&q=80" 
                  alt="Detale nowoczesnej armatury" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}