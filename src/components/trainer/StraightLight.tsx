import React from 'react';

const StraightLight = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      {/* Central Beam */}
      <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 transform -translate-x-1/2" />
      
      {/* Blue ambient glow top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-blue-600/10 blur-[100px] rounded-full" />
    </div>
  );
};

export default StraightLight;
