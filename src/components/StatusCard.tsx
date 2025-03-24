
import React from 'react';
import { CheckCircle, AlertTriangle, XCircle, HelpCircle, Clock } from 'lucide-react';

interface StatusCardProps {
  type: 'harmless' | 'suspicious' | 'malicious' | 'undetected' | 'timeout';
  count: number;
  delay?: number;
}

export const StatusCard: React.FC<StatusCardProps> = ({ type, count, delay = 0 }) => {
  let icon, label, bgClass, textClass;
  
  switch (type) {
    case 'harmless':
      icon = <CheckCircle size={22} />;
      label = 'Harmless';
      bgClass = 'bg-teal-500/10';
      textClass = 'text-teal-500';
      break;
    case 'suspicious':
      icon = <AlertTriangle size={22} />;
      label = 'Suspicious';
      bgClass = 'bg-amber-500/10';
      textClass = 'text-amber-500';
      break;
    case 'malicious':
      icon = <XCircle size={22} />;
      label = 'Malicious';
      bgClass = 'bg-red-500/10';
      textClass = 'text-red-500';
      break;
    case 'undetected':
      icon = <HelpCircle size={22} />;
      label = 'Undetected';
      bgClass = 'bg-blue-500/10';
      textClass = 'text-blue-500';
      break;
    case 'timeout':
      icon = <Clock size={22} />;
      label = 'Timeout';
      bgClass = 'bg-gray-500/10';
      textClass = 'text-gray-500';
      break;
  }
  
  return (
    <div 
      className="glass-card p-4 flex flex-col items-center justify-center gap-1 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`p-2 rounded-full ${bgClass} ${textClass} mb-1`}>
        {icon}
      </div>
      <div className="text-3xl font-semibold mt-1">{count}</div>
      <div className="text-sm text-white/60">{label}</div>
    </div>
  );
};
