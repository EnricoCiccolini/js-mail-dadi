/* 
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email 
*/

const mail = ['enrico@tiscali.it', 'ciccolini@gmail.com', 'gaetano@aruba.com', 'alessio@yahoo.it', 'stefano@blizard.com', 'prova@prova.com'] // creo un array di email 


const mailCeck = prompt(`Ciao inserisci l email da controllare`)            // chiedo all' utente l email da controllare e la salvo in una variabile 
let control = ('non è presente')                                            // creo una variabile di controllo a cui assegno non presente di default
if( mailCeck === '') console.log (`La tua email  ${control} in lista`)      // creo un controllo per contemplare il caso in cui l-utente lasci il campo vuoto 
    else{
for (let i = 0; i < mail.length; i++) {                                 // creo un ciclo con un idice uguale alle email inserite nella variabile mail 
 
    if (mailCeck === mail[i]) control = (`è presente`)                       //controllo se la  email inserita è presente se presente cambio il valore di controllo
}

console.log(` La tua email  ${control} in lista `)                            // mando un messaggio all' utente riferendo il risultato 
}