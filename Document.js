export default class Document {
    constructor(informations) {
        this.informations = informations;
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
    }

    verifierPapier() {
        console.log("Vérification du papier...");
    }

    imprimer() {
        console.log("Impression en cours...");
    }

    decouper() {
        console.log("Découpage du document...");
    }

    operationSpecifique() {
        console.log("Opération spécifique du document...");
    }

    terminerImpression() {
        console.log("Impression terminée !");
    }
}

