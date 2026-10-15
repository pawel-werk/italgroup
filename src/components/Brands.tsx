import { SITE_DATA } from '../data/content';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { ArrowRight } from './Icons';

export default function Brands() {
  const activeBrands = SITE_DATA.brands.filter(b => b.enabled);
  const brandsWithLogos = activeBrands.filter(b => b.logo);

  return (
    <section id="brands" className="py-32 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal>
          <SectionHeader number="01" title="Nasze Portfolio" />
        </Reveal>

        {/* Logo Strip */}
        <Reveal delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 mb-24 opacity-80">
            {brandsWithLogos.map((brand) => (
              <img 
                key={brand.name}
                src={brand.logo!} 
                alt={brand.name} 
                className="h-8 md:h-10 object-contain grayscale mix-blend-multiply hover:grayscale-0 transition-all duration-700" 
                loading="lazy"
              />
            ))}
          </div>
        </Reveal>

        {/* Editorial List */}
        <div className="border-t border-sand">
          {activeBrands.map((brand, idx) => (
            <Reveal key={brand.name} delay={idx * 50}>
              <div className="group relative border-b border-sand hover:bg-ink hover:text-ivory transition-colors duration-500 flex flex-col md:flex-row md:items-center py-8 md:py-12 px-4 -mx-4 md:mx-0 md:px-6">
                <div className="text-[11px] font-sans uppercase tracking-[0.25em] text-stone group-hover:text-champagne w-16 mb-4 md:mb-0 transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="md:w-1/3 pr-8">
                  <h3 className="text-3xl font-serif tracking-tight">{brand.name}</h3>
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0">
                  <p className="text-stone group-hover:text-ivory/70 transition-colors font-light text-lg">
                    {brand.desc}
                  </p>
                </div>
                <div className="mt-6 md:mt-0 md:w-1/6 flex md:justify-end">
                  {brand.link !== '#' && (
                    <a 
                      href={brand.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-3 text-[11px] font-sans uppercase tracking-[0.25em] text-ink group-hover:text-ivory transition-all duration-500"
                    >
                      <span>Odwiedź</span>
                      <span className="transform group-hover:translate-x-2 transition-transform duration-500"><ArrowRight /></span>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}