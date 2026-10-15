import { SITE_DATA } from '../data/content';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { ArrowRight } from './Icons';

export default function Brands() {
  const activeBrands = SITE_DATA.brands.filter(b => b.enabled);

  return (
    <section id="brands" className="py-24 md:py-32 bg-mist">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal>
          <SectionHeader label="Portfolio" title="Marki, którym ufamy" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {activeBrands.map((brand, idx) => (
            <Reveal key={brand.name} delay={idx * 100}>
              <div className="bg-white rounded-2xl p-8 border border-line h-full flex flex-col shadow-sm shadow-black/5 hover:shadow-md transition-shadow duration-300 group">
                <div className="h-20 flex items-center mb-6">
                  {brand.logo ? (
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="max-h-12 max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <span className="inline-block px-4 py-2 bg-sage-soft text-sage-deep rounded-full text-sm font-bold tracking-tight">
                      {brand.name}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-ink mb-3">{brand.name}</h3>
                <p className="text-grey font-medium leading-relaxed flex-grow mb-8">
                  {brand.desc}
                </p>
                
                {brand.link !== '#' && (
                  <a 
                    href={brand.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-sage-deep hover:text-ink transition-colors mt-auto"
                  >
                    Odwiedź stronę
                    <span className="transform group-hover:translate-x-1 transition-transform"><ArrowRight /></span>
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}