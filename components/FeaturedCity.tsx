import React from 'react';
import { Check } from 'lucide-react';

const FeaturedCity: React.FC = () => {
  return (
    <section id="featured" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Image Collage */}
          <div className="flex-1 w-full relative">
            <div className="grid grid-cols-2 gap-4">
               <img src="https://picsum.photos/id/1018/400/500" alt="Kyoto Street" className="rounded-2xl shadow-lg w-full h-64 lg:h-80 object-cover transform translate-y-8" />
               <img src="https://picsum.photos/id/1020/400/500" alt="Kyoto Nature" className="rounded-2xl shadow-lg w-full h-64 lg:h-80 object-cover" />
            </div>
            {/* Decorative Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-teal-450 rounded-full -z-10 blur-3xl opacity-30 dark:opacity-20"></div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
             <span className="text-teal-600 dark:text-teal-400 font-bold tracking-wider text-sm uppercase mb-2 block">Featured Journey</span>
             <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Kyoto, Japan</h2>
             <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                Step into a world where ancient tradition meets modern elegance. Kyoto offers a serene escape with its thousands of classical Buddhist temples, gardens, imperial palaces, Shinto shrines, and traditional wooden houses.
             </p>
             <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                Whether you are chasing the cherry blossoms in spring or the vibrant red maples in autumn, Kyoto's beauty is timeless.
             </p>

             <ul className="space-y-4 mb-8">
                {[
                    "Best for: Solo travelers, History buffs, Food lovers",
                    "Must do: Fushimi Inari Shrine hike at sunrise",
                    "Season: Spring (Sakura) or Autumn"
                ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-200">
                        <div className="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 flex items-center justify-center mr-3">
                            <Check size={12} strokeWidth={4} />
                        </div>
                        {item}
                    </li>
                ))}
             </ul>

             <button className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl">
                 View Full Guide
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedCity;