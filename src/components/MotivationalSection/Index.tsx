import React from 'react';
import { Background } from './Background';
import { Content } from './Content';

const MotivationalSection = () => {
  return (
    <section className="py-48 bg-black relative overflow-hidden" id="motivation">
      <Background />
      <Content />
    </section>
  );
};

export default MotivationalSection;