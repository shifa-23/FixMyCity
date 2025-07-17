
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, FileText, Home, Info, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null);
  const { user, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'File Complaint', href: '/complaint', icon: FileText },
    { name: 'About', href: '#about', icon: Info },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
             <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">CS</span>
              </div>
           

              <span className="text-white font-bold text-xl">FixMyCity</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 text-white/80 hover:text-white transition-colors ${
                      location.pathname === item.href ? 'text-white' : ''
                    }`}
                  >
                    <item.icon size={16} />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-white">Welcome, {user.name}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={logout}
                    className="px-4 py-2 bg-red-500/20 text-white rounded-lg border border-red-500/30 hover:bg-red-500/30 transition-all"
                  >
                    Logout
                  </motion.button>
                </div>
              ) : (
                <>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAuthModal('login')}
                    className="px-4 py-2 text-white hover:text-blue-300 transition-colors"
                  >
                    Login
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAuthModal('signup')}
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
                  >
                    Sign Up
                  </motion.button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/20 py-4"
            >
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon size={16} />
                    <span>{item.name}</span>
                  </Link>
                ))}
                {!user && (
                  <div className="pt-4 space-y-2">
                    <button
                      onClick={() => {
                        setAuthModal('login');
                        setIsOpen(false);
                      }}
                      className="w-full text-left text-white/80 hover:text-white transition-colors"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        setAuthModal('signup');
                        setIsOpen(false);
                      }}
                      className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg"
                    >
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>

      {authModal && (
        <AuthModal
          type={authModal}
          isOpen={!!authModal}
          onClose={() => setAuthModal(null)}
        />
      )}
    </>
  );
};

export default Header;
