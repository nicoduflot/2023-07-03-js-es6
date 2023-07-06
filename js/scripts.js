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

function getXhr(){
    let xhr = null;
    /* vérifier si le navigateur peut utliser ajax en testant les deux protocoles suivants */
    if( window.ActiveXObject || window.XMLHttpRequest ){
        if(window.ActiveXObject){
            /* si M$ */
            /* il existe deux protocoles a tester */
            try{
                xhr = new ActiveXObject('Msxml2.XMLHTTP');
            }catch(e){
                xhr = new ActiveXObject('Microsoft.XMLHTTP');
            }
        }else{
            xhr =new XMLHttpRequest();
        }
    }else{
        console.log('Votre navigateur ne supporte pas AJAX');
        xhr = false;
    }

    return xhr;
}

function jsonToTable(data){
    let html = '<table class="table text-left">';
    for(item of data){
        //console.log(item);
        html = html + '<tr>';
        for(key in item){
            html = html + `<td><b>${key} : </b><br />`;
            if((typeof item[key]) === 'object'){
                for(subkey in item[key]){
                    if((typeof item[key][subkey]) !== 'object' ){
                        html = html + `
                            <i>${subkey}</i> : <br />
                            ${item[key][subkey]}<br /><hr />
                            `;
                    }
                }
            }else{
                html = html + `${item[key]}`;
            }
            
            html = html + `</td>`;
            //console.log(key, item[key]);
        }
        html = html + '</tr>';
    }
    html = html + '</table>';
    return html;
}

function jsonToTableSearch(data, term = ''){
    term = term.toLowerCase();
    let html = '<table class="table text-left">';
    let lineOK = (term === '')? true: false;
    console.log(term);
    for(item of data){
        let tr = '<tr>';
        //console.log(item);
        //html = html + '<tr>';
        for(key in item){
            tr = tr + `<td><b>${key} : </b><br />`;
            if((typeof item[key]) === 'object'){
                for(subkey in item[key]){
                    if((typeof item[key][subkey]) !== 'object' ){
                        tr = tr + `<i>${subkey}</i> : <br />`;
                        if( (item[key][subkey].toString().toLowerCase().indexOf(term) >= 0) && term !== '' ){
                            lineOK = true;
                            tr = tr + '<mark>';
                        }
                        tr = tr + `${item[key][subkey]}<br />`;
                        if( (item[key][subkey].toString().toLowerCase().indexOf(term) >= 0) && term !== '' ){
                            tr = tr + '</mark>';
                        }
                    }
                }
            }else{
                if( item[key].toString().toLowerCase().indexOf(term) >= 0 && term !== '' ){
                    lineOK = true;
                    tr = tr + '<mark>';
                }                
                tr = tr + `${item[key]}`;
                if( item[key].toString().toLowerCase().indexOf(term) >= 0 && term !== '' ){
                    tr = tr + '</mark>';
                }
            }
            
            tr = tr + `</td>`;
            //console.log(key, item[key]);
        }
        tr = tr + '</tr>';
        if(lineOK){
            html = html + tr;
            lineOK = false;
        }
        tr = '';
        //html = html + '</tr>';
        lineOK = (term === '')? true: false;
    }
    html = html + '</table>';
    return html;
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