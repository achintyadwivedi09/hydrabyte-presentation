import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Users, Map, Droplets } from 'lucide-react';
import { STATS } from '../data/staticData';

export default function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden bg-brand-blue-900 flex flex-col items-center justify-center text-white">
      {/* Background gradient animation mimicking river flow */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-blue-900 via-brand-blue-500 to-brand-green-600 opacity-60">
        <motion.div 
          animate={{ x: ["-5%", "5%"], y: ["-5%", "5%"] }} 
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 10, ease: "linear" }}
          className="w-[120%] h-[120%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 absolute top-[-10%] left-[-10%]"
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg"
        >
          Ganga River: <br/><span className="text-brand-blue-200">Lifeline Under Threat</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-12 text-blue-100 font-light"
        >
          An interactive case study on industrial pollution & restoration
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          <StatChip icon={<Map className="w-5 h-5"/>} value={`${STATS.riverLength} km`} label="Length" />
          <StatChip icon={<Users className="w-5 h-5"/>} value={STATS.peopleServed} label="People Served" />
          <StatChip icon={<Activity className="w-5 h-5"/>} value={`${STATS.populationPercent}%`} label="India's Population" />
          <StatChip icon={<Droplets className="w-5 h-5"/>} value={`${STATS.landmassPercent}%`} label="Landmass" />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/dashboard')}
          className="bg-white text-brand-blue-900 px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all"
        >
          Enter Dashboard <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}

function StatChip({ icon, value, label }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex flex-col items-center border border-white/20 transition-all hover:bg-white/20">
      <div className="mb-2 text-brand-blue-200">{icon}</div>
      <div className="text-xl font-bold mb-1">{value}</div>
      <div className="text-xs uppercase tracking-wider opacity-80">{label}</div>
    </div>
  );
}
