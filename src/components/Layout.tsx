
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
    <div className="min-h-screen flex flex-col bg-[#0d0f17]">
      <header className="py-4 px-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            {showBackButton && (
              <Link 
                to="/"
                className="mr-2 p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft size={18} className="text-gray-400" />
              </Link>
            )}
            <Link to="/" className="flex items-center gap-2">
              <div className="p-1.5 rounded-full bg-teal-500">
                <Shield size={16} className="text-[#0d0f17]" />
              </div>
              <span className="font-medium text-white">CodeSentry</span>
            </Link>
          </div>
          
          {isHomePage && (
            <div className="flex items-center gap-4">
              <Link to="#git-scanner" className="text-sm text-gray-400 hover:text-white transition-colors">
                GitHub Scanner
              </Link>
              <Link to="#website-scanner" className="text-sm text-gray-400 hover:text-white transition-colors">
                Website Detector
              </Link>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1 flex items-center gap-1.5 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <AlertTriangle size={12} className="text-yellow-500" />
                <span className="text-xs font-medium text-white">Report Issue</span>
              </a>
            </div>
          )}
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="py-6 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} CodeSentry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
