import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, XCircle, AlertCircle, TrendingUp, Filter, Search } from 'lucide-react';

interface PolicyPromise {
  id: number;
  party: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'not-started' | 'broken';
  category: string;
  datePromised: string;
  progress: number;
  sources: string[];
  partyColor: string;
}

const mockPolicies: PolicyPromise[] = [
  {
    id: 1,
    party: "Justice and Development Party (PJD)",
    title: "Increase Minimum Wage to 3000 MAD",
    description: "Commitment to raise the national minimum wage to 3000 dirhams per month to improve living standards.",
    status: "in-progress",
    category: "Economy",
    datePromised: "2021-09-01",
    progress: 65,
    sources: ["Official Party Manifesto 2021", "Economic Reform Committee Report"],
    partyColor: "border-green-500",
  },
  {
    id: 2,
    party: "National Rally of Independents (RNI)",
    title: "Digital Morocco 2025 Initiative",
    description: "Launch comprehensive digital transformation program for government services and infrastructure.",
    status: "completed",
    category: "Technology",
    datePromised: "2021-08-15",
    progress: 100,
    sources: ["Digital Strategy Document", "Implementation Progress Report 2024"],
    partyColor: "border-blue-500",
  },
  {
    id: 3,
    party: "Authenticity and Modernity Party (PAM)",
    title: "Youth Employment Program",
    description: "Create 100,000 new jobs for young graduates through entrepreneurship support and training programs.",
    status: "in-progress",
    category: "Employment",
    datePromised: "2021-07-20",
    progress: 45,
    sources: ["Youth Employment Strategy", "Ministry of Labor Reports"],
    partyColor: "border-orange-500",
  },
  {
    id: 4,
    party: "Istiqlal Party",
    title: "Renewable Energy Target 52%",
    description: "Achieve 52% renewable energy capacity by 2030 through solar and wind projects.",
    status: "in-progress",
    category: "Environment",
    datePromised: "2021-06-10",
    progress: 78,
    sources: ["National Energy Strategy", "MASEN Progress Reports"],
    partyColor: "border-red-500",
  },
  {
    id: 5,
    party: "Socialist Union of Popular Forces (USFP)",
    title: "Universal Healthcare Coverage",
    description: "Extend healthcare coverage to all citizens through expanded public health insurance.",
    status: "broken",
    category: "Healthcare",
    datePromised: "2021-05-15",
    progress: 20,
    sources: ["Healthcare Reform Plan", "Ministry of Health Budget Analysis"],
    partyColor: "border-pink-500",
  },
  {
    id: 6,
    party: "Constitutional Union (UC)",
    title: "Rural Development Infrastructure",
    description: "Connect all rural communities to paved roads and reliable internet by 2025.",
    status: "not-started",
    category: "Infrastructure",
    datePromised: "2021-04-05",
    progress: 10,
    sources: ["Rural Development Strategy", "Infrastructure Investment Plan"],
    partyColor: "border-purple-500",
  },
];

const statusConfig = {
  completed: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
  'in-progress': { icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
  'not-started': { icon: AlertCircle, color: 'text-gray-600', bg: 'bg-gray-50', border: 'border-gray-200' },
  broken: { icon: XCircle, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' },
};

export const PolicyTracker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedParty, setSelectedParty] = useState('');

  const categories = [...new Set(mockPolicies.map(p => p.category))];
  const parties = [...new Set(mockPolicies.map(p => p.party))];
  const statuses = ['completed', 'in-progress', 'not-started', 'broken'];

  const filteredPolicies = mockPolicies.filter(policy => {
    return (
      policy.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedStatus === '' || policy.status === selectedStatus) &&
      (selectedCategory === '' || policy.category === selectedCategory) &&
      (selectedParty === '' || policy.party === selectedParty)
    );
  });

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'not-started': return 'Not Started';
      case 'broken': return 'Broken Promise';
      default: return status;
    }
  };

  const getProgressColor = (progress: number, status: string) => {
    if (status === 'broken') return 'bg-red-500';
    if (status === 'completed') return 'bg-green-500';
    if (progress >= 70) return 'bg-green-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-moroccan-dark mb-4">Policy Tracker</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track political promises and see how well parties deliver on their commitments. Transparency is key to democracy.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {Object.entries(statusConfig).map(([status, config]) => {
            const count = mockPolicies.filter(p => p.status === status).length;
            return (
              <div key={status} className={`${config.bg} ${config.border} border rounded-xl p-4 text-center`}>
                <config.icon className={`w-8 h-8 ${config.color} mx-auto mb-2`} />
                <div className="text-2xl font-bold text-moroccan-dark">{count}</div>
                <div className="text-sm text-gray-600">{getStatusLabel(status)}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-6 shadow-lg mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search policies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-moroccan-red focus:border-transparent"
              />
            </div>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-moroccan-red focus:border-transparent appearance-none bg-white"
            >
              <option value="">All Statuses</option>
              {statuses.map(status => (
                <option key={status} value={status}>{getStatusLabel(status)}</option>
              ))}
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-moroccan-red focus:border-transparent appearance-none bg-white"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              value={selectedParty}
              onChange={(e) => setSelectedParty(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-moroccan-red focus:border-transparent appearance-none bg-white"
            >
              <option value="">All Parties</option>
              {parties.map(party => (
                <option key={party} value={party}>{party.split('(')[0].trim()}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPolicies.length} policy promises
          </p>
        </div>

        {/* Policies List */}
        <div className="space-y-6">
          {filteredPolicies.map((policy, index) => {
            const StatusIcon = statusConfig[policy.status].icon;
            return (
              <motion.div
                key={policy.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 ${policy.partyColor}`}
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="px-3 py-1 bg-gray-100 text-sm font-medium rounded-full mr-3">
                          {policy.category}
                        </span>
                        <span className="text-sm text-gray-600">
                          Promised: {new Date(policy.datePromised).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-moroccan-dark mb-2">{policy.title}</h3>
                      <p className="text-gray-700 mb-3">{policy.description}</p>
                      <p className="text-sm font-medium text-gray-600">{policy.party}</p>
                    </div>

                    <div className="lg:ml-6 mt-4 lg:mt-0">
                      <div className={`flex items-center px-4 py-2 rounded-full ${statusConfig[policy.status].bg} ${statusConfig[policy.status].border} border`}>
                        <StatusIcon className={`w-5 h-5 ${statusConfig[policy.status].color} mr-2`} />
                        <span className={`font-medium ${statusConfig[policy.status].color}`}>
                          {getStatusLabel(policy.status)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Progress</span>
                      <span className="text-sm font-bold text-moroccan-dark">{policy.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${policy.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className={`h-3 rounded-full ${getProgressColor(policy.progress, policy.status)}`}
                      />
                    </div>
                  </div>

                  {/* Sources */}
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Sources:</p>
                    <div className="flex flex-wrap gap-2">
                      {policy.sources.map((source, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200"
                        >
                          {source}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredPolicies.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No policies found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};