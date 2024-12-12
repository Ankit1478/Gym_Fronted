import React, { useEffect, useState } from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Text = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('trainers')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    document.getElementById('trainers')?.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.getElementById('trainers')?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="py-60 bg-black relative overflow-hidden" id="trainers">
      {/* Radial gradient light effect */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: '600px',
          height: '600px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 30%, transparent 70%)',
          transition: 'background 0.3s ease'
        }}
      />

      {/* Static ambient light */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-9xl font-bold text-white mb-4 relative z-10 tracking-tight">
            Expert Trainers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg relative z-10">
            Work with our certified professionals who are passionate about helping you achieve your fitness goals
          </p>
        </div>
      </div>

      {/* Additional light effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/[0.02] rounded-full filter blur-3xl" />
    </section>
  );
}

export default Text;