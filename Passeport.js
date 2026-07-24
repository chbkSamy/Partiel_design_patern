import Document from './Document.js';

export default class Passeport extends Document {
    constructor(informations) {
        super(informations);
    }

    preparerEncres() {
        console.log("Préparation des encres pour passeport...");
        this.printer.setEncre('couleur');
    }

    verifierPapier() {
        console.log("Vérification du format passeport...");
        this.printer.setFormat('A6 relie');
    }

    imprimer() {
        console.log("Impression du passeport...");
        this.printer.preparer();
        this.printer.lancer();
    }

    decouper() {
        console.log("Découpe du passeport...");
    }

    operationSpecifique() {
        console.log("Reliure du passeport...");
    }
}