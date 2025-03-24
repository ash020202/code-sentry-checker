
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Upload, X, Image, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export const WebsiteScanner: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      if (!file.type.includes('image')) {
        toast.error('Please upload an image file');
        return;
      }
      
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      
      if (!file.type.includes('image')) {
        toast.error('Please upload an image file');
        return;
      }
      
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  
  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedImage) {
      toast.error('Please upload a website screenshot');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/website-scan-results');
    }, 2000);
  };
  
  return (
    <section id="website-scanner" className="py-16 px-6 mb-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium mb-2">
            <Globe size={14} />
            <span>Website Detector</span>
          </div>
          <h2 className="text-3xl font-bold">Fake Website Detector</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Upload a screenshot of a suspicious website to analyze its legitimacy and identify potential phishing threats.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
          <div 
            className={`border-2 border-dashed rounded-xl ${
              preview ? 'border-white/10' : 'border-white/20'
            } overflow-hidden transition-all duration-200`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {preview ? (
              <div className="relative">
                <img 
                  src={preview} 
                  alt="Website preview" 
                  className="w-full h-auto max-h-[300px] object-contain"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-dark-card/80 backdrop-blur-sm text-white/70 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div 
                className="flex flex-col items-center justify-center py-12 cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="p-3 rounded-full bg-white/5 mb-4">
                  <Image size={24} className="text-white/40" />
                </div>
                <p className="text-white/70 mb-1">Drag and drop your website screenshot here</p>
                <p className="text-sm text-white/40">or click to browse files</p>
              </div>
            )}
            <input 
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          
          <button 
            type="submit" 
            className="btn-primary w-full group"
            disabled={isLoading || !selectedImage}
          >
            {isLoading ? (
              <span className="inline-flex items-center gap-2">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing Screenshot...
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <Upload size={18} />
                Analyze Website
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
