
import React from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
  label: string;
  color?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  value, 
  max, 
  label,
  color = 'bg-teal-500'
}) => {
  const percentage = Math.round((value / max) * 100);
  
  return (
    <div className="space-y-1.5 animate-fade-in">
      <div className="flex justify-between text-sm">
        <span className="text-white/70">{label}</span>
        <span className="font-medium">
          {value} / {max}
        </span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
