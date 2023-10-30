// # calcolo del prezzo del biglietto del treno

// km utente da percorrere
let km;
let inputDOMElementKm = document.getElementById('km');
console.log(inputDOMElementKm);
 let final = document.querySelector('.final-price')

// prezzo per km 
let priceForKm;
priceForKm = 0.21;


  
// bottone hmtl 

const btnDOMElement = document.getElementById('btn-calc')
// console.log(btnDOMElement);

// percentuale 20% 
let percentDiscountUnderage = 20;

// percentuale 40% 
let percentDiscountOver65 = 40;

// selection html 
let selDOMElement = document.getElementById('fascia');
// console.log(selDOMElement.value);

btnDOMElement.addEventListener('click', function () {

  // Mi recupero il valore dei km
  km = parseFloat(inputDOMElementKm.value);
  // console.log(km);

   // -calcolo prezzo totale base
let fullprice = km * priceForKm;
// console.log('prezzo totale', fullprice)

  // Mi recupero o valori dei vari input
  // console.log(selDOMElement.value);

  // Mi devo recuperare lo sconto da applicare eventualmente
  let fasciaValue = selDOMElement.value;


  // Se fasciaValue è uguale a 0 applico lo sconto 20
  if (fasciaValue == 0) { // Minorenne
    // calcolo lo sconto
    let discountUnderage = (fullprice * percentDiscountUnderage) / 100;
    // calcolo il prezzo finale
    finalPrice = fullprice - discountUnderage;
  } else if (fasciaValue == 2) { // Se fasciaValue è uguale a 2 applico lo sconto 40
    let discountOver65 = (fullprice * percentDiscountOver65) / 100;
    finalPrice = fullprice - discountOver65;
  } else {
    finalPrice = fullprice;
  }

  // -aggiungo cifra con massimo due decimali
  finalPrice = finalPrice.toFixed(2);
console.log(finalPrice)
  // Aggiorno l'innerHTML della pagina con il prezzo finale
  final.innerHTML= ` prezzo finale: ${finalPrice}  ` 
})

