import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Droplets, Factory, AlertTriangle, ChevronDown, ChevronRight, CheckCircle2, XCircle } from 'lucide-react';
import { METRICS, INDUSTRIES, TIMELINE } from '../data/staticData';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { Card } from '../components/ui/Card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, Cell } from 'recharts';
import { EffluentVol, DolphinPopulation, STPCapacity } from '../data/staticData';
import clsx from 'clsx';

export default function MainDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 px-6 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tight text-brand-blue-900 flex items-center gap-2">
          <Droplets className="w-6 h-6 text-brand-blue-500" />
          Ganga Dashboard
        </div>
        <button 
          onClick={() => navigate('/detail')}
          className="bg-brand-alert-500 hover:bg-brand-alert-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-2"
        >
          View Polluted Reality <Activity className="w-4 h-4" />
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        
        {/* Section 2: Metrics Cards */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">The Scale of the Issue</h2>
            <p className="text-slate-500">Understanding the core metrics of industrial impact.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard 
              icon={<Factory className="text-orange-500 w-8 h-8"/>}
              title="Industrial Discharge"
              value={METRICS.industrialDischarge}
              decimals={2}
              suffix=" MLD"
              colorClass="bg-orange-50 text-orange-600"
            />
            <MetricCard 
              icon={<AlertTriangle className="text-red-500 w-8 h-8"/>}
              title="Polluting Industries"
              value={METRICS.pollutingIndustries}
              colorClass="bg-red-50 text-red-600"
            />
            <MetricCard 
              icon={<Activity className="text-brand-alert-500 w-8 h-8"/>}
              title="BOD Load"
              value={METRICS.bodLoad}
              decimals={2}
              suffix=" TPD"
              colorClass="bg-brand-alert-50 text-brand-alert-600"
            />
            <MetricCard 
              icon={<Droplets className="text-brand-blue-500 w-8 h-8"/>}
              title="Sewage Generated"
              value={METRICS.sewageGenerated}
              suffix=" MLD"
              colorClass="bg-brand-blue-50 text-brand-blue-600"
            />
          </div>
        </section>

        {/* Charts Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="col-span-1 lg:col-span-2 shadow-sm border-slate-200">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">Effluent Volume: Ganga vs Yamuna</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={EffluentVol} margin={{ left: -20, right: 10 }}>
                  <XAxis dataKey="river" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="volume" radius={[6, 6, 0, 0]}>
                    {EffluentVol.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <div className="col-span-1 flex flex-col gap-6">
            <Card className="flex-1">
              <h3 className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Dolphin Population</h3>
              <div className="h-32 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={DolphinPopulation} margin={{ top: 5, bottom: 5, left: -20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.5} />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                    <YAxis domain={['dataMin - 100', 'dataMax + 100']} axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Line type="monotone" dataKey="population" stroke="#16a34a" strokeWidth={3} dot={{ r: 4, fill: '#16a34a' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>2018: <b>3330</b></span>
                <span className="text-brand-green-600 font-bold">2024: 3936 ↗</span>
              </div>
            </Card>
            
            <Card className="flex-1">
              <h3 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">STP Capacity (MLD)</h3>
              <div className="space-y-4">
                {STPCapacity.map(item => (
                  <div key={item.year}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.year}</span>
                      <span className="font-bold">{item.capacity.toLocaleString()}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-brand-blue-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(item.capacity / 4000) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Section 3: Importance */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-amber-50/50 border-amber-100">
              <h3 className="font-bold text-lg mb-2 text-amber-900">Cultural Importance</h3>
              <p className="text-amber-800/80 text-sm">Sacred to millions, hosting the Kumbh Mela and deeply intertwined with India's spiritual heritage.</p>
            </Card>
            <Card className="bg-brand-blue-50/50 border-brand-blue-100">
              <h3 className="font-bold text-lg mb-2 text-brand-blue-900">Economic Role</h3>
              <p className="text-brand-blue-800/80 text-sm">Vital water source for agriculture, industry, and daily sustenance for 47% of India's population.</p>
            </Card>
            <Card className="bg-brand-green-50/50 border-brand-green-100">
              <h3 className="font-bold text-lg mb-2 text-brand-green-900">Environmental Function</h3>
              <p className="text-brand-green-800/80 text-sm">A vast ecosystem supporting rich biodiversity, including the endangered Gangetic Dolphin.</p>
            </Card>
          </div>
        </section>

        {/* Section 4: Pollution Sources */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Key Industrial Polluters</h2>
            <p className="text-slate-500">The primary sources contributing to the toxic load.</p>
          </div>
          <div className="space-y-4">
            {INDUSTRIES.map((industry, idx) => (
              <ExpandableCard key={industry.id} industry={industry} index={idx} />
            ))}
          </div>
        </section>

        {/* Section 5: Timeline */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Policy Timeline</h2>
            <p className="text-slate-500">Decades of intervention attempts.</p>
          </div>
          <div className="w-full overflow-x-auto pb-6 scrollbar-hide">
            <div className="flex gap-4 min-w-max px-2">
              {TIMELINE.map((item, idx) => (
                <Card key={idx} className="w-64 flex-shrink-0 relative overflow-visible hover:border-brand-blue-300 transition-colors">
                  <div className="absolute -top-3 left-6 bg-brand-blue-100 text-brand-blue-900 text-xs font-bold px-3 py-1 rounded-full border border-brand-blue-200">
                    {item.year}
                  </div>
                  <h4 className="font-bold text-slate-800 mt-2 mb-2">{item.event}</h4>
                  <p className="text-sm text-slate-600 border-t border-slate-100 pt-3">{item.outcome}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Success vs Challenges */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-brand-green-50 to-emerald-50/20 border-brand-green-100">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-green-200/50">
              <CheckCircle2 className="text-brand-green-600 w-8 h-8" />
              <h3 className="text-xl font-bold text-brand-green-900">What's Working</h3>
            </div>
            <ul className="space-y-4 text-brand-green-900/80">
              <li className="flex items-start gap-3"><span className="text-brand-green-500 font-bold">✓</span> 30x STP capacity increase since 2014</li>
              <li className="flex items-start gap-3"><span className="text-brand-green-500 font-bold">✓</span> 3,936 dolphins in 2024 (Upward trend)</li>
              <li className="flex items-start gap-3"><span className="text-brand-green-500 font-bold">✓</span> 68.8% BOD improvement in UP state</li>
            </ul>
          </Card>
          <Card className="bg-gradient-to-br from-brand-alert-50 to-rose-50/20 border-brand-alert-200">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-alert-200/50">
              <XCircle className="text-brand-alert-600 w-8 h-8" />
              <h3 className="text-xl font-bold text-brand-alert-900">Challenges Remaining</h3>
            </div>
            <ul className="space-y-4 text-brand-alert-900/80">
              <li className="flex items-start gap-3"><span className="text-brand-alert-500 font-bold">✕</span> 450+ non-compliant industries</li>
              <li className="flex items-start gap-3"><span className="text-brand-alert-500 font-bold">✕</span> Major gaps in STP utilisation capabilities</li>
              <li className="flex items-start gap-3"><span className="text-brand-alert-500 font-bold">✕</span> Underutilised funds at state level</li>
              <li className="flex items-start gap-3"><span className="text-brand-alert-500 font-bold">✕</span> Emerging pollutants largely unaddressed</li>
            </ul>
          </Card>
        </section>
        
        {/* Navigation to conclusion at bottom */}
        <div className="text-center pt-12">
          <button 
            onClick={() => navigate('/conclusion')}
            className="text-brand-blue-500 font-semibold hover:text-brand-blue-700 transition flex items-center gap-1 mx-auto"
          >
            Read Conclusion <ChevronRight className="w-4 h-4"/>
          </button>
        </div>

      </main>
    </div>
  );
}

function MetricCard({ icon, title, value, decimals = 0, suffix = "", colorClass }) {
  return (
    <Card className="flex flex-col border-transparent hover:border-slate-200 transition-all group">
      <div className={clsx("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner", colorClass)}>
        {icon}
      </div>
      <div className="text-sm font-medium text-slate-500 mb-1">{title}</div>
      <div className="text-3xl font-bold text-slate-800 tracking-tight">
        <AnimatedCounter value={value} decimals={decimals} suffix={suffix} />
      </div>
    </Card>
  );
}

function ExpandableCard({ industry, index }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white border text-left border-slate-200 rounded-xl overflow-hidden hover:border-brand-blue-200 transition-colors cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-5 flex items-center justify-between">
        <div className="font-semibold text-lg text-slate-800">{industry.name}</div>
        <div className={clsx("transform transition-transform", isOpen ? "rotate-180" : "")}>
          <ChevronDown className="text-slate-400 w-5 h-5"/>
        </div>
      </div>
      {/* Expanded Content */}
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="px-5 bg-slate-50/50 overflow-hidden text-sm"
      >
        <div className="pb-5 pt-1 space-y-3 border-t border-slate-100 flex gap-12">
          <div>
            <span className="block text-slate-500 text-xs uppercase tracking-wider mb-1">Key Pollutant(s)</span>
            <span className="font-medium text-brand-alert-600">{industry.pollutant}</span>
          </div>
          <div>
             <span className="block text-slate-500 text-xs uppercase tracking-wider mb-1">Affected Locations</span>
             <span className="font-medium text-slate-700">{industry.location}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
