import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers = [
  {
    name: "Sarah Johnson",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Mike Thompson",
    specialty: "CrossFit Expert",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Emma Davis",
    specialty: "Yoga & Flexibility",
    image: "https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?q=80&w=2918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  }
];

const Gallery = () => {
  return (
    <section className="py-24 bg-black" id="trainers">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Meet Our Trainers</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Our certified experts are here to help you achieve your fitness goals with personalized guidance and support.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden h-60">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{trainer.name}</h3>
                <p className="text-sm text-gray-300 mb-4">{trainer.specialty}</p>
                <div className="flex space-x-4">
                  <a
                    href={trainer.social.instagram}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={trainer.social.twitter}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={trainer.social.linkedin}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;