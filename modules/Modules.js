/* 
c'est ici que l'on va importer les différents fonctions des bibliothèque dont on va avoir besoin sur la page
*/
/* import des fonctions, etc */

import * as other from './Others.js';
import loaded, {q, qA, addSpan, toto} from './Utilities.js';
import Toto from './Company.js';
import Company from './Company.js';
import AnotherCompany from './Another.js';
import CompteInteret from './CompteInteret.js';
import CompteCourant from './CompteCourant.js';

/* le script a appliquer sur la page */

console.log(other.test());

loaded(function(){
    console.log('la page est chargée !');
    q('#addSpan').addEventListener('click', function(){
        addSpan(this.dataset.target, 'Coucou');
    });

    const myCompany = new Toto('Acme');
    console.log(myCompany);

    const anotherCompany = new Company('Agence tous risques');
    console.log(anotherCompany);
    
    const customCompany = new AnotherCompany('Nike', 'Juste fait le !');
    console.log(customCompany);
    
    const monCompteCourant = new CompteCourant('Duflot', 'Nicolas', 1500, '0123456789', 1234);
    console.log(monCompteCourant);
    console.log(monCompteCourant.carteCredit.numeroCarte);
    
    const compteMagasin = new CompteCourant('Acme', '', 250000, '9876543210', 4321);

    console.log(compteMagasin.solde);
    console.log(monCompteCourant.payerParCarte(20, 1234, compteMagasin));
    console.log(compteMagasin.solde);
    console.log(monCompteCourant.payerParCarte(20, 123, compteMagasin));

    /* 
    créer dans la bonne classe une méthode virementBancaire qui permet de virer un montant d'un compte à un autre (sans oublier de retirer l'argent du compte débiteur)
    */


});