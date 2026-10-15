import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-sage-soft text-sage-deep text-sm font-semibold mb-6">
                Nowoczesne rozwiązania B2B
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-ink mb-6">
                Świeże spojrzenie na dystrybucję wyposażenia premium.
              </h1>
            </Reveal>
            
            <Reveal delay={150}>
              <p className="text-lg text-grey font-medium mb-10 leading-relaxed">
                Dostarczamy wyselekcjonowane marki AGD i rzetelne wsparcie dla salonów, architektów i deweloperów. Budujemy partnerstwa oparte na jakości.
              </p>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Zamienione klasy miejscami: Odkryj marki jest teraz outline, a Kontakt jest wypełniony */}
                <a href="#brands" className="bg-white border-2 border-line text-ink px-8 py-3.5 rounded-full font-semibold text-center hover:border-sage-deep hover:text-sage-deep transition-colors">
                  Odkryj marki
                </a>
                <a href="#contact" className="bg-sage-deep text-white px-8 py-3.5 rounded-full font-semibold text-center hover:bg-ink transition-colors shadow-sm">
                  Rozpocznij współpracę
                </a>
              </div>
            </Reveal>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <Reveal delay={200}>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[4/5] shadow-sm shadow-black/5">
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