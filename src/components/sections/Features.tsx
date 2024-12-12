import React from 'react';
import { images } from '../constant/image';

const Features = () => {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 h-[600px] w-full">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group flex-1 transition-all duration-500 ease-in-out hover:flex-[3] overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
              <h2 className="absolute bottom-6 left-6 text-white text-2xl font-bold tracking-wider">
                {image.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;