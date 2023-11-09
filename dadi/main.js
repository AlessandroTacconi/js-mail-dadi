/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
<creare due numeri randomici con Math.random()>
Stabilire il vincitore, in base a chi fa il punteggio più alto.
<If numero1 è maggiore di numero2 "giocatore vince">
<If numero1 è minore di numero2 "computer vince">
<If numero1 è uguale a numero due "è patta">
*/

let giocatore = Math.floor(Math.random() * 6) + 1;
let computer = Math.floor(Math.random() * 6) + 1;
let testoRisultato;

console.log('Il punteggio del giocatore è: ' + giocatore);
console.log('Il punteggio del computer è: ' + computer);

if (giocatore > computer) {
  console.log('Hai vinto :)');
  testoRisultato = 'Hai vinto :)';
} else if (giocatore < computer) {
  console.log('Hai perso :(');
  testoRisultato = 'Hai perso :(';
} else if (giocatore === computer) {
  console.log('Hai pareggiato, prova ancora!');
  testoRisultato = 'Hai pareggiato, prova ancora!';
}

document.querySelector('.risultato-giocatore').innerHTML = giocatore;
document.querySelector('.risultato-computer').innerHTML = computer;
document.querySelector('esito').innerHTML = testoRisultato;
