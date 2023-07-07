import Compte from './Compte.js';

export default class CompteCourant extends Compte{
    constructor(nom, prenom, solde, codePin){
        super(nom, prenom, solde);
        this._codePin = codePin;
    }

    get getCodePin(){
        return this._codePin;
    }

    payerParCarte(montant, codePin){
        if(this.getCodePin === codePin){
            return `Un paiement de ${montant} € a été effectué par carte.\n${this.retirerDeLArgent(montant)}`;
        }else{
            return `Une tentative de paiement par carte de ${montant} € a échoué`;
        }
    }
}