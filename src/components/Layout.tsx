
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, AlertTriangle, ArrowLeft } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, showBackButton = false }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-6">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            {showBackButton && (
              <Link 
                to="/"
                className="mr-2 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft size={18} className="text-white/80" />
              </Link>
            )}
            <Link to="/" className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-gradient-to-br from-teal-500 to-teal-600">
                <Shield size={20} className="text-white" />
              </div>
              <span className="font-semibold text-lg">CodeSentry</span>
            </Link>
          </div>
          
          {isHomePage && (
            <div className="flex items-center gap-4">
              <Link to="#git-scanner" className="text-sm text-white/70 hover:text-white transition-colors">
                GitHub Scanner
              </Link>
              <Link to="#website-scanner" className="text-sm text-white/70 hover:text-white transition-colors">
                Website Detector
              </Link>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-1.5 flex items-center gap-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <AlertTriangle size={14} className="text-amber-400" />
                <span className="text-xs font-medium">Report Issue</span>
              </a>
            </div>
          )}
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} CodeSentry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
