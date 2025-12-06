import React, { useState, useEffect } from 'react';
import { Menu, X, Plane, Moon, Sun } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-teal-450 p-1.5 rounded-lg text-white shadow-lg">
              <Plane size={20} fill="currentColor" />
            </div>
            <div>
              <h1 className={`text-xl font-bold tracking-tight ${scrolled ? 'text-gray-900 dark:text-white' : 'text-gray-900 md:text-gray-800 dark:text-white'}`}>
                Travel Yaatra
              </h1>
              <p className={`text-[10px] uppercase tracking-wider font-semibold hidden sm:block ${scrolled ? 'text-gray-500 dark:text-gray-400' : 'text-gray-600 dark:text-gray-300'}`}>Smart Travel Guide</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-teal-450 dark:hover:text-teal-400 ${scrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-700 dark:text-gray-200'}`}
              >
                {link.label}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full transition-colors ${scrolled ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300' : 'hover:bg-white/20 text-gray-700 dark:text-white'}`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className="bg-teal-450 hover:bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-transparent">
              Plan Trip
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className={`text-gray-700 dark:text-white hover:text-teal-450 focus:outline-none`}
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 dark:text-white hover:text-teal-450 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-xl transition-all duration-300 ease-in-out origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 overflow-hidden'}`}>
        <div className="px-4 py-6 space-y-4 flex flex-col items-center border-t border-gray-100 dark:border-gray-800">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-gray-700 dark:text-gray-200 text-lg font-medium hover:text-teal-450 dark:hover:text-teal-400"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="w-full max-w-xs bg-teal-450 text-white px-6 py-3 rounded-full font-semibold shadow-md">
            Plan Trip
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;