import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function Conclusion() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-earth-900 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Decorative nature backdrop */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-earth-900 to-brand-green-900 opacity-80" />
      
      <div className="relative z-10 max-w-3xl">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl mb-12">
            <h2 className="text-3xl md:text-5xl font-serif italic text-white mb-8 leading-tight">
              "River restoration requires accountability, governance, and innovation."
            </h2>
            <div className="h-px bg-white/20 w-24 mx-auto mb-8" />
            <p className="text-lg md:text-xl text-brand-earth-100 font-light leading-relaxed">
              Progress has been made, but monumental challenges remain. Protecting the Ganga is not just an environmental imperative, but a matter of national survival.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <button
               onClick={() => navigate('/')}
               className="bg-white text-brand-earth-900 px-6 py-3 rounded-full font-bold text-sm tracking-wide lowercase hover:bg-slate-100 transition-colors flex items-center gap-2 shadow-lg"
            >
              <Home className="w-4 h-4" /> Start Over
            </button>
            <div className="text-white/50 text-sm mt-8 border-t border-white/10 pt-4 px-12 inline-block">
              Built by <strong className="text-white">HydraByte</strong>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
