import Document from './Document.js';

export default class CarteIdentite extends Document {
    constructor(informations) {
        super(informations);
    }

    preparerEncres() {
        console.log("Préparation des encres pour carte d'identité...");
        this.printer.setEncre('couleur');
    }

    verifierPapier() {
        console.log("Vérification du format carte d'identité...");
        this.printer.setFormat('85,60×53,98 mm');
    }

    imprimer() {
        console.log("Impression de la carte d'identité...");
        this.printer.preparer();
        this.printer.lancer();
    }

    decouper() {
        console.log("Découpe de la carte d'identité...");
    }

    operationSpecifique() {
        console.log("Plastification de la carte d'identité...");
    }
}