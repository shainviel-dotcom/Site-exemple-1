import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    objet: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      objet: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock: Store in localStorage for now
    try {
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      const newContact = {
        ...formData,
        id: Date.now(),
        date: new Date().toISOString()
      };
      contacts.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(contacts));

      toast.success('Votre message a été envoyé avec succès!', {
        description: 'Nous vous répondrons dans les plus brefs délais.'
      });

      // Reset form
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        objet: '',
        message: ''
      });
    } catch (error) {
      toast.error('Erreur lors de l\'envoi du message', {
        description: 'Veuillez réessayer ou nous appeler directement.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1E40AF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contactez votre plombier à Toulouse
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl">
            Besoin d'un dépannage ou d'un devis ? Contactez-nous via le formulaire ou appelez directement. 
            Notre équipe est à votre écoute pour répondre à tous vos besoins en plomberie.
          </p>
        </div>
      </section>

      {/* Contact Image */}
      <section className="h-[350px] relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1635221798248-a3452ad07cd" 
          alt="Plombier au travail" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nom">Nom complet *</Label>
                  <Input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <Label htmlFor="telephone">Téléphone *</Label>
                  <Input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    required
                    value={formData.telephone}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <Label htmlFor="objet">Objet de votre demande *</Label>
                  <Select onValueChange={handleSelectChange} value={formData.objet} required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Sélectionnez un objet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="depannage">Dépannage d'urgence</SelectItem>
                      <SelectItem value="installation">Installation / Rénovation</SelectItem>
                      <SelectItem value="devis">Demande de devis</SelectItem>
                      <SelectItem value="entretien">Entretien / Maintenance</SelectItem>
                      <SelectItem value="autre">Autre demande</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 min-h-[150px]"
                    placeholder="Décrivez votre besoin ou votre problème..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white font-semibold py-6 text-lg transition-all duration-300 hover:scale-[1.02]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </form>
            </div>

            {/* Coordonnées */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nos coordonnées
              </h2>
              
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="h-6 w-6 text-[#1E40AF] mr-3" />
                      Téléphone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href="tel:0682345676" 
                      className="text-xl font-semibold text-[#1E40AF] hover:underline transition-all duration-300"
                    >
                      06 82 34 56 76
                    </a>
                    <p className="text-gray-600 mt-2">Disponible 24h/24 et 7j/7 pour les urgences</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="h-6 w-6 text-[#1E40AF] mr-3" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href="mailto:Tibaut.malik@gmail.com" 
                      className="text-xl font-semibold text-[#1E40AF] hover:underline break-all transition-all duration-300"
                    >
                      Tibaut.malik@gmail.com
                    </a>
                    <p className="text-gray-600 mt-2">Réponse sous 24h maximum</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-6 w-6 text-[#1E40AF] mr-3" />
                      Adresse
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-semibold text-gray-900">85 rue de la liberté</p>
                    <p className="text-lg text-gray-700 mt-1">31000 Toulouse</p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=85+rue+de+la+liberté+31000+Toulouse" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-[#1E40AF] hover:underline transition-all duration-300"
                    >
                      Voir sur Google Maps →
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-6 w-6 text-[#1E40AF] mr-3" />
                      Horaires
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Lundi - Samedi</span>
                        <span className="text-gray-700">8h00 - 20h00</span>
                      </div>
                      <div className="flex items-center mt-4 p-3 bg-[#1E40AF]/10 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-[#1E40AF] mr-2" />
                        <span className="font-semibold text-[#1E40AF]">Urgences 24h/24 et 7j/7</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;