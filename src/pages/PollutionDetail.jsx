import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertOctagon, Info, Lightbulb, ExternalLink } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { METRICS, RECOMMENDATIONS } from '../data/staticData';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function PollutionDetail() {
  const navigate = useNavigate();

  // Data for Compliance Chart
  const complianceData = [
    { name: 'Compliant', value: METRICS.pollutingIndustries - METRICS.nonCompliantIndustries, fill: '#14b8a6' },
    { name: 'Non-compliant', value: METRICS.nonCompliantIndustries, fill: '#ef4444' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 px-6">
        <button 
          onClick={() => navigate('/dashboard')}
          className="text-brand-blue-600 font-semibold hover:text-brand-blue-800 transition flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4"/> Back to Dashboard
        </button>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Polluted Reality</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">A closer look at the regulatory compliance and toxic load metrics currently threatening the ecosystem.</p>
        </div>

        {/* Highlight Callouts */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-red-50 border border-red-200 rounded-2xl p-6 flex items-start gap-4"
          >
            <div className="bg-red-100 p-2 rounded-full text-red-600 mt-1"><AlertOctagon className="w-6 h-6"/></div>
            <div>
              <h3 className="font-bold text-red-900 text-lg mb-1">BOD Load Critical</h3>
              <p className="text-red-800/80">Biological Oxygen Demand significantly exceeds the safe limit of <strong>3 mg/L</strong>, destroying aquatic life capabilities.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-orange-50 border border-orange-200 rounded-2xl p-6 flex items-start gap-4"
          >
            <div className="bg-orange-100 p-2 rounded-full text-orange-600 mt-1"><Info className="w-6 h-6"/></div>
            <div>
              <h3 className="font-bold text-orange-900 text-lg mb-1">Active Violations</h3>
              <p className="text-orange-800/80"><strong>{METRICS.nonCompliantIndustries}+</strong> industries are actively violating effluent norms without strict penal action.</p>
            </div>
          </motion.div>
        </section>

        {/* Charts Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gauge representation for BOD using half a Pie chart */}
          <Card className="flex flex-col items-center">
             <h3 className="text-lg font-semibold mb-2 self-start">Current BOD vs Safe Limit</h3>
             <p className="text-sm text-slate-500 mb-8 self-start">Measured in Total Per Day (TPD)</p>
             <div className="relative h-48 w-full max-w-xs flex justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Safe', value: METRICS.bodSafeLimit, fill: '#22c55e' },
                        { name: 'Excessive', value: METRICS.bodLoad - METRICS.bodSafeLimit, fill: '#ef4444' }
                      ]}
                      cx="50%" cy="100%"
                      startAngle={180} endAngle={0}
                      innerRadius={60} outerRadius={80}
                      stroke="none"
                      dataKey="value"
                    />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute bottom-0 text-center flex flex-col items-center translate-y-2">
                  <span className="text-4xl font-bold tracking-tight text-red-500">{METRICS.bodLoad}</span>
                  <span className="text-xs font-semibold uppercase text-slate-400">Current TPD</span>
                </div>
             </div>
          </Card>

          {/* Compliance Bar Chart */}
          <Card>
             <h3 className="text-lg font-semibold mb-2">Industry Compliance</h3>
             <p className="text-sm text-slate-500 mb-6">Total Polluting Industries: {METRICS.pollutingIndustries}</p>
             <div className="h-48 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={complianceData} layout="vertical" margin={{ left: -20 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.3} />
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 13, fill: '#64748b', fontWeight: 500 }} width={100} />
                    <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                      {complianceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
               </ResponsiveContainer>
             </div>
          </Card>
        </section>

        {/* Section: Recommendations */}
        <section className="pt-8 border-t border-slate-200">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Lightbulb className="text-amber-500 w-6 h-6" /> Recommendations
            </h2>
            <p className="text-slate-500">Key strategic interventions needed to curb industrial pollution.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {RECOMMENDATIONS.map((rec, index) => (
               <Card key={index} className="shadow-none border border-brand-blue-100 bg-brand-blue-50/30 overflow-visible p-5">
                 <div className="flex gap-4">
                    <div className="bg-brand-blue-100 text-brand-blue-600 font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-slate-700 font-medium">{rec}</p>
                 </div>
               </Card>
             ))}
          </div>
        </section>
        
        {/* Nav to Conclusion */}
        <div className="text-center pt-8 pb-12">
          <button 
            onClick={() => navigate('/conclusion')}
            className="bg-brand-blue-900 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow hover:shadow-lg transition-all"
          >
            Read Conclusion <ExternalLink className="w-4 h-4" />
          </button>
        </div>

      </main>
    </div>
  );
}
