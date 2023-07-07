import Compte from './Compte.js';
import CarteCredit from './CarteCredit.js';

export default class CompteCourant extends Compte{
    constructor(nom, prenom, solde, numeroCarte, codePin){
        super(nom, prenom, solde);
        this.numeroCarte = numeroCarte;
        this.carteCredit = new CarteCredit(this.numeroCarte, codePin);
    }

    /* payer avec la carte */
    payerParCarte(montant, codePin, receveur){
        if(this.carteCredit.verifierPin(codePin, this.numeroCarte)){
            receveur.ajouterDeLArgent(montant);
            return this.retirerDeLArgent(montant);
        }else{
            return `Une tentative de paiement par carte de ${montant} € a échoué`;
        }
    }

}