import React from 'react';
import { Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

const trainers = [
  {
    name: "Alex Drago",
    role: "Strength Coach",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80",
    specialties: ["Powerlifting", "Hypertrophy"],
  },
  {
    name: "Sarah Croft",
    role: "HIIT Specialist",
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?auto=format&fit=crop&q=80",
    specialties: ["Cardio", "Endurance"],
  },
  {
    name: "Mike Tyson",
    role: "Boxing Lead",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80",
    specialties: ["Boxing", "Agility"],
  }
];

export const TrainerGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
    {trainers.map((trainer, index) => (
      <div key={index} className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl cursor-pointer">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={trainer.image} 
            alt={trainer.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        </div>

        {/* Floating Social Icons */}
        <div className="absolute top-4 right-4 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 flex flex-col gap-3">
          {[Instagram, Twitter, Linkedin].map((Icon, i) => (
            <div key={i} className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-blue-600 text-white transition-colors duration-300">
              <Icon size={18} />
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {/* Decorative Line */}
          <div className="w-12 h-1 bg-blue-600 mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          
          <h3 className="font-oswald text-3xl font-bold text-white uppercase mb-1 tracking-wide">
            {trainer.name}
          </h3>
          <p className="text-blue-500 font-medium text-lg mb-4">{trainer.role}</p>
          
          {/* Specialties Pills */}
          <div className="flex gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {trainer.specialties.map((spec, i) => (
              <span key={i} className="text-xs font-bold px-3 py-1 bg-white/10 backdrop-blur-md text-white rounded-full border border-white/10">
                {spec}
              </span>
            ))}
          </div>

          <button className="flex items-center gap-2 text-white font-bold uppercase tracking-wider group/btn">
            View Profile 
            <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    ))}
  </div>
);
