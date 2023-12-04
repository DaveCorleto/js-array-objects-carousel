
// // Vado a prendermi ogni elemento con classe img-card 

// const imgCard = document.getElementsByClassName('img-card');

// console.log (imgCard[0])

// // Setto la variabile che dovrà "comandare"

// let activeImgCard = 0;

// // comandi del bottone next 

// const next = document.querySelector('.next');

// next.addEventListener('click', function() {

//     if (activeImgCard < imgCard.length -1) {

//         // tolgo lA CLASSE ACTIVE 

//         imgCard [activeImgCard].classList.remove('active');

//         // Aumentiamo l'indice di imgCard 

//         activeImgCard++;

//         // Ora che siamo passati al dispatchEvent.img-card successivo gli aggiungiamo la classe .active 

//         imgCard [activeImgCard].classList.add('active');

//         // se sono alla fine del carousel nascondo il button con classe .next perchè sono arrivato a fine carousel 

//         if (activeImgCard === imgCard.length -1) {
//             next.classList.add('hidden');
//         }
//     }


// }
// )

// // comandi del bottone prev 

// const prev = document.querySelector('.prev');

// prev.addEventListener('click', function() {

//     if (activeImgCard > 0) {

//         // tolgo lA CLASSE ACTIVE 

//         imgCard [activeImgCard].classList.remove('active');

//         // diminuiamo l'indice di imgCard 

//         activeImgCard--;

//         // Ora che siamo passati al dispatchEvent.img-card precedente gli aggiungiamo la classe .active 

//         imgCard [activeImgCard].classList.add('active');

//         // se sono all'inizio del carousel nascondo il button con classe .next perchè sono arrivato a fine carousel 

//         if (activeImgCard === 0) {
//             next.classList.add('hidden');
//         }
//     }


// }
// )

// Consegna:
// Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
// Creare un carosello come nella foto allegata. [vi ripasso quella completa di thumbnails ma quelle rimangono Bonus]
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.

const images = [ 
    { image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', },
    { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', }, 
    { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", }, 
    { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', },
    { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', } ];


// IL container è Div class img-Card...ora devo sostituire il suo contenuto (statico con il contenuto degli indici dell'array)

// creo una variabile per selezionare div.img-card

let containerCarousel = document.querySelector(".carousel");
console.log("ho selezionato" , containerCarousel);

// creo una variabile che corrisponderà a ogni singolo indice di images 

let progImage;

// creo un ciclo for Each per ciclare l'array Images 
// Dentro al ciclo voglio creare:
// un div (class img-card) che deve contenere image 
// un h3 che conterrà title 
// un p che conterrà text 



images.forEach((immagineSingola) => {
    // Creo una variabile a cui assegnerò un elemento html 
    let progImage = document.createElement("div");
    // Gli aggiungo la classe img-card 
    progImage.classList.add("img-card");

    // Dentro a div.img-card scrivo: 
    progImage.innerHTML =
        "<img src='" + immagineSingola.image + "'>" +
        "<h3>" + immagineSingola.title + "</h3>" +
        "<p>" + immagineSingola.text + "</p>";

    // Appendo il nuovo contenuto al contenitore
    containerCarousel.appendChild(progImage);
});

