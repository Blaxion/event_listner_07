// Pour l'exercice 2
let theColor = "red";
let theBackground = "gold";
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"
// > Event Target

// ### 1. Créer un programme qui te permet de passer le contenu de la variable pContent jusqu'a une function et en suite fait en sorte que cette function ajoute ce qu'elle a reçue en parametre dans le p de la section, sert toi du button Exo1

let body = document.querySelector('body')
// let body = document.body
body.addEventListener("click", event =>{
    console.log(event)
    if (event.target.localName == "input" ) {
        inject(pContent)
    }
})

function inject(str) {
    p.innerText=str
}




// ### 2. Créer un programme qui au clique du h1, le background devient gold et sa color red, Attention voici les contraintes :

// - Les couleurs sont contenu dans des variables sur le fichier main.js, sert-en pour les affecter au style de la balise h1

function styleChange(e,color,background) {
    if (e.target.tagName =="H1") {
        e.target.setAttribute('style',`color : ${color}; background-color:${background}`)
    }
}

body.addEventListener('click', e => {
    styleChange(e,theColor,theBackground)
})

// body.addEventListener("click", e =>{
//     console.log(e)
//     if (e.target.localName == "h1" ) {
//         styleChange(theBackground,theColor)
//     }
// })






// - Il faut que ces variables soient envoyés en parametre dans la function via le addEventListener.

