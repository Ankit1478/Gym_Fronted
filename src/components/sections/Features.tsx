import { images } from '../constant/image';
import { ArrowUpRight } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden" id="features">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm border border-blue-500/30 px-4 py-1 rounded-full bg-blue-500/10">
            Why Choose Us
          </span>
          <h2 className="mt-6 font-oswald text-4xl md:text-6xl font-bold text-white uppercase tracking-tight">
            Push Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">Limits</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:h-[600px] w-full">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative group lg:flex-1 h-[400px] lg:h-auto transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] lg:hover:flex-[3] overflow-hidden rounded-3xl border border-white/10"
            >
              {/* Image with zoom effect */}
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

              {/* Number overlay */}
              <div className="absolute top-6 right-6 font-oswald text-6xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500 select-none">
                0{index + 1}
              </div>

              {/* Content Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-end justify-between">
                  <div>
                    <h2 className="text-white font-oswald text-3xl md:text-5xl font-bold uppercase tracking-wide mb-2">
                      {image.title}
                    </h2>
                    <p className="text-gray-300 max-w-md opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100 transform lg:translate-y-4 lg:group-hover:translate-y-0">
                      Experience world-class training designed to maximize your potential and crush your fitness goals.
                    </p>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-blue-600 items-center justify-center text-white opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-200 shadow-lg shadow-blue-600/30">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Active State Border Glow */}
              <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/50 rounded-3xl transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
