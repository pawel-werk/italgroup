import Reveal from './Reveal';

export default function Hero() {
  return (
    // Zmniejszone paddingi pionowe z py-32/py-40 na py-16 na mobile i pt-28 pb-12 lg:pt-36 lg:pb-16 na desktopie
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-16 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Zmniejszony gap z 12-16 na 8-12 dla ściślejszego ułożenia */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Lewa strona - treści */}
          <div className="max-w-2xl py-2">
            <Reveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-sage-soft text-sage-deep text-sm font-semibold mb-4 lg:mb-6">
                Nowoczesne rozwiązania B2B
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-ink mb-4 lg:mb-6">
                Świeże spojrzenie na dystrybucję wyposażenia premium.
              </h1>
            </Reveal>
            
            <Reveal delay={150}>
              <p className="text-base md:text-lg text-grey font-medium mb-6 lg:mb-10 leading-relaxed max-w-xl">
                Dostarczamy wyselekcjonowane marki AGD i rzetelne wsparcie dla salonów, architektów i deweloperów. Budujemy partnerstwa oparte na jakości.
              </p>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="#brands" className="bg-white border-2 border-line text-ink px-6 py-3 rounded-full font-semibold text-center hover:border-sage-deep hover:text-sage-deep transition-colors text-sm">
                  Odkryj marki
                </a>
                <a href="#contact" className="bg-sage-deep text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-ink transition-colors shadow-sm text-sm">
                  Rozpocznij współpracę
                </a>
              </div>
            </Reveal>
          </div>

          {/* Prawa strona - mniejsze, proporcjonalne zdjęcie bez pustych przestrzeni */}
          <div className="relative mt-4 lg:mt-0 flex justify-center lg:justify-end">
            <Reveal delay={200} className="w-full">
              {/* Ograniczono max-h-[500px] i zmniejszono proporcje na aspect-[4/3] (zamiast pionowego [4/5]), aby zmniejszyć wysokość */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[4/3] max-h-[420px] lg:max-h-[500px] w-full shadow-sm shadow-black/5">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80" 
                  alt="Jasna i nowoczesna kuchnia premium" 
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}