import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '29',
    features: [
      'Access to gym equipment',
      'Locker room access',
      'Basic fitness assessment',
      'Free parking'
    ]
  },
  {
    name: 'Pro',
    price: '59',
    features: [
      'All Basic features',
      'Group classes included',
      'Nutrition consultation',
      'Personal training session (1x/month)'
    ],
    popular: true
  },
  {
    name: 'Elite',
    price: '99',
    features: [
      'All Pro features',
      'Unlimited personal training',
      'Premium nutrition planning',
      'Recovery spa access'
    ]
  }
];

export default function Membership() {
  return (
    <motion.section 
      id="membership" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 to-black py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
            Membership Plans
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-blue-500 mx-auto"
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className={`relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 ${
                plan.popular ? 'ring-4 ring-blue-500/50' : ''
              }`}
            >
              {plan.popular && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg font-semibold"
                >
                  Most Popular
                </motion.div>
              )}
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {plan.name}
                </h3>
                <div className="mb-6 flex items-baseline">
                  <span className="text-4xl font-extrabold text-white mr-2">${plan.price}</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <Check className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out ${
                    plan.popular
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}