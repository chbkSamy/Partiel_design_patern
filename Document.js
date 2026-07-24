import Printer from './Printer.js';

export default class Document {
    constructor(informations) {
        this.informations = informations;
        this.printer = new Printer();
    }

    lancerImpression() {
        this.recupererInformations();
        this.preparerEncres();
        this.verifierPapier();
        this.imprimer();
        this.decouper();
        this.operationSpecifique();
        this.terminerImpression();
    }

    recupererInformations() {
        console.log("Récupération des informations du document...");
    }

    preparerEncres() {
        console.log("Préparation des encres...");
        this.printer.setEncre('couleur');
    }

    verifierPapier() {
        console.log("Vérification du papier...");
        this.printer.setFormat('A4');
    }

    imprimer() {
        console.log("Impression en cours...");
        this.printer.preparer();
        this.printer.lancer();
    }

    decouper() {
        console.log("Découpage du document...");
    }

    operationSpecifique() {
        console.log("Opération spécifique du document...");
    }

    terminerImpression() {
        console.log("Fin de l'impression.");
    }
}