import StraightLight from './StraightLight';
import { Title } from './Title';
import { Description } from './Description';
import { TrainerGrid } from './TrainerGrid';

const TrainerSection = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden" id="trainers">
      <StraightLight />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-4">
             <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm border border-blue-500/30 px-4 py-1 rounded-full bg-blue-500/10">
               Our Team
             </span>
          </div>
          <Title />
          <Description />
        </div>

        <TrainerGrid />
      </div>
    </section>
  );
};

export default TrainerSection;
