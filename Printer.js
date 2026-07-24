export default class Printer {
    constructor() {
        this.format = null;
        this.encre = null;
    }

    setFormat(format) {
        this.format = format;
    }

    setEncre(encre) {
        this.encre = encre;
    }

    preparer() {
        console.log(`Préparation de l'imprimante : format ${this.format}, encre ${this.encre}`);
    }

    lancer() {
        console.log(`Lancement de l'impression avec les paramètres : format ${this.format}, encre ${this.encre}`);
    }
}