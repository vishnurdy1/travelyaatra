import React, { useState } from 'react';
import { EXPERIENCES, EXPERIENCE_CATEGORIES } from '../constants';
import { Experience } from '../types';

const Experiences: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter experiences based on active category
  const filteredExperiences = activeCategory === 'All' 
    ? EXPERIENCES 
    : EXPERIENCES.filter(exp => exp.category === activeCategory);

  return (
    <section id="experiences" className="py-20 bg-slate-50 dark:bg-gray-950 transition-colors duration-300 relative">
      {/* Decorative blurred blobs */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-teal-200 dark:bg-teal-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-coral-200 dark:bg-coral-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Travel by Experience</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">Choose the vibe that matches your mood.</p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {EXPERIENCE_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-teal-450 text-white shadow-lg transform scale-105 border border-transparent'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.map((exp) => (
            <div 
                key={exp.id} 
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-teal-100 dark:hover:border-teal-800 group"
            >
               <div className="w-12 h-12 rounded-lg bg-teal-50 dark:bg-teal-900/30 text-teal-500 dark:text-teal-400 flex items-center justify-center mb-4 group-hover:bg-teal-450 group-hover:text-white transition-colors duration-300">
                  {exp.icon}
               </div>
               <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
               <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
               <span className="text-xs font-semibold text-coral-450 hover:text-coral-500 uppercase tracking-wide">
                   Explore {exp.category} &rarr;
               </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;