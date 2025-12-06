import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What travelers say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {TESTIMONIALS.map((t) => (
               <div key={t.id} className="bg-slate-50 dark:bg-gray-800 p-8 rounded-2xl relative">
                   <Quote className="absolute top-6 left-6 text-teal-100 dark:text-teal-900 w-12 h-12 -z-0" fill="currentColor" />
                   <div className="relative z-10">
                       <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">"{t.quote}"</p>
                       <div className="flex items-center gap-4">
                           <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-gray-700" />
                           <div>
                               <h4 className="font-bold text-gray-900 dark:text-white text-sm">{t.name}</h4>
                               <p className="text-xs text-gray-500 dark:text-gray-400">{t.location}</p>
                           </div>
                       </div>
                   </div>
               </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;