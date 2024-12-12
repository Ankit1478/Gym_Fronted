import React from 'react';

const StraightLight = () => {
  return (
    <>
      {/* Vertical light beam */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-white/50 to-transparent transform -translate-x-1/2 animate-flicker" />
      
      {/* Horizontal light beam */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent transform -translate-y-1/2 animate-flicker" />
      
      {/* Center glow effect */}
      <div className="absolute left-1/2 top-1/2 w-32 h-32 bg-white/20 rounded-full filter blur-xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      
      {/* Rotating ambient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.05] to-transparent animate-rotate" />
      
      {/* Corner light effects with pulsing animation */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/[0.05] rounded-full filter blur-3xl animate-corner-glow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/[0.05] rounded-full filter blur-3xl animate-corner-glow" />
    </>
  );
};

export default StraightLight;
