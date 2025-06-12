import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Filter, User, Calendar, Award, ExternalLink } from 'lucide-react';

interface Candidate {
  id: number;
  name: string;
  party: string;
  region: string;
  age: number;
  gender: string;
  bio: string;
  experience: string[];
  image: string;
  partyColor: string;
}

const mockCandidates: Candidate[] = [
  {
    id: 1,
    name: "Fatima Al-Zahra",
    party: "Justice and Development Party (PJD)",
    region: "Casablanca-Settat",
    age: 45,
    gender: "Female",
    bio: "Former economics professor with 15 years of experience in public policy and women's rights advocacy.",
    experience: ["Economics Professor", "Women's Rights Advocate", "Municipal Councilor"],
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    partyColor: "text-green-600",
  },
  {
    id: 2,
    name: "Hassan Bennani",
    party: "National Rally of Independents (RNI)",
    region: "Rabat-Salé-Kénitra",
    age: 52,
    gender: "Male",
    bio: "Business leader and former trade minister with expertise in international commerce and economic development.",
    experience: ["Trade Minister", "Business Executive", "Chamber of Commerce President"],
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    partyColor: "text-blue-600",
  },
  {
    id: 3,
    name: "Aicha Lahlou",
    party: "Authenticity and Modernity Party (PAM)",
    region: "Marrakech-Safi",
    age: 39,
    gender: "Female",
    bio: "Technology entrepreneur and digital rights activist focused on modernizing Morocco's digital infrastructure.",
    experience: ["Tech Entrepreneur", "Digital Rights Activist", "Innovation Consultant"],
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    partyColor: "text-orange-600",
  },
  {
    id: 4,
    name: "Omar Fassi",
    party: "Istiqlal Party",
    region: "Fès-Meknès",
    age: 58,
    gender: "Male",
    bio: "Veteran diplomat and former ambassador with extensive experience in foreign affairs and cultural preservation.",
    experience: ["Ambassador", "Diplomat", "Cultural Heritage Advisor"],
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    partyColor: "text-red-600",
  },
  {
    id: 5,
    name: "Nadia Berrada",
    party: "Socialist Union of Popular Forces (USFP)",
    region: "Tangier-Tétouan-Al Hoceïma",
    age: 43,
    gender: "Female",
    bio: "Social worker and labor rights advocate with a strong focus on rural development and social justice.",
    experience: ["Social Worker", "Labor Rights Advocate", "Rural Development Specialist"],
    image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
    partyColor: "text-pink-600",
  },
  {
    id: 6,
    name: "Youssef Amrani",
    party: "Constitutional Union (UC)",
    region: "Oriental",
    age: 47,
    gender: "Male",
    bio: "Legal expert and constitutional scholar with extensive experience in judicial reform and legal education.",
    experience: ["Constitutional Scholar", "Judge", "Law Professor"],
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
    partyColor: "text-purple-600",
  },
];

export const Candidates: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedParty, setSelectedParty] = useState('');
  const [userLocation, setUserLocation] = useState('');

  const regions = [...new Set(mockCandidates.map(c => c.region))];
  const parties = [...new Set(mockCandidates.map(c => c.party))];

  const filteredCandidates = mockCandidates.filter(candidate => {
    return (
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedRegion === '' || candidate.region === selectedRegion) &&
      (selectedParty === '' || candidate.party === selectedParty)
    );
  });

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Mock location detection
        setUserLocation('Casablanca-Settat');
        setSelectedRegion('Casablanca-Settat');
      });
    }
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
          <h1 className="text-4xl font-bold text-moroccan-dark mb-4">Know Your Candidates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover detailed information about candidates running in your region. Make informed decisions based on their experience and platform.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-lg mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search candidates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-moroccan-red focus:border-transparent"
              />
            </div>

            {/* Region Filter */}
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-moroccan-red focus:border-transparent appearance-none bg-white"
              >
                <option value="">All Regions</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>

            {/* Party Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <select
                value={selectedParty}
                onChange={(e) => setSelectedParty(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-moroccan-red focus:border-transparent appearance-none bg-white"
              >
                <option value="">All Parties</option>
                {parties.map(party => (
                  <option key={party} value={party}>{party}</option>
                ))}
              </select>
            </div>

            {/* Location Detection */}
            <button
              onClick={detectLocation}
              className="flex items-center justify-center px-4 py-3 bg-moroccan-red text-white rounded-xl hover:bg-red-700 transition-colors"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Use My Location
            </button>
          </div>

          {userLocation && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-700 font-medium">
                <MapPin className="w-4 h-4 inline mr-1" />
                Showing candidates for: {userLocation}
              </p>
            </div>
          )}
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCandidates.length} candidates
          </p>
        </div>

        {/* Candidates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCandidates.map((candidate, index) => (
            <motion.div
              key={candidate.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              <div className="relative">
                <img
                  src={candidate.image}
                  alt={candidate.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 text-sm font-medium rounded-full">
                    Age {candidate.age}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-moroccan-dark mb-2">{candidate.name}</h3>
                <p className={`font-medium mb-2 ${candidate.partyColor}`}>{candidate.party}</p>
                <p className="text-gray-600 text-sm mb-3 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {candidate.region}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{candidate.bio}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-800 mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    Experience
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {candidate.experience.map((exp, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-700"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full flex items-center justify-center px-4 py-3 bg-moroccan-red text-white rounded-xl hover:bg-red-700 transition-colors group-hover:bg-red-700">
                  <User className="w-4 h-4 mr-2" />
                  View Full Profile
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCandidates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No candidates found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};