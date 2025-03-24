
import React from 'react';
import { Layout } from '@/components/Layout';
import { StatusCard } from '@/components/StatusCard';
import { ScanDetails } from '@/components/ScanDetails';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Globe, Clock, FileCode, AlertCircle, Check, X, AlertTriangle } from 'lucide-react';

const WebsiteScanResult: React.FC = () => {
  // Mock data for demonstration - assuming a legitimate website
  const statusData = {
    harmless: 65,
    suspicious: 0,
    malicious: 0,
    undetected: 30,
    timeout: 5,
  };
  
  const scanDetails = [
    { label: 'URL', value: 'flipkart.com', icon: <Globe size={18} />, risk: 'safe' as const },
    { label: 'Scan Time', value: '3/24/2023, 4:15:22 PM', icon: <Clock size={18} /> },
    { label: 'Detection Engine', value: 'PhishDetect (Multi-Engine)', icon: <Shield size={18} /> },
    { label: 'Status', value: 'Completed', icon: <AlertCircle size={18} /> },
  ];
  
  const verifiedElements = [
    { element: 'Domain age', status: 'verified', details: 'Registered > 5 years ago' },
    { element: 'SSL Certificate', status: 'verified', details: 'Valid, issued by trusted CA' },
    { element: 'Website Content', status: 'verified', details: 'Matches official branding' },
    { element: 'Payment Processing', status: 'verified', details: 'Secure checkout detected' },
  ];
  
  // Legitimacy score (out of 100)
  const legitimacyScore = 98;
  
  // Phishing risk level
  const phishingRisk = 'Low';
  
  return (
    <Layout showBackButton>
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        <div className="text-center space-y-4 animate-fade-in">
          <div className="p-4 rounded-full bg-teal-500/10 w-16 h-16 flex items-center justify-center mx-auto">
            <Shield size={28} className="text-teal-500" />
          </div>
          <h1 className="text-3xl font-bold">Legitimate Website Detected</h1>
          <p className="text-white/60 max-w-xl mx-auto">
            This website appears to be legitimate with a 98% legitimacy score. No phishing indicators detected.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <StatusCard type="harmless" count={statusData.harmless} delay={100} />
          <StatusCard type="suspicious" count={statusData.suspicious} delay={200} />
          <StatusCard type="malicious" count={statusData.malicious} delay={300} />
          <StatusCard type="undetected" count={statusData.undetected} delay={400} />
          <StatusCard type="timeout" count={statusData.timeout} delay={500} />
        </div>
        
        <Tabs defaultValue="overview" className="animate-fade-in">
          <TabsList className="glass-card p-1">
            <TabsTrigger value="overview" className="tab-button">Overview</TabsTrigger>
            <TabsTrigger value="analysis" className="tab-button">Analysis Details</TabsTrigger>
            <TabsTrigger value="recommendations" className="tab-button">Recommendations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6 space-y-6">
            <ScanDetails 
              title="Scan Details" 
              items={scanDetails}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card overflow-hidden">
                <div className="px-6 py-4 border-b border-white/5">
                  <h3 className="font-medium">Legitimacy Score</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="relative w-40 h-40 flex items-center justify-center mb-4">
                      <svg viewBox="0 0 36 36" className="w-full h-full">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.1)"
                          strokeWidth="3"
                          strokeDasharray="100, 100"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="3"
                          strokeDasharray={`${legitimacyScore}, 100`}
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-3xl font-bold">{legitimacyScore}%</span>
                        <span className="text-xs text-white/60">Legitimacy</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-teal-500/10 text-teal-500 text-sm">
                      <Check size={16} />
                      <span>Verified Legitimate</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card overflow-hidden">
                <div className="px-6 py-4 border-b border-white/5">
                  <h3 className="font-medium">Phishing Risk Assessment</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Phishing Risk Level:</span>
                      <div className="flex items-center gap-2 p-1.5 px-3 rounded-lg bg-teal-500/10 text-teal-500 text-sm">
                        <Shield size={14} />
                        <span>{phishingRisk}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <span className="text-sm text-white/70">Verified Elements:</span>
                      <div className="space-y-2 mt-2">
                        {verifiedElements.map((element, index) => (
                          <div 
                            key={index}
                            className="flex items-center justify-between p-3 rounded-lg bg-white/5"
                          >
                            <div className="flex items-center gap-2">
                              <div className="p-1 rounded-full bg-teal-500/10 text-teal-500">
                                <Check size={14} />
                              </div>
                              <span className="text-sm">{element.element}</span>
                            </div>
                            <span className="text-xs text-white/60">{element.details}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5">
                <h3 className="font-medium">Detection Insight</h3>
              </div>
              <div className="p-6">
                <p className="text-white/70 leading-relaxed">
                  This website was analyzed using multiple detection engines and machine learning algorithms. 
                  The analysis confirms that this is the legitimate Flipkart website with proper security measures in place.
                  No phishing indicators, suspicious redirects, or malicious scripts were detected.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="analysis" className="mt-6">
            <div className="glass-card p-6 space-y-6">
              <p className="text-white/70 leading-relaxed">
                Our comprehensive analysis evaluated multiple aspects of the website to determine its legitimacy:
              </p>
              
              <div className="space-y-4 mt-2">
                <div className="p-4 rounded-lg border border-white/5 bg-white/2">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <div className="p-1 rounded-full bg-teal-500/10 text-teal-500">
                      <Check size={14} />
                    </div>
                    Domain Analysis
                  </h4>
                  <p className="text-sm text-white/60">
                    The domain "flipkart.com" was registered more than 5 years ago, which is a strong indicator of legitimacy.
                    The domain registration information matches the expected business details.
                  </p>
                </div>
                
                <div className="p-4 rounded-lg border border-white/5 bg-white/2">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <div className="p-1 rounded-full bg-teal-500/10 text-teal-500">
                      <Check size={14} />
                    </div>
                    SSL Certificate Verification
                  </h4>
                  <p className="text-sm text-white/60">
                    The website uses a valid SSL certificate issued by a trusted Certificate Authority.
                    The certificate is properly configured and not expired.
                  </p>
                </div>
                
                <div className="p-4 rounded-lg border border-white/5 bg-white/2">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <div className="p-1 rounded-full bg-teal-500/10 text-teal-500">
                      <Check size={14} />
                    </div>
                    Content Analysis
                  </h4>
                  <p className="text-sm text-white/60">
                    Our image recognition algorithms confirmed that the website's content, including logos and branding,
                    match the official Flipkart brand assets. No inconsistencies or manipulated content was detected.
                  </p>
                </div>
                
                <div className="p-4 rounded-lg border border-white/5 bg-white/2">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <div className="p-1 rounded-full bg-teal-500/10 text-teal-500">
                      <Check size={14} />
                    </div>
                    Security Analysis
                  </h4>
                  <p className="text-sm text-white/60">
                    No malicious scripts, suspicious redirects, or phishing patterns were detected.
                    The website implements proper security headers and follows security best practices.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="recommendations" className="mt-6">
            <div className="glass-card p-6">
              <p className="text-white/70 leading-relaxed">
                The website appears to be legitimate. Here are some general security recommendations when browsing online:
              </p>
              <ul className="mt-4 space-y-3 text-white/70">
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-teal-500/10 text-teal-500 mt-0.5">
                    <Shield size={14} />
                  </div>
                  <span>Always verify the URL in your browser's address bar before entering sensitive information.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-teal-500/10 text-teal-500 mt-0.5">
                    <Shield size={14} />
                  </div>
                  <span>Look for the padlock icon in your browser to ensure the connection is secure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-teal-500/10 text-teal-500 mt-0.5">
                    <Shield size={14} />
                  </div>
                  <span>Be cautious of unexpected requests for personal or financial information.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-teal-500/10 text-teal-500 mt-0.5">
                    <Shield size={14} />
                  </div>
                  <span>Use two-factor authentication whenever possible for additional security.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-teal-500/10 text-teal-500 mt-0.5">
                    <Shield size={14} />
                  </div>
                  <span>Keep your browser and security software up to date to protect against vulnerabilities.</span>
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default WebsiteScanResult;
