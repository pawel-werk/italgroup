import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-ink pt-20">
      <div className="absolute inset-0 overflow-hidden">
        {/* Placeholder for real interior kitchen photo from unsplash */}
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80" 
          alt="Nowoczesna kuchnia" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
        <Reveal>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6">
            Dystrybucja AGD i armatury kuchennej <span className="text-brand">klasy premium</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
            Zaopatrujemy salony meblowe, architektów i firmy wykonawcze w najlepsze europejskie marki.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#brands" className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-sm font-medium transition-colors">
              Poznaj marki
            </a>
            <a href="#contact" className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-sm font-medium transition-colors">
              Skontaktuj się
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}