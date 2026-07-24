import Document from './Document.js';
import CarteVitaleCpam from './CarteVitaleCpam.js';

export default class CarteVitaleAdapter extends Document {
    constructor(informations) {
        super(informations);
        this.carteVitaleCpam = new CarteVitaleCpam();
    }



    recupererInformations() {
        return this.carteVitaleCpam.fetchPatientData(this.informations);
    }

    preparerEncres() {
        this.printer.setEncre('couleur');
        this.carteVitaleCpam.initializeInk();
    }

    verifierPapier() {
        this.printer.setFormat('85,60×53,98mm');
        this.carteVitaleCpam.verifySupport();
    }

    imprimer() {
        this.printer.preparer();
        this.printer.lancer();
        this.carteVitaleCpam.startPrint();
    }

    decouper() {
        this.carteVitaleCpam.cutCard();
    }

    operationSpecifique() {
        this.carteVitaleCpam.finalizeCard();
    }
}