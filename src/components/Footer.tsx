import React from 'react';
import { Dumbbell } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">FLEX GYM</span>
            </div>
            <p className="text-sm">
              Transform your body and mind with our state-of-the-art facilities and expert guidance.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#membership" className="hover:text-blue-500 transition-colors">Membership</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 24/7</li>
              <li>Saturday: 24/7</li>
              <li>Sunday: 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Flex Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}