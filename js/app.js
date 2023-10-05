// # calcolo del prezzo del biglietto del treno

// recupero il pulsante dal DOM
const btnDOMElement = document.getElementById('btn-calc')
console.log(btnDOMElement);

// -recuperare l'età dell'utente 
//   -selezionare l'elemento input tramite ID
//   -recuperare il valore e lo salvo nella variabile
let inputDOMElement = document.getElementById('age');
console.log(inputDOMElement);

// -recuperare il numero di chilometri che l'utente vuole percorrere
//   -selezionare l'elemento input tramite ID
//   -recuperare il valore e lo salvo nella variabile
let inputDOMElement2 = document.getElementById('km');
console.log(inputDOMElement2);

// -definire il prezzo fisso per km (0.21 euro)
//   -assegnare variabile
//   -dichiarare variabile prezzo fisso per km
const priceForKm = 0.21;

// -creare selection se minorenne maggiorenne o over65
//   -selezionare l'elemento input tramite ID
//   -recuperare il valore e lo salvo nella variabile


// -assegnare alla variabile lo sconto minorenni 20%
let percentDiscountUnderage = 20;
// -assegnare alla variabile lo sconto over65 40%
let percentDiscountOver65= 40;
// -calcolo prezzo pieno in base ai km da percorrere
//   -assegnare variabile
//   -dichiarare variabile del prezzo pieno generale
let fullprice;
fullprice = km * priceForKm;
console.log(fullprice);
// -calcolo sconto minorenni 20%
//   -assegnare variabile
//   -dichiarare variabile del prezzo con sconto minorenni
let discountUnderage = (fullprice * percentDiscountUnderage) / 100; 
// -calcolo sconto per over 65 40%
//   -assegnare variabile
//   -dichiarare variabile del prezzo con sconto over 65
let discountOver65 = (fullprice * percentDiscountOver65) / 100; 

let selDOMElement = document.getElementById('fascia');
console.log(selDOMElement.value);


btnDOMElement.addEventListener('click', function () {
  console.log(selDOMElement.value);
  let age = parseFloat(inputDOMElement.value);
  console.log(age);

  let km = parseFloat(inputDOMElement.value);
  console.log(km);

  let fullprice = priceForKm * km;
  console.log(fullprice)
})
// -prezzo finale biglietto
let finalPrice;

//   -SE l'utente è minorenne 
//     -applicare 20% sconto
//   -SE l'utente è over 65 
//     -applicare 40% sconto
//   ALTRIMENTI 
//     non si applica nessuno sconto e il prezzo rimane pieno
if (age < 18) { //se è minorenne applica sconto 20%
  finalPrice = fullprice - discountUnderage;
} else if (age > 65) { //se è over 65 applica sconto 40%
  finalPrice = fullprice - discountOver65;
} else { // se non è nessuno dei due calcolo biglietto prezzo intero senza nessuno sconto
  finalPrice = fullprice;
}

// -aggiungo cifra con massimo due decimali
finalPrice = finalPrice.toFixed(2);
// -aggigunere manipolazione DOM 

// -stmapo in HTML tutte le informazioni dell'utente con anche il prezzo finale


