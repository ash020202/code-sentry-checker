
import React from 'react';
import { ShieldCheck, ChevronDown } from 'lucide-react';

export const HomeHero: React.FC = () => {
  const scrollToScanner = () => {
    const element = document.getElementById('git-scanner');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-teal-500/20 blur-[100px] rounded-full" />
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full" />
      </div>
      
      <div className="relative space-y-6 max-w-3xl mx-auto text-center animate-fade-in">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-white/80 text-sm font-medium mb-4">
          <ShieldCheck size={16} className="text-teal-500" />
          <span>Advanced Security Analysis</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Protect Your Digital Assets with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500">
            CodeSentry
          </span>
        </h1>
        
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          Detect malicious code, identify suspicious GitHub repositories, and verify website 
          legitimacy with our advanced security analysis tools.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="#git-scanner" className="btn-primary min-w-[180px]">
            Scan Git Repository
          </a>
          <a href="#website-scanner" className="btn-secondary min-w-[180px]">
            Check Website
          </a>
        </div>
      </div>
      
      <button
        onClick={scrollToScanner}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 p-3 rounded-full
        bg-white/5 hover:bg-white/10 transition-colors animate-pulse-slow"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} className="text-white/60" />
      </button>
    </section>
  );
};
