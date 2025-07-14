import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Vote, Users, FileCheck, Calendar, ArrowRight, Star, Target, Heart, TrendingUp, Shield, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Home: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Vote,
      title: t('home.features.quiz.title'),
      description: t('home.features.quiz.description'),
      href: '/quiz',
      gradient: 'from-moroccan-red to-moroccan-burgundy',
      iconBg: 'bg-moroccan-red',
    },
    {
      icon: Users,
      title: t('home.features.candidates.title'),
      description: t('home.features.candidates.description'),
      href: '/candidates',
      gradient: 'from-moroccan-blue to-blue-700',
      iconBg: 'bg-moroccan-blue',
    },
    {
      icon: FileCheck,
      title: t('home.features.policies.title'),
      description: t('home.features.policies.description'),
      href: '/policies',
      gradient: 'from-moroccan-green to-green-700',
      iconBg: 'bg-moroccan-green',
    },
    {
      icon: Calendar,
      title: t('home.features.events.title'),
      description: t('home.features.events.description'),
      href: '/events',
      gradient: 'from-moroccan-gold to-moroccan-copper',
      iconBg: 'bg-moroccan-gold',
    },
  ];

  const stats = [
    { number: '1M+', label: t('home.stats.users'), icon: Users },
    { number: '500+', label: t('home.stats.candidates'), icon: Target },
    { number: '12', label: t('home.stats.parties'), icon: Vote },
    { number: '95%', label: t('home.stats.satisfaction'), icon: Star },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Research-Backed',
      description: 'Built with Moroccan political science experts',
    },
    {
      icon: Zap,
      title: 'Real-Time Updates',
      description: 'Live tracking of political developments',
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Insights',
      description: 'Evidence-based political analysis',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-moroccan-red via-moroccan-burgundy to-moroccan-gold geometric-pattern-bg">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white"
          >
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-shadow">
                <span className="block">{t('home.hero.title')}</span>
              </h1>
              <div className="text-2xl md:text-3xl font-medium mb-4 opacity-90">
                <span className="block text-moroccan-cream">{t('home.hero.subtitle')}</span>
              </div>
              <div className="w-24 h-1 bg-moroccan-gold mx-auto mb-8 rounded-full"></div>
            </div>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              {t('home.hero.description')}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-6 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Link
                to="/quiz"
                className="moroccan-button-primary text-lg px-8 py-4 shadow-gold hover:shadow-2xl group"
              >
                <Target className="w-6 h-6 mr-3" />
                {t('home.hero.cta.primary')}
                <ArrowRight className={`w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
              <Link
                to="/candidates"
                className="moroccan-button bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white hover:text-moroccan-red text-lg px-8 py-4 group"
              >
                <Users className="w-6 h-6 mr-3" />
                {t('home.hero.cta.secondary')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="academic-section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-moroccan-red to-moroccan-gold rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-moroccan">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-moroccan-navy mb-2">
                  {stat.number}
                </div>
                <div className="text-moroccan-slate font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="academic-section bg-gradient-to-br from-gray-50 to-moroccan-cream/30 moroccan-pattern-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-moroccan-navy mb-6">
              {t('home.features.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-moroccan-red to-moroccan-gold mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-moroccan-slate max-w-3xl mx-auto leading-relaxed">
              {t('home.features.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link
                  to={feature.href}
                  className="block group h-full"
                >
                  <div className="moroccan-card p-8 h-full hover:scale-105 transition-all duration-300 group-hover:shadow-moroccan">
                    <div className={`w-20 h-20 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-moroccan-navy mb-4 group-hover:text-moroccan-red transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-moroccan-slate mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-moroccan-red font-semibold group-hover:text-moroccan-gold transition-colors">
                      <span>{t('common.view')}</span>
                      <ArrowRight className={`w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-moroccan-blue to-moroccan-navy rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-academic">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-moroccan-navy mb-2">{benefit.title}</h4>
                <p className="text-moroccan-slate text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="academic-section bg-gradient-to-r from-moroccan-navy via-moroccan-blue to-moroccan-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern-bg opacity-10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-moroccan-gold to-moroccan-copper rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-gold">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {t('home.cta.title')}
            </h2>
            <div className="w-24 h-1 bg-moroccan-gold mx-auto mb-6 rounded-full"></div>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              {t('home.cta.description')}
            </p>
            <Link
              to="/quiz"
              className="moroccan-button-secondary text-lg px-10 py-4 shadow-gold hover:shadow-2xl group inline-flex items-center"
            >
              <Star className="w-6 h-6 mr-3" />
              {t('home.cta.button')}
              <ArrowRight className={`w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};