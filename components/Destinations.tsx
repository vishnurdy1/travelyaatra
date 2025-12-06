import React from 'react';
import { DESTINATIONS } from '../constants';
import { Star, ArrowRight } from 'lucide-react';

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Popular Destinations</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Curated cities and landscapes loved by travelers this season. Find your perfect getaway.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <div 
                key={dest.id} 
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.city} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {dest.tags.map(tag => (
                    <span key={tag} className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded-md text-gray-800 dark:text-gray-200 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{dest.city}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{dest.country}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-gray-50 dark:bg-gray-700 px-2 py-1 rounded-lg">
                    <Star className="w-3 h-3 text-yellow-500" fill="currentColor" />
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-200">{dest.rating}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                   <div>
                       <span className="text-xs text-gray-400 block">Starting from</span>
                       <span className="text-lg font-bold text-teal-600 dark:text-teal-400">{dest.price}</span>
                   </div>
                   <button className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-300 group-hover:bg-teal-450 dark:group-hover:bg-teal-500 group-hover:text-white dark:group-hover:text-white transition-colors">
                        <ArrowRight className="w-4 h-4" />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-900/50 hover:bg-teal-200 dark:hover:bg-teal-900 transition-colors">
                View All Destinations
            </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;