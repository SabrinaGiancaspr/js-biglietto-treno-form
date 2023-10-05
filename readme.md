# calcolo del prezzo del biglietto del treno

-creare un input HMTL 

-chiedere all'utente l'età 
  -assegnare variabile
  -dichiarare variabile con indicata l'età

-recuperare l'età dell'utente 
  -selezionare l'elemento input tramite ID
  -recuperare il valore e lo salvo nella variabile

-chiedere il numero di chilometri che l'utente vuole percorrere
  -assegnare variabile
  -dichiarare variabile con indicati i km da percorrere

-recuperare il numero di chilometri che l'utente vuole percorrere
  -selezionare l'elemento input tramite ID
  -recuperare il valore e lo salvo nella variabile

-definire il prezzo fisso per km (0.21 euro)
  -assegnare variabile
  -dichiarare variabile prezzo fisso per km

-assegnare alla variabile lo sconto minorenni 20%

-assegnare alla variabile lo sconto over65 40%

-calcolo prezzo pieno in base ai km da percorrere
  -assegnare variabile
  -dichiarare variabile del prezzo pieno generale

-calcolo sconto minorenni 20%
  -assegnare variabile
  -dichiarare variabile del prezzo con sconto minorenni

-calcolo sconto per over 65 40%
  -assegnare variabile
  -dichiarare variabile del prezzo con sconto over 65

-calcolo biglietto prezzo intero in caso non dovessero essere applicati nessuno sconto
  -assegnare variabile
  -dichiarare variabile del prezzo pieno generale

-prezzo finale biglietto
  -SE l'utente è minorenne 
    -applicare 20% sconto
  -SE l'utente è over 65 
    -applicare 40% sconto
  ALTRIMENTI 
    non si applica nessuno sconto e il prezzo rimane pieno

-aggiungo cifra con massimo due decimali

-aggigunere manipolazione DOM 

-stmapo in HTML tutte le informazioni dell'utente con anche il prezzo finale




