console.log('début du chargement de la page');
loaded(function(){
    console.log('la page est chargée, début du script sur le DOM');
    const titre = document.querySelector('#titrePrincipal');
    console.log(titre);

    const pageTitle = document.querySelector('h1');
    console.log(pageTitle);

    const details = document.querySelectorAll('details li a');
    console.log(details);

    const mainContainer = document.querySelectorAll('main.container');
    console.log(mainContainer);

    const allContainer = document.querySelectorAll('.container')
    console.log(allContainer);

    console.log(document.getElementsByTagName('h1'));

    
});
