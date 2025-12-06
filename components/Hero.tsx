import React from 'react';
import { Search, MapPin, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Background with Gradient/Image */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-blue-50/30 to-rose-50/50 dark:from-teal-900/20 dark:via-blue-900/20 dark:to-rose-900/20 z-10" />
         <img 
            src="https://picsum.photos/id/1015/1920/1080" 
            alt="Travel Background" 
            className="w-full h-full object-cover opacity-20 dark:opacity-10 mix-blend-overlay dark:mix-blend-luminosity"
         />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 text-xs font-bold tracking-wider mb-6 border border-teal-200 dark:border-teal-800">
              DISCOVER THE WORLD
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
              Find your next <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-450 to-blue-500 dark:from-teal-400 dark:to-blue-400">
                unforgettable journey.
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Explore curated destinations, hidden gems, and premium experiences designed for the modern traveler.
            </p>

            {/* Search Bar */}
            <div className="bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-lg mx-auto lg:mx-0 flex flex-col sm:flex-row gap-2 transition-colors duration-300">
              <div className="flex-1 relative flex items-center px-4 py-2 sm:py-0 border-b sm:border-b-0 sm:border-r border-gray-100 dark:border-gray-700">
                <MapPin className="text-gray-400 dark:text-gray-500 w-5 h-5 mr-3" />
                <input 
                  type="text" 
                  placeholder="Where to?" 
                  className="w-full bg-transparent focus:outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>
              <div className="relative flex items-center px-4 py-2 sm:py-0">
                 <select className="w-full bg-transparent focus:outline-none text-gray-700 dark:text-gray-200 cursor-pointer appearance-none pr-8 bg-none">
                    <option className="dark:bg-gray-800">Any Region</option>
                    <option className="dark:bg-gray-800">Asia</option>
                    <option className="dark:bg-gray-800">Europe</option>
                    <option className="dark:bg-gray-800">America</option>
                    <option className="dark:bg-gray-800">Oceania</option>
                 </select>
                 <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                 </div>
              </div>
              <button className="bg-teal-450 hover:bg-teal-600 text-white rounded-xl px-8 py-3 font-semibold transition-colors flex items-center justify-center gap-2">
                <Search className="w-4 h-4" />
                <span>Explore</span>
              </button>
            </div>
          </div>

          {/* Right Content - Mock Card */}
          <div className="flex-1 w-full max-w-md lg:max-w-full flex justify-center lg:justify-end perspective-1000">
            <div className="relative group w-80 sm:w-96">
                {/* Decorative Elements */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-coral-450 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:opacity-40"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-teal-450 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:opacity-40"></div>

                {/* Card */}
                <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/40 dark:border-gray-700/50 transform transition-transform duration-500 hover:rotate-2">
                    <div className="h-64 overflow-hidden">
                        <img 
                            src="https://picsum.photos/id/1047/600/800" 
                            alt="Destination Preview" 
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur text-gray-900 dark:text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-500" fill="currentColor" />
                            4.9
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Reykjavik</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Iceland</p>
                            </div>
                            <span className="text-teal-600 dark:text-teal-400 font-bold">$950</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                            Discover the land of fire and ice. Experience the northern lights and geothermal spas.
                        </p>
                        <div className="flex gap-2">
                            <span className="text-[10px] bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-md font-medium">Nature</span>
                            <span className="text-[10px] bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-300 px-2 py-1 rounded-md font-medium">Adventure</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;