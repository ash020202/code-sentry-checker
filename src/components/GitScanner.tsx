
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GitBranch, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export const GitScanner: React.FC = () => {
  const [gitUrl, setGitUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!gitUrl) {
      toast.error('Please enter a Git URL');
      return;
    }
    
    if (!gitUrl.includes('.git')) {
      toast.error('Please enter a valid Git repository URL');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/git-scan-results');
    }, 2000);
  };
  
  return (
    <section id="git-scanner" className="py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-500 text-xs font-medium mb-2">
            <GitBranch size={14} />
            <span>Git Scanner</span>
          </div>
          <h2 className="text-3xl font-bold">GitHub URL Malicious Code Detector</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Scan GitHub repositories for potential security threats, malicious code, and suspicious patterns.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
          <div className="space-y-2">
            <label htmlFor="git-url" className="text-sm text-white/70">
              Enter GitHub Repository URL
            </label>
            <input
              id="git-url"
              type="text"
              value={gitUrl}
              onChange={(e) => setGitUrl(e.target.value)}
              placeholder="https://github.com/username/repository.git"
              className="glass-input w-full"
            />
            <p className="text-xs text-white/40">
              Example: https://github.com/facebook/react.git
            </p>
          </div>
          
          <button 
            type="submit" 
            className="btn-primary w-full group"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="inline-flex items-center gap-2">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Scanning Repository...
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                Check Code
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
