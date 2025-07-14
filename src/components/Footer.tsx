import React from 'react';
import { Heart, Github, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const quickLinks = [
    { label: t('footer.links.about'), href: '#' },
    { label: t('footer.links.how_it_works'), href: '#' },
    { label: t('footer.links.privacy'), href: '#' },
    { label: t('footer.links.terms'), href: '#' },
  ];

  const supportLinks = [
    { label: t('footer.support.help'), href: '#' },
    { label: t('footer.support.contact'), href: '#' },
    { label: t('footer.support.report'), href: '#' },
    { label: t('footer.support.feedback'), href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-moroccan-navy via-moroccan-blue to-moroccan-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 geometric-pattern-bg opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className={`flex items-center space-x-3 mb-6 ${isRTL ? 'space-x-reverse' : ''}`}>
              <div className="w-12 h-12 bg-gradient-to-br from-moroccan-gold to-moroccan-copper rounded-xl flex items-center justify-center shadow-gold">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold">صوتك يهم</h3>
                <p className="text-moroccan-cream text-sm">Your Vote Matters</p>
              </div>
            </div>
            
            <p className="text-moroccan-cream mb-6 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            
            <div className={`flex space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-moroccan-gold hover:scale-110 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-moroccan-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-moroccan-cream hover:text-moroccan-gold transition-colors duration-200 flex items-center"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-moroccan-gold">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-moroccan-cream hover:text-moroccan-gold transition-colors duration-200 flex items-center"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 space-y-2">
              <div className={`flex items-center text-moroccan-cream text-sm ${isRTL ? 'space-x-reverse' : ''}`}>
                <Mail className="w-4 h-4 mr-2" />
                <span>contact@votematters.ma</span>
              </div>
              <div className={`flex items-center text-moroccan-cream text-sm ${isRTL ? 'space-x-reverse' : ''}`}>
                <Phone className="w-4 h-4 mr-2" />
                <span>+212 5XX-XXXX-XX</span>
              </div>
              <div className={`flex items-center text-moroccan-cream text-sm ${isRTL ? 'space-x-reverse' : ''}`}>
                <MapPin className="w-4 h-4 mr-2" />
                <span>Rabat, Morocco</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className={`flex flex-col md:flex-row justify-between items-center ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <p className="text-moroccan-cream text-sm mb-4 md:mb-0">
              {t('footer.copyright')}
            </p>
            <p className="text-moroccan-cream text-sm">
              {t('footer.tagline')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};