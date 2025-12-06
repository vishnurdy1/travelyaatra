import React from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
         {/* Decorative Circles */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
         
         <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get handpicked travel inspiration</h2>
            <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
                Join our newsletter for weekly destination ideas, exclusive deals, and expert tips delivered straight to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                />
                <button 
                    type="submit" 
                    className="bg-coral-450 hover:bg-coral-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                >
                    <span>Subscribe</span>
                    <Send size={18} />
                </button>
            </form>
            <p className="text-xs text-teal-200 mt-4">No spam, unsubscribe anytime.</p>
         </div>
      </div>
    </section>
  );
};

export default Newsletter;