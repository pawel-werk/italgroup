import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function About() {
  const pillars = [
    { num: "I", title: "Zaufane marki", desc: "Wyłącznie europejscy producenci o światowej renomie, gwarantujący niezawodność, dziedzictwo i unikalny design." },
    { num: "II", title: "Wsparcie partnerów", desc: "Kompetentne doradztwo projektowe dla salonów, pracowni architektonicznych i deweloperów premium." },
    { num: "III", title: "Własny serwis", desc: "Bezpośrednia, autoryzowana opieka posprzedażowa. Bezpieczeństwo inwestycji na lata." }
  ];

  return (
    <section id="about" className="bg-ivory pt-16 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-32">
        <Reveal>
          <SectionHeader number="02" title="O Firmie" />
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-5 relative">
            <Reveal direction="right">
              <div className="relative">
                {/* Offset frame */}
                <div className="absolute -inset-4 border border-sand z-0 translate-x-4 translate-y-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1000&q=80" 
                  alt="Detal marmuru i armatury" 
                  className="relative z-10 w-full aspect-[4/5] object-cover grayscale-[30%]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
          
          <div className="lg:col-span-7 pt-8">
            <Reveal>
              <h3 className="text-3xl md:text-4xl font-serif tracking-tight mb-8">
                Generalny dystrybutor rozwiązań kuchennych na terenie Polski.
              </h3>
              <div className="text-stone font-light text-lg space-y-6 mb-16">
                <p>
                  Dostarczamy kompletne rozwiązania wyposażenia dla wymagających wnętrz. Naszą siłą nie jest wyłącznie portfolio, ale wieloletnia wiedza produktowa i bezkompromisowe podejście do selekcji marek.
                </p>
                <p>
                  Rozumiemy proces projektowy. Tworzymy stabilne zaplecze logistyczne i merytoryczne dla naszych partnerów handlowych.
                </p>
              </div>
            </Reveal>

            <div className="space-y-0">
              {pillars.map((pillar, idx) => (
                <Reveal key={pillar.title} delay={idx * 150}>
                  <div className="flex gap-6 py-8 border-t border-sand">
                    <span className="text-champagne font-serif italic text-2xl w-8">{pillar.num}</span>
                    <div>
                      <h4 className="text-ink font-serif text-2xl mb-2">{pillar.title}</h4>
                      <p className="text-stone font-light">{pillar.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-ink text-ivory py-32 px-6 text-center">
        <Reveal>
          <p className="text-3xl md:text-5xl font-serif max-w-4xl mx-auto leading-tight italic tracking-tight text-champagne">
            "Jakość nie jest dziełem przypadku, lecz wynikiem świadomego wyboru."
          </p>
        </Reveal>
      </div>
    </section>
  );
}