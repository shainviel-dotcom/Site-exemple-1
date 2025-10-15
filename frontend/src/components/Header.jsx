import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Nos Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Mentions Légales', href: '/mentions-legales' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#1E40AF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PR</span>
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold text-gray-900">Plomberie Renaud</div>
                <div className="text-sm text-gray-600">Services à Toulouse</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-medium transition-colors duration-300 relative ${
                  isActive(item.href)
                    ? 'text-[#1E40AF]'
                    : 'text-gray-700 hover:text-[#1E40AF]'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute -bottom-[22px] left-0 right-0 h-1 bg-[#1E40AF]"></span>
                )}
              </Link>
            ))}
            <Button
              asChild
              className="bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              <a href="tel:0682345676">
                <Phone className="mr-2 h-4 w-4" />
                06 82 34 56 76
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-[#1E40AF] transition-colors duration-300"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors duration-300 px-4 py-2 rounded-lg ${
                    isActive(item.href)
                      ? 'bg-[#1E40AF]/10 text-[#1E40AF]'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white font-semibold mx-4"
              >
                <a href="tel:0682345676">
                  <Phone className="mr-2 h-4 w-4" />
                  06 82 34 56 76
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;