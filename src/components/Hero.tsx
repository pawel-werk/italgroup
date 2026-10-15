import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-32 md:pb-40 bg-ink overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=80" 
          alt="Luksusowa kuchnia" 
          className="w-full h-full object-cover opacity-60 animate-slow-zoom origin-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      </div>
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 text-left text-ivory">
        <Reveal>
          <span className="block text-[11px] font-sans uppercase tracking-[0.25em] text-champagne mb-6">
            Dystrybucja · AGD · Armatura
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif leading-[0.95] tracking-tight mb-8 max-w-4xl">
            Sztuka selekcji wyposażenia <span className="text-champagne italic font-light">premium</span>
          </h1>
        </Reveal>
        
        <Reveal delay={200}>
          <p className="text-lg md:text-xl text-ivory/70 max-w-xl font-light mb-12 leading-relaxed">
            Ekskluzywne portfolio europejskich marek. Zaufany partner dla salonów meblowych, architektów wnętrz i generalnych wykonawców.
          </p>
        </Reveal>
        
        <Reveal delay={400}>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#brands" className="bg-ivory text-ink px-10 py-4 text-[11px] font-sans uppercase tracking-[0.25em] text-center hover:bg-sand transition-colors duration-500">
              Portfolio Marek
            </a>
            <a href="#contact" className="border border-ivory/30 text-ivory px-10 py-4 text-[11px] font-sans uppercase tracking-[0.25em] text-center hover:border-ivory hover:bg-ivory/10 transition-colors duration-500">
              Współpraca
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-12 left-6 lg:left-12 flex items-center gap-4 text-ivory/50">
        <div className="w-[1px] h-12 bg-ivory/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-ivory animate-[translateY_2s_ease-in-out_infinite]" />
        </div>
        <span className="text-[11px] font-sans uppercase tracking-[0.25em]">Wrocław · Polska</span>
      </div>
    </section>
  );
}