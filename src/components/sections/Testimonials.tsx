import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Member since 2022',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    quote: "Joining Flex Gym was the best decision I have made for my health. The trainers are exceptional and the community is so supportive.",
    rating: 5
  },
  {
    name: 'Mike Thompson',
    role: 'Member since 2021',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'The facilities are top-notch and the 24/7 access fits perfectly with my busy schedule. I have seen amazing results!',
    rating: 5
  },
  {
    name: 'Emily Chen',
    role: 'Member since 2023',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'The personal training program has transformed my approach to fitness. I am stronger and more confident than ever.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Members Say</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}