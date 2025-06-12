import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Vote, Globe, Home, Users, FileCheck, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t, isRTL } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '/', icon: Home },
    { name: t('nav.quiz'), href: '/quiz', icon: Vote },
    { name: t('nav.candidates'), href: '/candidates', icon: Users },
    { name: t('nav.policies'), href: '/policies', icon: FileCheck },
    { name: t('nav.events'), href: '/events', icon: Calendar },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇲🇦' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ber', name: 'ⵜⴰⵎⴰⵣⵉⵖⵜ', flag: 'ⵣ' },
  ];

  const currentLanguage = languages.find(l => l.code === language);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-moroccan-red to-moroccan-gold rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Vote className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-moroccan-dark">
                {language === 'ar' || language === 'ber' ? 'صوتك يهم' : t('home.title')}
              </h1>
              <p className="text-xs text-gray-600">
                {language === 'ar' || language === 'ber' ? 'Your Vote Matters' : t('home.subtitle')}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === item.href
                    ? 'bg-moroccan-red text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-moroccan-red'
                } ${isRTL ? 'space-x-reverse' : ''}`}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium flex items-center space-x-1">
                  <span>{currentLanguage?.flag}</span>
                  <span>{currentLanguage?.name}</span>
                </span>
              </button>
              
              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[150px] z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as any);
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center space-x-2 ${
                          language === lang.code ? 'bg-moroccan-red text-white' : 'text-gray-700'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span className="text-sm">{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all ${
                    location.pathname === item.href
                      ? 'bg-moroccan-red text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  } ${isRTL ? 'space-x-reverse' : ''}`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};