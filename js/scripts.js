/**
 * Attendre que le DOM soit chargé
 * @param {*} callback - fonctionnement a déclencher au chargement de la page
 */
function loaded(callback) {
    window.addEventListener('DOMContentLoaded', callback);
}

/**
 * 
 * @param {String} selector - le selecteur CSS de l'élément
 * @returns 
 */
function q(selector) {
    return document.querySelector(selector);
}
/**
 * 
 * @param {String} selector - le selecteur CSS de la collection
 * @returns 
 */
function qA(selector) {
    return document.querySelectorAll(selector);
}

loaded(function () {
    /* menu dynamique */

    /* on repère tous les éléments ayant la classe toggle-menu, ces éléments sont abonnés à unécouteur d'événement sur le clic */
    qA('.toggle-menu').forEach(function (element) {
        element.addEventListener('click', function () {
            /* on récupère le sélecteur de la cible (le menu qui doit glisser) */
            const target = element.dataset.target;
            /* on applique ou pas la classe toggle qui anime le glissement du menu */
            q(target).classList.toggle('toggle-element');
        });
    });
});