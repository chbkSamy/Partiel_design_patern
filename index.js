import DocumentFactory from './DocumentFactory.js';

const informations = {
  nom: "Dupont",
  prenom: "Jean"
};

console.log("\n Carte d'identité");
const carteIdentite = DocumentFactory.creerDocument("carte_identite", informations);
carteIdentite.lancerImpression();

console.log("\n Passeport");
const passeport = DocumentFactory.creerDocument("passeport", informations);
passeport.lancerImpression();

console.log("\n Carte Vitale");
const carteVitale = DocumentFactory.creerDocument("carte_vitale", informations);
carteVitale.lancerImpression();