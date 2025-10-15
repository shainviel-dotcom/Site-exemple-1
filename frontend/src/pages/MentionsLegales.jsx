import React from 'react';
import { ScrollArea } from '../components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Separator } from '../components/ui/separator';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#1E40AF] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mentions Légales, CGV & Politique de Confidentialité
          </h1>
          <p className="text-xl">Dernière mise à jour : Janvier 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Mentions Légales */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl flex items-center">
                  <span className="text-[#1E40AF] mr-3">⚖️</span>
                  Mentions Légales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">Nom de l'entreprise</h3>
                  <p className="text-gray-700">Plomberie Renaud Services</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold text-lg mb-2">Responsable de publication</h3>
                  <p className="text-gray-700">Tibaut Malik, Gérant</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold text-lg mb-2">Adresse</h3>
                  <p className="text-gray-700">85 rue de la liberté, 31000 Toulouse, France</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-gray-700">Tibaut.malik@gmail.com</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold text-lg mb-2">Téléphone</h3>
                  <p className="text-gray-700">06 82 34 56 76</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold text-lg mb-2">Hébergeur</h3>
                  <p className="text-gray-700">
                    Hostinger International Ltd<br />
                    61 Lordou Vironos Street, 6023 Larnaca, Chypre<br />
                    Site web : <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] hover:underline">www.hostinger.fr</a>
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold text-lg mb-2">TVA</h3>
                  <p className="text-gray-700">TVA non applicable, article 293B du Code Général des Impôts (CGI)</p>
                </div>
              </CardContent>
            </Card>

            {/* CGV */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl flex items-center">
                  <span className="text-[#1E40AF] mr-3">📋</span>
                  Conditions Générales de Vente (CGV)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl mb-3 text-[#1E40AF]">1. Objet</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Les présentes Conditions Générales de Vente (CGV) définissent les conditions dans lesquelles 
                        Plomberie Renaud Services, ci-après désignée "le Prestataire", fournit des prestations de 
                        plomberie, chauffage, installation sanitaire et dépannage d'urgence à ses clients, ci-après 
                        désignés "le Client".
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-bold text-xl mb-3 text-[#1E40AF]">2. Devis et commande</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Toute demande de prestation donne lieu à l'établissement d'un devis détaillé et gratuit. 
                        Le devis est valable pendant une durée de 3 mois à compter de sa date d'émission.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        L'acceptation du devis par le Client, matérialisée par sa signature ou son accord écrit 
                        (email, courrier), vaut commande ferme et définitive. Pour les interventions d'urgence, 
                        l'accord peut être donné oralement et sera confirmé par écrit ultérieurement.
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-bold text-xl mb-3 text-[#1E40AF]">3. Tarifs et modalités de paiement</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Les prix sont exprimés en euros (€) et s'entendent toutes taxes comprises (TTC). 
                        Mention : <strong>"TVA non applicable, article 293B du CGI"</strong>.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Le règlement s'effectue selon les modalités suivantes :
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>Comptant à la fin des travaux pour les interventions de dépannage</li>
                        <li>Acompte de 30% à la commande pour les travaux de rénovation ou d'installation</li>
                        <li>Solde à la réception des travaux ou selon échéancier convenu dans le devis</li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed mt-3">
                        Modes de paiement acceptés : espèces (dans la limite légale), chèque, virement bancaire, 
                        carte bancaire.
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-bold text-xl mb-3 text-[#1E40AF]">4. Délais d'intervention et responsabilité</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Les délais d'intervention sont communiqués à titre indicatif et peuvent varier en fonction 
                        de la disponibilité du matériel et des aléas techniques.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Pour les urgences, le Prestataire s'engage à intervenir dans les meilleurs délais, 
                        généralement sous 1 heure pour les interventions prioritaires.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Le Prestataire ne pourra être tenu responsable des retards ou impossibilités d'exécution 
                        dus à un cas de force majeure (intempéries exceptionnelles, catastrophes naturelles, 
                        grèves, etc.).
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-bold text-xl mb-3 text-[#1E40AF]">5. Garanties</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Toutes les prestations réalisées par le Prestataire bénéficient de la garantie légale de 
                        conformité prévue par les articles L. 217-4 et suivants du Code de la consommation.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Les travaux d'installation et de rénovation peuvent bénéficier, selon leur nature, de la 
                        garantie décennale conformément à l'article 1792 du Code civil.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Les pièces et équipements fournis bénéficient de la garantie constructeur. Le Prestataire 
                        s'engage à transmettre au Client tous les documents relatifs aux garanties des équipements 
                        installés.
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-bold text-xl mb-3 text-[#1E40AF]">6. Confidentialité et protection des données</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Les données personnelles collectées via le site internet ou lors des échanges avec le Client 
                        sont utilisées uniquement pour la gestion de la relation commerciale et ne sont en aucun cas 
                        transmises à des tiers sans accord préalable du Client.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Conformément au Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679) 
                        et à la loi Informatique et Libertés, le Client dispose d'un droit d'accès, de rectification, 
                        de suppression et d'opposition concernant ses données personnelles.
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-bold text-xl mb-3 text-[#1E40AF]">7. Droit applicable et litiges</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Les présentes CGV sont soumises au droit français.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute 
                        action judiciaire. À défaut d'accord amiable, le litige sera porté devant les juridictions 
                        compétentes de Toulouse.
                      </p>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Politique de confidentialité */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl flex items-center">
                  <span className="text-[#1E40AF] mr-3">🔒</span>
                  Politique de Confidentialité (RGPD)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] pr-4">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl mb-3 text-[#1E40AF]">1. Responsable du traitement</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Le responsable du traitement des données personnelles est Plomberie Renaud Services, 
                        représentée par Tibaut Malik, joignable à l'adresse Tibaut.malik@gmail.com.
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-bold text-xl mb-3 text-[#1E40AF]">2. Données collectées et finalités</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Nous collectons les données personnelles suivantes :
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li><strong>Données d'identification :</strong> nom, prénom, adresse postale</li>
                        <li><strong>Données de contact :</strong> adresse email, numéro de téléphone</li>
                        <li><strong>Données de navigation :</strong> adresse IP, cookies, pages visitées</li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed mt-3">
                        Ces données sont utilisées pour :
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>Gérer les demandes de devis et de contact</li>
                        <li>Assurer le suivi de la relation client</li>
                        <li>Réaliser des statistiques de visite du site</li>
                        <li>Améliorer nos services</li>
                      </ul>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-bold text-xl mb-3 text-[#1E40AF]">3. Base légale du traitement</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Le traitement de vos données personnelles repose sur votre consentement (formulaire de contact) 
                        et sur l'exécution du contrat de prestation de services. Pour les données de navigation, 
                        le traitement repose sur notre intérêt légitime à améliorer nos services.
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-bold text-xl mb-3 text-[#1E40AF]">4. Durée de conservation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Vos données personnelles sont conservées pendant la durée de la relation commerciale et, 
                        au maximum, pendant 3 ans à compter du dernier contact pour les prospects. Les données 
                        comptables sont conservées pendant 10 ans conformément aux obligations légales.
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-bold text-xl mb-3 text-[#1E40AF]">5. Vos droits</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Conformément au RGPD, vous disposez des droits suivants :
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                        <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                        <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                        <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                        <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format exploitable</li>
                        <li><strong>Droit de limitation :</strong> limiter le traitement de vos données</li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed mt-3">
                        Pour exercer ces droits, contactez-nous à l'adresse : Tibaut.malik@gmail.com
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-bold text-xl mb-3 text-[#1E40AF]">6. Cookies et technologies similaires</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Notre site utilise des cookies pour améliorer votre expérience de navigation et réaliser 
                        des statistiques de visite. Vous pouvez paramétrer votre navigateur pour refuser les cookies, 
                        mais certaines fonctionnalités du site pourraient être limitées.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Pour plus d'informations sur les cookies et leur gestion, consultez le site de la CNIL : 
                        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] hover:underline ml-1">
                          www.cnil.fr
                        </a>
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-bold text-xl mb-3 text-[#1E40AF]">7. Sécurité des données</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour 
                        garantir la sécurité de vos données personnelles et empêcher leur altération, suppression ou 
                        accès non autorisé.
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-bold text-xl mb-3 text-[#1E40AF]">8. Réclamation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation 
                        auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
                      </p>
                      <p className="text-gray-700 leading-relaxed mt-2">
                        CNIL - 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07<br />
                        Téléphone : 01 53 73 22 22<br />
                        Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] hover:underline">www.cnil.fr</a>
                      </p>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentionsLegales;