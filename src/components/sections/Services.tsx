import React from 'react';
import { Dumbbell, Users, Utensils, Timer } from 'lucide-react';

const services = [
  {
    icon: <Dumbbell className="h-12 w-12 text-blue-500" />,
    title: 'Personal Training',
    description: 'One-on-one sessions tailored to your specific goals and needs'
  },
  {
    icon: <Users className="h-12 w-12 text-blue-500" />,
    title: 'Group Classes',
    description: 'High-energy group workouts led by expert instructors'
  },
  {
    icon: <Utensils className="h-12 w-12 text-blue-500" />,
    title: 'Nutrition Planning',
    description: 'Customized meal plans to complement your fitness routine'
  },
  {
    icon: <Timer className="h-12 w-12 text-blue-500" />,
    title: '24/7 Access',
    description: 'Train on your schedule with round-the-clock gym access'
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}