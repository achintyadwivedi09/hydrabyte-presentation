import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WelcomeScreen from './pages/WelcomeScreen';
import MainDashboard from './pages/MainDashboard';
import PollutionDetail from './pages/PollutionDetail';
import Conclusion from './pages/Conclusion';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans bg-slate-50 text-slate-900">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/dashboard" element={<MainDashboard />} />
          <Route path="/detail" element={<PollutionDetail />} />
          <Route path="/conclusion" element={<Conclusion />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
