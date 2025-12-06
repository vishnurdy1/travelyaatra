import React from 'react';
import { Plane, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
           
           {/* Brand */}
           <div>
               <div className="flex items-center space-x-2 mb-6">
                   <div className="bg-teal-450 p-1.5 rounded-lg text-white">
                       <Plane size={20} fill="currentColor" />
                   </div>
                   <span className="text-xl font-bold">Travel Yaatra</span>
               </div>
               <p className="text-gray-400 text-sm leading-relaxed mb-6">
                   Travel Yaatra is your premium digital guide to exploring the world. We curate the best experiences so you can travel smarter.
               </p>
           </div>

           {/* Links */}
           <div>
               <h4 className="text-lg font-bold mb-6">Company</h4>
               <ul className="space-y-4 text-gray-400 text-sm">
                   <li><a href="#" className="hover:text-teal-450 transition-colors">About Us</a></li>
                   <li><a href="#" className="hover:text-teal-450 transition-colors">Contact</a></li>
                   <li><a href="#" className="hover:text-teal-450 transition-colors">Careers</a></li>
                   <li><a href="#" className="hover:text-teal-450 transition-colors">Privacy Policy</a></li>
               </ul>
           </div>

           {/* Explore */}
           <div>
               <h4 className="text-lg font-bold mb-6">Explore</h4>
               <ul className="space-y-4 text-gray-400 text-sm">
                   <li><a href="#destinations" className="hover:text-teal-450 transition-colors">Destinations</a></li>
                   <li><a href="#experiences" className="hover:text-teal-450 transition-colors">Experiences</a></li>
                   <li><a href="#tips" className="hover:text-teal-450 transition-colors">Travel Tips</a></li>
                   <li><a href="#" className="hover:text-teal-450 transition-colors">Community</a></li>
               </ul>
           </div>

           {/* Social */}
           <div>
               <h4 className="text-lg font-bold mb-6">Follow Us</h4>
               <div className="flex gap-4">
                   <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-450 transition-colors flex items-center justify-center text-white">
                       <Instagram size={18} />
                   </a>
                   <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-450 transition-colors flex items-center justify-center text-white">
                       <Twitter size={18} />
                   </a>
                   <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-450 transition-colors flex items-center justify-center text-white">
                       <Youtube size={18} />
                   </a>
                   <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-450 transition-colors flex items-center justify-center text-white">
                       <Facebook size={18} />
                   </a>
               </div>
           </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2025 Travel Yaatra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;