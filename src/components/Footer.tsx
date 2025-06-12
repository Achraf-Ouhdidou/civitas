import React from 'react';
import { Heart, Github, Twitter, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-moroccan-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">صوتك يهم</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering Moroccan citizens to make informed voting decisions through technology, 
              transparency, and civic engagement. Join the digital democracy revolution.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-moroccan-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-moroccan-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-moroccan-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-moroccan-gold transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-moroccan-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-moroccan-gold transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-moroccan-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-moroccan-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-moroccan-gold transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-moroccan-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-moroccan-gold transition-colors">Report Issue</a></li>
              <li><a href="#" className="hover:text-moroccan-gold transition-colors">Feedback</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Your Vote Matters Platform. Made with <Heart className="w-4 h-4 inline text-moroccan-red" /> for Morocco.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Promoting transparency and democratic participation
          </p>
        </div>
      </div>
    </footer>
  );
};