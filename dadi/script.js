/* 
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let computer 
let player                          // dichiaro le variabili in cui ospiero i numeri casuali

computer = Math.random () *(6 - 1 + 1 ) +1                              // creo il tiro casuale per il banco
computer = parseInt(computer)                                       // lo trasformo in numeri senza la virgola
console.log(`Il banco ha tirato ${computer}`)                       // dichiaro all ' utente uanto ha fatto il banco 


player = Math.random () *(6 - 1 + 1 ) +1                                 // creo il tiro casuale per l utente 
player = parseInt(player)                                            // lo trasformo in numero senza la virgola 
console.log(`Il giocatore ha tirato ${player}`)                      // dichiaro all ' utente uanto ha fatto il banco 

if(computer > player) console.log(` il banco ha vinto `)              // confronto i due risultati se a secodso di chi ha fatto il tiro maggiore inoltro il risultato 
else if (player > computer) console.log(` il giocatore ha vinto `)
else console.log(` PAREGGIO `)                                         // contemplo anche il pareggio nelle ipotesi