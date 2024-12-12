import React from 'react';
import StraightLight from './StraightLight';
import { Title } from './Title';
import { Description } from './Description';

const TrainerSection = () => {
  return (
    <section className="py-96 bg-black relative overflow-hidden" id="trainers">
      <StraightLight />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <Title />
          <Description />
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;