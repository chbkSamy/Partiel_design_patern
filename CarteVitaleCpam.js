export default class CarteVitaleCpam {
    constructor() {
        this.patientData = null;
    }

    fetchPatientData(informations) {
        console.log("Récupération des données patient depuis le service CPAM...");
        this.patientData = {
            nom: informations.nom,
            prenom: informations.prenom,
            numeroSecu: "1 85 06 75 008 045 12"
        };
        return this.patientData;
    }

    initializeInk() {
        console.log("Initialisation de l'encre spécifique carte vitale...");
    }

    verifySupport() {
        console.log("Vérification du support carte vitale...");
    }

    startPrint() {
        console.log("Lancement de l'impression carte vitale...");
    }

    cutCard() {
        console.log("Découpe de la carte vitale...");
    }

    finalizeCard() {
        console.log("Finalisation de la carte vitale...");
    }
}