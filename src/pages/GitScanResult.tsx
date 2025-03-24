
import React from 'react';
import { Layout } from '@/components/Layout';
import { StatusCard } from '@/components/StatusCard';
import { ScanDetails } from '@/components/ScanDetails';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, GitBranch, Clock, FileCode, AlertCircle, CheckCircle, Info, Globe } from 'lucide-react';
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
    suspicious: 0,
    malicious: 0,
    undetected: 25,
    timeout: 0,
  };
  
  const scanDetails = [
    { label: 'Item Type', value: 'URL', icon: <GitBranch size={18} /> },
    { label: 'Item Name', value: 'https://google.com', icon: <Shield size={18} /> },
    { label: 'Scan Time', value: '3/24/2025, 4:06:36 PM', icon: <Clock size={18} /> },
    { label: 'Status', value: 'completed', icon: <Info size={18} /> },
  ];
  
  return (
    <Layout showBackButton>
      <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="p-4 rounded-full bg-teal-500 w-16 h-16 flex items-center justify-center mx-auto">
            <CheckCircle size={28} className="text-[#0d0f17]" />
          </div>
          <h1 className="text-2xl font-bold text-white">No Threats Detected</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            This url appears to be safe. 71 security vendors confirmed it's harmless.
          </p>
        </div>
        
        <div className="grid grid-cols-5 gap-4">
          <StatusCard type="harmless" count={statusData.harmless} delay={100} />
          <StatusCard type="suspicious" count={statusData.suspicious} delay={200} />
          <StatusCard type="malicious" count={statusData.malicious} delay={300} />
          <StatusCard type="undetected" count={statusData.undetected} delay={400} />
          <StatusCard type="timeout" count={statusData.timeout} delay={500} />
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full flex space-x-4 justify-start border-b border-gray-800 rounded-none bg-transparent p-0 mb-6">
            <TabsTrigger value="overview" className="tab-button">Overview</TabsTrigger>
            <TabsTrigger value="scanner-details" className="tab-button">Scanner Details</TabsTrigger>
            <TabsTrigger value="recommendations" className="tab-button">Recommendations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-4 space-y-6">
            <div className="glass-card overflow-hidden">
              <div className="flex items-center gap-2 p-4 border-b border-gray-800">
                <FileCode size={18} className="text-gray-400" />
                <h3 className="font-medium text-white">Scan Details</h3>
              </div>
              <div className="p-4">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 flex items-center gap-2">
                        <GitBranch size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-400">Item Type</span>
                      </td>
                      <td className="py-3 text-right flex items-center justify-end gap-2">
                        <span className="text-sm text-white">URL</span>
                        <div className="flex items-center gap-1">
                          <span className="text-xs px-2 py-0.5 rounded bg-teal-500/10 text-teal-500">Safe</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 flex items-center gap-2">
                        <Globe size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-400">Item Name</span>
                      </td>
                      <td className="py-3 text-right">
                        <span className="text-sm text-white">https://google.com</span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 flex items-center gap-2">
                        <Clock size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-400">Scan Time</span>
                      </td>
                      <td className="py-3 text-right">
                        <span className="text-sm text-white">3/24/2025, 4:06:36 PM</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 flex items-center gap-2">
                        <Info size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-400">Status</span>
                      </td>
                      <td className="py-3 text-right">
                        <span className="text-sm text-white">completed</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="glass-card overflow-hidden">
              <div className="flex items-center gap-2 p-4 border-b border-gray-800">
                <Shield size={18} className="text-gray-400" />
                <h3 className="font-medium text-white">Detection Summary</h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-teal-500">Harmless</span>
                    <span className="text-teal-500">71 / 96</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500 rounded-full" style={{ width: '74%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-yellow-500">Suspicious</span>
                    <span className="text-yellow-500">0 / 96</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-red-500">Malicious</span>
                    <span className="text-red-500">0 / 96</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Undetected</span>
                    <span className="text-gray-400">25 / 96</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-600 rounded-full" style={{ width: '26%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card overflow-hidden">
              <div className="flex items-center gap-2 p-4 border-b border-gray-800">
                <Info size={18} className="text-gray-400" />
                <h3 className="font-medium text-white">Detection Insight</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  This url was analyzed by 96 security engines and found to be safe. 71 engines specifically confirmed it as harmless, while 25 were unable to make a determination.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <code>//</code> Scanned URL
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="file-results" className="mt-6">
            <div className="glass-card overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-800 flex items-center gap-2">
                <FileCode size={18} className="text-gray-400" />
                <h3 className="font-medium">File Scan Results</h3>
              </div>
              <div className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-800">
                      <TableHead className="text-white">File Path</TableHead>
                      <TableHead className="text-white text-right w-28">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {gitScanData.results.map((file, index) => (
                      <TableRow key={index} className="border-gray-800">
                        <TableCell className="text-gray-400 font-mono text-sm break-all">
                          {file.file.split('/').pop()}
                          <span className="block text-xs text-gray-600 mt-1">
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
                              <span className="px-2 py-1 rounded text-xs bg-yellow-500/10 text-yellow-500 flex items-center gap-1">
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
              <p className="text-gray-400 text-sm leading-relaxed">
                The repository has been found to be safe. Here are some general security recommendations:
              </p>
              <ul className="mt-4 space-y-2 text-gray-400 text-sm">
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
