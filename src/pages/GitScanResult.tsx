
import React from 'react';
import { Layout } from '@/components/Layout';
import { StatusCard } from '@/components/StatusCard';
import { ScanDetails } from '@/components/ScanDetails';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, GitBranch, Clock, FileCode, AlertCircle, CheckCircle } from 'lucide-react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const GitScanResult: React.FC = () => {
  // Actual data based on your provided format
  const gitScanData = {
    "trust": "Trusted Owner: Ranjithdurai451",
    "results": [
      {"file": "repos/94a71eed-79e4-451c-bb88-c30f427b304b/backend/server.js", "status": "✅ Safe"},
      {"file": "repos/94a71eed-79e4-451c-bb88-c30f427b304b/frontend/postcss.config.js", "status": "✅ Safe"},
      {"file": "repos/94a71eed-79e4-451c-bb88-c30f427b304b/frontend/tailwind.config.js", "status": "✅ Safe"}
    ]
  };
  
  // Calculated counts for status cards
  const statusData = {
    harmless: gitScanData.results.filter(item => item.status === "✅ Safe").length,
    suspicious: gitScanData.results.filter(item => item.status.includes("⚠️")).length,
    malicious: gitScanData.results.filter(item => item.status.includes("❌")).length,
    undetected: 0,
    timeout: 0,
  };
  
  const scanDetails = [
    { label: 'Item Type', value: 'Git Repository', icon: <GitBranch size={18} />, risk: 'safe' as const },
    { label: 'Trust Status', value: gitScanData.trust, icon: <Shield size={18} />, risk: 'safe' as const },
    { label: 'Scan Time', value: new Date().toLocaleString(), icon: <Clock size={18} /> },
    { label: 'Status', value: 'Completed', icon: <AlertCircle size={18} /> },
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
            This git repository appears to be safe. All scanned files were found to be harmless.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <StatusCard type="harmless" count={statusData.harmless} delay={100} />
          <StatusCard type="suspicious" count={statusData.suspicious} delay={200} />
          <StatusCard type="malicious" count={statusData.malicious} delay={300} />
          <StatusCard type="undetected" count={statusData.undetected} delay={400} />
          <StatusCard type="timeout" count={statusData.timeout} delay={500} />
        </div>
        
        <Tabs defaultValue="overview" className="animate-fade-in">
          <TabsList className="glass-card p-1">
            <TabsTrigger value="overview" className="tab-button">Overview</TabsTrigger>
            <TabsTrigger value="file-results" className="tab-button">File Results</TabsTrigger>
            <TabsTrigger value="recommendations" className="tab-button">Recommendations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6 space-y-6">
            <ScanDetails 
              title="Scan Details" 
              items={scanDetails}
            />
            
            <div className="glass-card overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5">
                <h3 className="font-medium">Trust Analysis</h3>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-full bg-teal-500/10 text-teal-500">
                    <Shield size={18} />
                  </div>
                  <span className="text-lg font-medium">{gitScanData.trust}</span>
                </div>
                <p className="text-white/70 leading-relaxed">
                  This repository belongs to a trusted owner with a verified history of secure coding practices.
                  All {statusData.harmless} scanned files have been marked as safe by our security analysis.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="file-results" className="mt-6">
            <div className="glass-card overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5 flex items-center gap-2">
                <FileCode size={18} className="text-white/60" />
                <h3 className="font-medium">File Scan Results</h3>
              </div>
              <div className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead className="text-white">File Path</TableHead>
                      <TableHead className="text-white text-right w-28">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {gitScanData.results.map((file, index) => (
                      <TableRow key={index} className="border-white/10">
                        <TableCell className="text-white/80 font-mono text-sm break-all">
                          {file.file.split('/').pop()}
                          <span className="block text-xs text-white/40 mt-1">
                            {file.file.substring(0, file.file.lastIndexOf('/'))}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          {file.status === "✅ Safe" ? (
                            <div className="flex items-center justify-end gap-1.5">
                              <span className="px-2 py-1 rounded text-xs bg-teal-500/10 text-teal-500 flex items-center gap-1">
                                <CheckCircle size={12} />
                                Safe
                              </span>
                            </div>
                          ) : file.status.includes("⚠️") ? (
                            <div className="flex items-center justify-end gap-1.5">
                              <span className="px-2 py-1 rounded text-xs bg-amber-500/10 text-amber-500 flex items-center gap-1">
                                <AlertCircle size={12} />
                                Suspicious
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-end gap-1.5">
                              <span className="px-2 py-1 rounded text-xs bg-red-500/10 text-red-500 flex items-center gap-1">
                                <AlertCircle size={12} />
                                Malicious
                              </span>
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
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
