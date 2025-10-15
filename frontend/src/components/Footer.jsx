import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#1E40AF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">PR</span>
              </div>
              <div className="ml-3">
                <div className="text-lg font-bold">Plomberie Renaud</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre plombier de confiance à Toulouse pour tous vos travaux de plomberie, 
              chauffage et sanitaire. Disponibles 24h/24 et 7j/7.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Dépannage plomberie</li>
              <li>Installation sanitaire</li>
              <li>Chauffage & chaudières</li>
              <li>Rénovation salle de bain</li>
              <li>Urgences 24h/24</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#1E40AF] mr-3 mt-0.5 flex-shrink-0" />
                <a href="tel:0682345676" className="text-gray-400 hover:text-white transition-colors duration-300">
                  06 82 34 56 76
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#1E40AF] mr-3 mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:Tibaut.malik@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 break-all"
                >
                  Tibaut.malik@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#1E40AF] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  85 rue de la liberté<br />
                  31000 Toulouse
                </span>
              </li>
            </ul>

            {/* Réseaux sociaux */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Plomberie Renaud Services. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                to="/mentions-legales" 
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Mentions légales
              </Link>
              <Link 
                to="/mentions-legales" 
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                CGV
              </Link>
              <Link 
                to="/mentions-legales" 
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Confidentialité
              </Link>
            </div>
          </div>
          <p className="text-gray-500 text-xs text-center mt-4">
            TVA non applicable, article 293B du CGI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;