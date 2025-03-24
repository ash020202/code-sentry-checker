
import React from 'react';
import { Layout } from '@/components/Layout';
import { StatusCard } from '@/components/StatusCard';
import { ScanDetails } from '@/components/ScanDetails';
import { ProgressBar } from '@/components/ProgressBar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, GitBranch, Clock, FileCode, AlertCircle } from 'lucide-react';

const GitScanResult: React.FC = () => {
  // Mock data for demonstration
  const statusData = {
    harmless: 71,
    suspicious: 0,
    malicious: 0,
    undetected: 25,
    timeout: 0,
  };
  
  const scanDetails = [
    { label: 'Item Type', value: 'Git Repository', icon: <GitBranch size={18} />, risk: 'safe' as const },
    { label: 'Repository URL', value: 'https://github.com/user/repo.git', icon: <FileCode size={18} /> },
    { label: 'Scan Time', value: '3/24/2023, 4:06:36 PM', icon: <Clock size={18} /> },
    { label: 'Detection Engine', value: 'VirusTotal (Multi-Engine)', icon: <Shield size={18} /> },
    { label: 'Status', value: 'Completed', icon: <AlertCircle size={18} /> },
  ];
  
  const fileStatuses = [
    { name: 'package.json', status: 'safe' },
    { name: 'src/index.js', status: 'safe' },
    { name: 'src/components/App.js', status: 'safe' },
    { name: 'src/utils/api.js', status: 'safe' },
    { name: 'src/styles/main.css', status: 'safe' },
  ];
  
  return (
    <Layout showBackButton>
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        <div className="text-center space-y-4 animate-fade-in">
          <div className="p-4 rounded-full bg-teal-500/10 w-16 h-16 flex items-center justify-center mx-auto">
            <Shield size={28} className="text-teal-500" />
          </div>
          <h1 className="text-3xl font-bold">No Threats Detected</h1>
          <p className="text-white/60 max-w-xl mx-auto">
            This git repository appears to be safe. 71 security vendors confirmed it's harmless.
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
            <TabsTrigger value="scanner-details" className="tab-button">Scanner Details</TabsTrigger>
            <TabsTrigger value="recommendations" className="tab-button">Recommendations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6 space-y-6">
            <ScanDetails 
              title="Scan Details" 
              items={scanDetails}
            />
            
            <div className="glass-card overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5">
                <h3 className="font-medium">Detection Summary</h3>
              </div>
              <div className="p-6 space-y-6">
                <ProgressBar
                  label="Harmless"
                  value={statusData.harmless}
                  max={96}
                  color="bg-teal-500"
                />
                <ProgressBar
                  label="Suspicious"
                  value={statusData.suspicious}
                  max={96}
                  color="bg-amber-500"
                />
                <ProgressBar
                  label="Malicious"
                  value={statusData.malicious}
                  max={96}
                  color="bg-red-500"
                />
                <ProgressBar
                  label="Undetected"
                  value={statusData.undetected}
                  max={96}
                  color="bg-blue-500"
                />
              </div>
            </div>
            
            <div className="glass-card overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5">
                <h3 className="font-medium">Detection Insight</h3>
              </div>
              <div className="p-6">
                <p className="text-white/70 leading-relaxed">
                  This git repository was analyzed by 96 security engines and found to be safe. 
                  71 engines specifically confirmed it as harmless, while 25 were unable to make a determination.
                </p>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-white/60">
                    <FileCode size={18} />
                    <span className="text-sm">Scanned Files</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    {fileStatuses.map((file, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between py-2 px-4 rounded-lg bg-white/5"
                      >
                        <span className="text-sm">{file.name}</span>
                        <span className="px-2 py-0.5 rounded text-xs flex items-center gap-1 bg-teal-500/10 text-teal-500">
                          <Shield size={12} />
                          Safe
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="scanner-details" className="mt-6">
            <div className="glass-card p-6">
              <p className="text-white/70 leading-relaxed">
                Detailed information about the security scanners used and their analysis results would appear here. 
                This includes specific security checks, code analysis methods, and detailed scan logs.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="recommendations" className="mt-6">
            <div className="glass-card p-6">
              <p className="text-white/70 leading-relaxed">
                The repository has been found to be safe. Here are some general security recommendations:
              </p>
              <ul className="mt-4 space-y-2 text-white/70">
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-teal-500/10 text-teal-500 mt-0.5">
                    <Shield size={14} />
                  </div>
                  <span>Regularly update dependencies to patch security vulnerabilities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-teal-500/10 text-teal-500 mt-0.5">
                    <Shield size={14} />
                  </div>
                  <span>Implement security scanning as part of your CI/CD pipeline.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-teal-500/10 text-teal-500 mt-0.5">
                    <Shield size={14} />
                  </div>
                  <span>Enable branch protection rules for your repository.</span>
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default GitScanResult;
