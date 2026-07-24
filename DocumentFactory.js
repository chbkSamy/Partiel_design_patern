import CarteIdentite from './CarteIdentite.js';
import Passeport from './Passeport.js';
import CarteVitaleAdapter from './CarteVitaleAdapter.js';

export default class DocumentFactory {
    static creerDocument(type, informations) {
        switch (type) {
            case 'carte_identite':
                return new CarteIdentite(informations);
            case 'passeport':
                return new Passeport(informations);
            case 'carte_vitale':
                return new CarteVitaleAdapter(informations);
            default:
                throw new Error(`Type de document inconnu : ${type}`);
        }
    }
}