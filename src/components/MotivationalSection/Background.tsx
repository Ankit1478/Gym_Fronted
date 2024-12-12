import React from 'react';

export const Background = () => {
  return (
    <>
      {/* Deep dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
      
      {/* Dark nebula effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 via-transparent to-blue-900/5" />
      </div>
      
      {/* Subtle dark pulse */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent animate-pulse" 
          style={{ animationDuration: '4s' }} 
        />
      </div>
      
      {/* Dark diagonal lines */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent transform -rotate-45"
            style={{
              top: `${i * 15}%`,
              left: `-${i * 8}%`,
            }}
          />
        ))}
      </div>
      
      {/* Deep vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/80 to-black opacity-70" />
      
      {/* Dark corner accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900/5 rounded-full filter blur-[100px] opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/5 rounded-full filter blur-[100px] opacity-20" />
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          width: '200%',
          height: '200%',
          transform: 'translate(-50%, -50%)'
        }} />
      </div>
    </>
  );
};