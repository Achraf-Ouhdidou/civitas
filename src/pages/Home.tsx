import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Vote, Users, FileCheck, Calendar, ArrowRight, Star, Target, Heart } from 'lucide-react';

export const Home: React.FC = () => {
  const features = [
    {
      icon: Vote,
      title: 'Political Compass',
      description: 'Discover which political parties align with your values through our scientifically-designed quiz.',
      href: '/quiz',
      color: 'from-moroccan-red to-red-600',
    },
    {
      icon: Users,
      title: 'Know Your Candidates',
      description: 'Explore detailed profiles of candidates in your region with verified information.',
      href: '/candidates',
      color: 'from-moroccan-blue to-blue-600',
    },
    {
      icon: FileCheck,
      title: 'Policy Tracker',
      description: 'Track political promises and see if parties deliver on their commitments.',
      href: '/policies',
      color: 'from-moroccan-green to-green-600',
    },
    {
      icon: Calendar,
      title: 'Political Events',
      description: 'Stay updated on debates, town halls, and important political events near you.',
      href: '/events',
      color: 'from-moroccan-gold to-yellow-600',
    },
  ];

  const stats = [
    { number: '1M+', label: 'Active Users' },
    { number: '500+', label: 'Candidates Tracked' },
    { number: '12', label: 'Political Parties' },
    { number: '95%', label: 'User Satisfaction' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-moroccan-red via-red-600 to-moroccan-gold text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block">صوتك يهم</span>
              <span className="block text-2xl md:text-3xl font-normal mt-2 opacity-90">
                Your Vote Matters
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Empower your democratic participation with Morocco's most comprehensive voting awareness platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quiz"
                className="inline-flex items-center px-8 py-4 bg-white text-moroccan-red font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                <Target className="w-5 h-5 mr-2" />
                Take Political Quiz
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/candidates"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-moroccan-red transition-all duration-200 group"
              >
                <Users className="w-5 h-5 mr-2" />
                Explore Candidates
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-moroccan-red mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-moroccan-dark mb-4">
              Everything You Need to Vote Smart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with rigorous research to help you make informed decisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={feature.href}
                  className="block group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-moroccan-dark mb-4 group-hover:text-moroccan-red transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-moroccan-red font-semibold group-hover:text-moroccan-gold transition-colors">
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-moroccan-blue to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-moroccan-gold" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Civic Renaissance
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of Morocco's digital democracy movement. Your participation shapes our nation's future.
            </p>
            <Link
              to="/quiz"
              className="inline-flex items-center px-8 py-4 bg-moroccan-gold text-moroccan-dark font-semibold rounded-xl hover:bg-yellow-400 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              <Star className="w-5 h-5 mr-2" />
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};