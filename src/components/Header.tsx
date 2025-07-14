import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Vote, Globe, Home, Users, FileCheck, Calendar, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t, isRTL, direction } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '/', icon: Home },
    { name: t('nav.quiz'), href: '/quiz', icon: Vote },
    { name: t('nav.candidates'), href: '/candidates', icon: Users },
    { name: t('nav.policies'), href: '/policies', icon: FileCheck },
    { name: t('nav.events'), href: '/events', icon: Calendar },
  ];

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇲🇦' },
    { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
    { code: 'ber', name: 'Tifinagh', nativeName: 'ⵜⴰⵎⴰⵣⵉⵖⵜ', flag: 'ⵣ' },
  ];

  const currentLanguage = languages.find(l => l.code === language);

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsLanguageOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-moroccan-red/10 z-50 shadow-academic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center h-16 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <Link to="/" className={`flex items-center space-x-3 group ${isRTL ? 'space-x-reverse' : ''}`}>
            <div className="w-12 h-12 bg-gradient-to-br from-moroccan-red via-moroccan-burgundy to-moroccan-gold rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-moroccan">
              <Vote className="w-7 h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-heading font-bold text-moroccan-navy">
                {language === 'ar' || language === 'ber' ? 'صوتك يهم' : t('home.title')}
              </h1>
              <p className="text-xs text-moroccan-slate">
                {language === 'ar' || language === 'ber' ? 'Your Vote Matters' : t('home.subtitle')}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 font-medium ${
                  location.pathname === item.href
                    ? 'bg-gradient-to-r from-moroccan-red to-moroccan-burgundy text-white shadow-moroccan'
                    : 'text-moroccan-slate hover:bg-moroccan-cream hover:text-moroccan-red'
                } ${isRTL ? 'space-x-reverse' : ''}`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-moroccan-cream hover:bg-moroccan-sand transition-colors border border-moroccan-gold/20"
              >
                <Globe className="w-4 h-4 text-moroccan-gold" />
                <span className="text-sm font-medium text-moroccan-navy flex items-center space-x-1">
                  <span>{currentLanguage?.flag}</span>
                  <span className="hidden sm:inline">{currentLanguage?.nativeName}</span>
                </span>
                <ChevronDown className={`w-4 h-4 text-moroccan-slate transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className={`absolute top-full mt-2 bg-white rounded-xl shadow-academic border border-gray-200 py-2 min-w-[180px] z-50 ${
                      isRTL ? 'left-0' : 'right-0'
                    }`}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code as Language)}
                        className={`w-full text-left px-4 py-3 hover:bg-moroccan-cream transition-colors flex items-center space-x-3 ${
                          language === lang.code 
                            ? 'bg-gradient-to-r from-moroccan-red/10 to-moroccan-gold/10 text-moroccan-red border-r-2 border-moroccan-red' 
                            : 'text-moroccan-slate'
                        } ${isRTL ? 'space-x-reverse text-right' : ''}`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <div>
                          <div className="font-medium">{lang.nativeName}</div>
                          <div className="text-xs opacity-70">{lang.name}</div>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-moroccan-cream transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-moroccan-navy" />
              ) : (
                <Menu className="w-6 h-6 text-moroccan-navy" />
              )}
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
            className="md:hidden bg-white border-t border-moroccan-red/10 shadow-academic"
          >
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all font-medium ${
                    location.pathname === item.href
                      ? 'bg-gradient-to-r from-moroccan-red to-moroccan-burgundy text-white shadow-moroccan'
                      : 'text-moroccan-slate hover:bg-moroccan-cream hover:text-moroccan-red'
                  } ${isRTL ? 'space-x-reverse' : ''}`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};