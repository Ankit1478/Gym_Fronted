import { Play, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Parallax/Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-black/70 z-10" />
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
            alt="Gym Background"
            className="w-full h-full object-cover opacity-80"
          />
        </motion.div>
      </div>

      {/* Ambient Background Glow */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-10"
      />

      <div className="relative z-20 container mx-auto px-4 text-center sm:text-left h-full flex flex-col justify-center">
        <div className="max-w-5xl mx-auto sm:mx-0 pt-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center sm:justify-start gap-3 mb-8"
          >
            <span className="h-[2px] w-12 bg-blue-500 inline-block shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
            <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm md:text-base drop-shadow-lg">
              Welcome to Fitness Club
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-oswald text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-none tracking-tight uppercase drop-shadow-2xl"
          >
            TRANSFORM <br />
            <span className="relative inline-block">
              <span className="absolute -inset-1 blur-2xl bg-blue-600/30 rounded-lg"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600">
                YOUR BODY
              </span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto sm:mx-0 leading-relaxed font-light tracking-wide"
          >
            Join the elite fitness community where goals are smashed and limits are pushed. 
            <span className="text-white font-medium"> State-of-the-art equipment</span>, expert trainers, and a supportive environment await.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6 justify-center sm:justify-start"
          >
            <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] active:scale-95 w-full sm:w-auto ring-1 ring-white/10">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                START FREE TRIAL <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="group px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold text-lg rounded-full transition-all hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] active:scale-95 w-full sm:w-auto flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <span className="tracking-wide">WATCH VIDEO</span>
            </button>
          </motion.div>
        </div>
      </div>

     
    </section>
  );
}
