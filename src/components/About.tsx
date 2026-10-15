import Reveal from './Reveal';

export default function About() {
  const pillars = [
    { title: "Zaufane marki", desc: "Współpracujemy wyłącznie z uznanymi producentami o światowej renomie, gwarantując niezawodność i unikalny design." },
    { title: "Wsparcie partnerów", desc: "Zapewniamy profesjonalne doradztwo dla salonów meblowych i architektów wnętrz na każdym etapie projektu." },
    { title: "Własny serwis", desc: "Oferujemy kompleksową obsługę posprzedażową i sprawny serwis dla wszystkich dystrybuowanych urządzeń." }
  ];

  return (
    <section id="about" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Dlaczego ITAL-GROUP?</h2>
              <p className="text-lg text-ink-light mb-6">
                Jesteśmy wyłącznym lub autoryzowanym dystrybutorem sprzętu AGD i armatury kuchennej premium na terenie Polski. 
                Dostarczamy kompleksowe rozwiązania dla nowoczesnych wnętrz, wspierając rozwój biznesowy naszych partnerów handlowych.
              </p>
              <p className="text-lg text-ink-light">
                Naszą siłą jest wiedza produktowa, doskonałe relacje z producentami oraz indywidualne podejście do każdego klienta B2B.
              </p>
            </div>
          </Reveal>
          
          <div className="grid sm:grid-cols-1 gap-6">
            {pillars.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={idx * 150}>
                <div className="flex gap-4 p-6 bg-surface rounded-xl">
                  <div className="w-1.5 bg-accent rounded-full shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-ink text-lg mb-2">{pillar.title}</h3>
                    <p className="text-sm text-ink-light">{pillar.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}