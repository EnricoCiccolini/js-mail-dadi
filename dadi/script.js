/* 
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let computer 
let player                          // dichiaro le variabili in cui ospiero i numeri casuali

computer = Math.random () *(6 - 1 ) +1
computer = parseInt(computer)
console.log(computer)