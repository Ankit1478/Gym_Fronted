import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
          alt="Gym Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Transform Your Body,<br />
          <span className="text-blue-500">Transform Your Life</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join the ultimate fitness experience where your goals become achievements
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
          Join Now
        </button>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
}