import { SITE_DATA } from '../data/content';
import Reveal from './Reveal';

export default function Brands() {
  return (
    <section id="brands" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-4">Nasze Marki</h2>
            <p className="text-ink-light">Wyselekcjonowane, prestiżowe urządzenia i armatura do Twoich projektów.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_DATA.brands.map((brand, idx) => (
            <Reveal key={brand.name} delay={idx * 100}>
              <div className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="h-24 flex items-center justify-center mb-6">
                  {brand.img ? (
                    <img src={brand.img} alt={`Logo ${brand.name}`} className="max-h-16 max-w-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" loading="lazy" />
                  ) : (
                    <span className="text-2xl font-serif font-bold text-gray-400 group-hover:text-ink transition-colors">{brand.name}</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">{brand.name}</h3>
                <p className="text-sm text-ink-light flex-grow mb-6">{brand.desc}</p>
                {brand.link !== '#' && (
                  <a href={brand.link} target="_blank" rel="noopener noreferrer" className="text-brand font-medium text-sm inline-flex items-center gap-1 hover:text-brand-dark transition-colors mt-auto">
                    Odwiedź stronę marki <span aria-hidden="true">&rarr;</span>
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