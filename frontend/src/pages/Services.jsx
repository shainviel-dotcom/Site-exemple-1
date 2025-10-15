import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Droplet, Flame, Zap, ShowerHead, Thermometer, Clock, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1E40AF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nos services de plomberie à Toulouse
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Dépannage, installation, chauffage, rénovation
          </h2>
          <h3 className="text-xl md:text-2xl font-light">
            Des solutions durables pour votre confort
          </h3>
        </div>
      </section>

      {/* Services Image Banner */}
      <section className="h-[400px] relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1454988501794-2992f706932e" 
          alt="Outils de plomberie professionnels" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* Services Détaillés */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Dépannage Plomberie */}
            <Card className="hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gray-50 pb-8">
                <Droplet className="h-16 w-16 text-[#1E40AF] mb-4" />
                <CardTitle className="text-3xl">Dépannage Plomberie d'Urgence</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Face à une urgence plomberie à Toulouse, notre équipe intervient rapidement 24h/24 et 7j/7. 
                  Nous traitons tous types de problèmes : fuites d'eau, robinets qui gouttent, WC bouchés, 
                  canalisations obstruées, chauffe-eau en panne.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-[#1E40AF] mr-3 mt-1 flex-shrink-0" />
                    <span>Intervention rapide sous 1 heure en cas d'urgence</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-[#1E40AF] mr-3 mt-1 flex-shrink-0" />
                    <span>Disponibilité 24h/24, 7j/7, jours fériés inclus</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="h-5 w-5 text-[#1E40AF] mr-3 mt-1 flex-shrink-0" />
                    <span>Réparation de fuites (robinets, tuyaux, joints)</span>
                  </li>
                  <li className="flex items-start">
                    <Droplet className="h-5 w-5 text-[#1E40AF] mr-3 mt-1 flex-shrink-0" />
                    <span>Débouchage WC, lavabos, éviers, douches</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-[#1E40AF] mr-3 mt-1 flex-shrink-0" />
                    <span>Dépannage chauffe-eau électrique et gaz</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Installation Sanitaire */}
            <Card className="hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gray-50 pb-8">
                <ShowerHead className="h-16 w-16 text-[#1E40AF] mb-4" />
                <CardTitle className="text-3xl">Installation Sanitaire & Salles de Bains</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Nous réalisons l'installation complète de vos équipements sanitaires : création et rénovation 
                  de salles de bains, pose de sanitaires neufs, raccordement d'appareils électroménagers. 
                  Travail soigné et conforme aux normes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ShowerHead className="h-5 w-5 text-[#1E40AF] mr-3 mt-1 flex-shrink-0" />
                    <span>Création et rénovation de salles de bains complètes</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="h-5 w-5 text-[#1E40AF] mr-3 mt-1 flex-shrink-0" />
                    <span>Installation de WC, lavabos, douches, baignoires</span>
                  </li>
                  <li className="flex items-start">
                    <Droplet className="h-5 w-5 text-[#1E40AF] mr-3 mt-1 flex-shrink-0" />
                    <span>Pose de robinetterie et mitigeurs thermostatiques</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="h-5 w-5 text-[#1E40AF] mr-3 mt-1 flex-shrink-0" />
                    <span>Raccordement lave-linge, lave-vaisselle, cuisine</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-[#1E40AF] mr-3 mt-1 flex-shrink-0" />
                    <span>Travaux conformes aux normes en vigueur</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Chauffage */}
            <Card className="hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gray-50 pb-8">
                <Flame className="h-16 w-16 text-[#1E40AF] mb-4" />
                <CardTitle className="text-3xl">Chauffage & Chaudières</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Profitez d'un système de chauffage performant et économique. Nous assurons l'entretien annuel, 
                  le remplacement et l'installation de chaudières gaz et électriques, ainsi que le diagnostic 
                  et la réparation de tous types de pannes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Thermometer className="h-5 w-5 text-[#1E40AF] mr-3 mt-1 flex-shrink-0" />
                    <span>Entretien annuel de chaudières (gaz, fioul, électrique)</span>
                  </li>
                  <li className="flex items-start">
                    <Flame className="h-5 w-5 text-[#1E40AF] mr-3 mt-1 flex-shrink-0" />
                    <span>Installation et remplacement de chaudières neuves</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="h-5 w-5 text-[#1E40AF] mr-3 mt-1 flex-shrink-0" />
                    <span>Réparation et dépannage de systèmes de chauffage</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-[#1E40AF] mr-3 mt-1 flex-shrink-0" />
                    <span>Diagnostic de pannes et optimisation énergétique</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-[#1E40AF] mr-3 mt-1 flex-shrink-0" />
                    <span>Contrats d'entretien annuel disponibles</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Urgences & Petits Travaux */}
            <Card className="hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gray-50 pb-8">
                <Zap className="h-16 w-16 text-[#1E40AF] mb-4" />
                <CardTitle className="text-3xl">Urgences 24h/24 & Petits Travaux</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Aucun travail n'est trop petit ou trop grand. Nous intervenons également pour tous vos petits 
                  travaux de plomberie du quotidien : changement de joints, détartrage, petites réparations, 
                  conseils et diagnostics.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-[#1E40AF] mr-3 mt-1 flex-shrink-0" />
                    <span>Intervention d'urgence 24h/24 sur Toulouse</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="h-5 w-5 text-[#1E40AF] mr-3 mt-1 flex-shrink-0" />
                    <span>Changement de robinets, joints, flexibles</span>
                  </li>
                  <li className="flex items-start">
                    <Droplet className="h-5 w-5 text-[#1E40AF] mr-3 mt-1 flex-shrink-0" />
                    <span>Détartrage de chauffe-eau et canalisations</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-[#1E40AF] mr-3 mt-1 flex-shrink-0" />
                    <span>Diagnostic gratuit et conseils personnalisés</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-[#1E40AF] mr-3 mt-1 flex-shrink-0" />
                    <span>Devis gratuit sous 24h</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Zone d'intervention */}
          <Card className="bg-gray-50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Zone d'intervention
              </h2>
              <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
                Plomberie Renaud Services intervient à Toulouse et dans un rayon de 30 km autour de la ville. 
                Nous couvrons l'ensemble de l'agglomération toulousaine pour répondre rapidement à vos besoins 
                en plomberie, chauffage et sanitaire. Contactez-nous pour vérifier si votre commune fait partie 
                de notre zone d'intervention.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mots-clés SEO Section (hidden but present for SEO) */}
      <section className="sr-only">
        <p>
          plombier Toulouse, urgence plomberie Toulouse, installation chauffe-eau Toulouse, 
          dépannage sanitaire Toulouse, plomberie 24h/24, chauffagiste Toulouse, 
          rénovation salle de bain Toulouse, débouchage canalisation Toulouse
        </p>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1E40AF] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Obtenez votre devis gratuit
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Un projet de plomberie ? Besoin d'un dépannage ? Contactez-nous dès maintenant
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-white text-[#1E40AF] hover:bg-gray-100 font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
          >
            <Link to="/contact">Demander un devis</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;