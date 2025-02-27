/* 
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

bonus Invece di generare il numero random per l'utente, chiedilo con un prompt!
*/

let computer                                    // dichiaro le variabili in cui ospiero il numero casuale
let player                                      // dichiaro la variabile in cui ospitero il numero dell' utente 

computer = Math.random () *(6 - 1 +1 ) +1                              // creo il tiro casuale per il banco
computer = parseInt(computer)                                       // lo trasformo in numeri senza la virgola
console.log(`Il banco ha tirato ${computer}`)                       // dichiaro all ' utente uanto ha fatto il banco 


player = prompt(`inserisci un numero da 1 a 6`)                      // chiedo all'utente un numero da 1 a 6
player = parseInt(player)                                            // controllo che sia un numero intero trasformandolo in numero senza virgola 

if(isNaN(player)) console.log(`il numero inserito non è valido` )      // se il valore è nan dico che il valore non è valido 
    else{                                                               // se è valido continuo con il programma 
        if(computer > player) console.log(` il banco ha vinto `)              // confronto i due risultati se a secodso di chi ha fatto il tiro maggiore inoltro il risultato 
        else if (player > computer) console.log(` il giocatore ha vinto `)
        else console.log(` PAREGGIO `)                                         // contemplo anche il pareggio nelle ipotesi

}