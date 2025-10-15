import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, CheckCircle, Wrench, Droplet, Flame } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1604118600242-e7a6d23ec3a9" 
            alt="Plombier professionnel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E40AF]/95 to-[#1E40AF]/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Plombier à Toulouse – Dépannage & Installation
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Interventions rapides 7j/7
          </h2>
          <h3 className="text-xl md:text-2xl mb-8 font-light">
            Votre partenaire de confiance pour tous vos travaux de plomberie
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-[#1E40AF] hover:bg-gray-100 font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
            >
              <Link to="/contact">Demandez un devis gratuit</Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1E40AF] font-semibold text-lg px-8 py-6 transition-all duration-300"
            >
              <a href="tel:0682345676">
                <Phone className="mr-2 h-5 w-5" />
                Appeler maintenant
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* À propos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Plomberie Renaud Services
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Située au cœur de Toulouse, Plomberie Renaud Services est votre partenaire de confiance 
                pour tous vos besoins en plomberie, chauffage et installation sanitaire. Avec plus de 
                15 ans d'expérience, notre équipe d'artisans qualifiés intervient rapidement pour résoudre 
                tous vos problèmes de plomberie.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Que ce soit pour un dépannage d'urgence, l'installation d'une nouvelle salle de bain, 
                l'entretien de votre chaudière ou la rénovation complète de votre système de plomberie, 
                nous mettons notre expertise à votre service. Notre zone d'intervention couvre Toulouse 
                et ses alentours dans un rayon de 30 km.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous nous engageons à fournir des prestations de qualité, dans le respect des normes 
                en vigueur, avec des tarifs transparents et compétitifs. Votre satisfaction est notre priorité.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <CheckCircle className="h-12 w-12 text-[#1E40AF] mx-auto mb-4" />
                  <h3 className="font-bold text-2xl mb-2">15+</h3>
                  <p className="text-gray-600">Années d'expérience</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <Clock className="h-12 w-12 text-[#1E40AF] mx-auto mb-4" />
                  <h3 className="font-bold text-2xl mb-2">24h/24</h3>
                  <p className="text-gray-600">Dépannage d'urgence</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <Wrench className="h-12 w-12 text-[#1E40AF] mx-auto mb-4" />
                  <h3 className="font-bold text-2xl mb-2">100%</h3>
                  <p className="text-gray-600">Satisfaction client</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <CheckCircle className="h-12 w-12 text-[#1E40AF] mx-auto mb-4" />
                  <h3 className="font-bold text-2xl mb-2">Devis</h3>
                  <p className="text-gray-600">Gratuit et rapide</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Aperçu */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Services Principaux
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour tous vos besoins en plomberie et chauffage
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <Droplet className="h-16 w-16 text-[#1E40AF] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Dépannage Plomberie</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Intervention rapide pour fuites d'eau, robinets défectueux, WC bouchés, 
                  problèmes de chauffe-eau. Disponible 24h/24 et 7j/7.
                </p>
                <Button asChild variant="outline" className="w-full border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white transition-colors duration-300">
                  <Link to="/services">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <Wrench className="h-16 w-16 text-[#1E40AF] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Installation Sanitaire</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Pose et remplacement de sanitaires, création de salles de bains, 
                  installation de cuisine, raccordement d'équipements.
                </p>
                <Button asChild variant="outline" className="w-full border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white transition-colors duration-300">
                  <Link to="/services">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <Flame className="h-16 w-16 text-[#1E40AF] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Chauffage</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Entretien et remplacement de chaudières, installation de systèmes de chauffage, 
                  diagnostic et réparations.
                </p>
                <Button asChild variant="outline" className="w-full border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white transition-colors duration-300">
                  <Link to="/services">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#1E40AF] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Besoin d'un plombier à Toulouse ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous dès maintenant pour un devis gratuit ou une intervention d'urgence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-[#1E40AF] hover:bg-gray-100 font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
            >
              <Link to="/contact">Demander un devis</Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1E40AF] font-semibold text-lg px-8 py-6 transition-all duration-300"
            >
              <a href="tel:0682345676">
                <Phone className="mr-2 h-5 w-5" />
                06 82 34 56 76
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;