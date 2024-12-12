import React from 'react';
import { Target, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: <Target className="h-8 w-8 text-blue-500" />,
    title: 'Expert Guidance',
    description: 'Professional trainers dedicated to your success'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: 'Community',
    description: 'Join a supportive community of fitness enthusiasts'
  },
  {
    icon: <Trophy className="h-8 w-8 text-blue-500" />,
    title: 'Results',
    description: 'Achieve your fitness goals with proven methods'
  }
];

export default function About() {
  return (
    <section id="about" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At Flex Gym, we believe in transforming lives through fitness. Our state-of-the-art facility
              is designed to help you achieve your fitness goals, whether you're just starting your journey
              or are an experienced athlete.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With over a decade of experience, we've built a community of dedicated fitness enthusiasts
              who support and motivate each other. Our expert trainers are committed to providing
              personalized guidance to ensure your success.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}