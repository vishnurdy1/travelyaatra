import React from 'react';
import { TIPS } from '../constants';

const TravelTips: React.FC = () => {
  return (
    <section id="tips" className="py-20 bg-slate-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Travel Tips & Guides</h2>
                <p className="text-gray-500 dark:text-gray-400">Expert advice to make your journey smoother.</p>
            </div>
            <a href="#" className="hidden sm:block text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300">
                View all articles &rarr;
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {TIPS.map((tip) => (
               <article key={tip.id} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700 flex flex-col h-full">
                   <div className="h-48 overflow-hidden relative">
                       <img src={tip.image} alt={tip.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                   </div>
                   <div className="p-6 flex-1 flex flex-col">
                       <div className="flex gap-2 mb-3">
                           {tip.tags.map(tag => (
                               <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-sm">
                                   {tag}
                               </span>
                           ))}
                       </div>
                       <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                           {tip.title}
                       </h3>
                       <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                           {tip.description}
                       </p>
                       <a href="#" className="inline-block text-sm font-bold text-coral-450 hover:text-coral-600 dark:text-coral-400 mt-auto">
                           Read more &rarr;
                       </a>
                   </div>
               </article>
           ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
             <a href="#" className="text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300">
                View all articles &rarr;
            </a>
        </div>
      </div>
    </section>
  );
};

export default TravelTips;