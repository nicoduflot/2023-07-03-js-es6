/**
 * Attendre que le DOM soit chargé
 * @param {*} callback - fonctionnement a déclencher au chargement de la page
 */
function loaded(callback){
    window.addEventListener('DOMContentLoaded', callback);
}

/**
 * 
 * @param {String} selector - le selecteur CSS de l'élément
 * @returns 
 */
function q(selector){
    return document.querySelector(selector);
}
/**
 * 
 * @param {String} selector - le selecteur CSS de la collection
 * @returns 
 */
function qA(selector){
    return document.querySelectorAll(selector);
}