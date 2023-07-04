/**
 * Attendre que le DOM soit chargé
 * @param {*} callback - fonctionnement a déclencher au chargement de la page
 */
function loaded(callback){
    window.addEventListener('DOMContentLoaded', callback);
}