'use strict';

/*
- Chiedi all’utente la sua email,
<creare un prompt per chiedere l'email>
  controlla che sia nella lista di chi può accedere,
<crea un gruppo di array>
  stampa un messaggio appropriato sull’esito del controllo.
<If miaEmail è all'interno dell'array allore fai consol.log"></crea>
*/

const email = [
  'mia@gmail.com',
  'tua@gmail.com',
  'sua@gmail.com',
  'nostra@gmail.com',
  'vostra@gmail.com',
  'loro@gmail.com',
];

const tuaEmail = prompt('Inserisci la tua email:');

let accesso = false;
for (let i = 0; i < email.length; i++) {
  if (tuaEmail === email[i]) {
    accesso = true;
    console.log('stessa email');
    break;
  }
}

const messaggio = document.createElement('p');
if (accesso) {
  messaggio.innerHTML = 'Accesso consentito a  ' + tuaEmail;
  console.log('Accesso consentito');
} else {
  messaggio.innerHTML = 'Accesso non consentito a ' + tuaEmail;
  console.log('Accesso non consentito');
}

const container = document.getElementById('container');
container.append(messaggio);
