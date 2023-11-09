'use strict';

/*
- Chiedi all’utente la sua email,
<creare un prompt per chiedere l'email>
  controlla che sia nella lista di chi può accedere,
<crea un gruppo di array>
  stampa un messaggio appropriato sull’esito del controllo.
<If miaEmail è all'interno dell'array allore fai consol.log"></crea>
*/

const authorizedEmails = [
  'mia@gmail.com',
  'tua@gmail.com',
  'sua@gmail.com',
  'nostra@gmail.com',
  'vostra@gmail.com',
  'loro@gmail.com',
];

const email = prompt('Inserisci la tua email:');
var resultMessage = document.createElement('p');
resultMessage.setAttribute('id', 'resultMessage');
var isAuthorized = false;

for (var i = 0; i < authorizedEmails.length; i++) {
  if (userInput === authorizedEmails[i]) {
    isAuthorized = true;
    break;
  }
}

if (isAuthorized) {
  resultMessage.innerText =
    "Accesso consentito per l'utente con l'email " + userInput + '.';
  resultMessage.classList.add('success');
} else {
  resultMessage.innerText =
    "Accesso negato per l'utente con l'email " + userInput + '.';
  resultMessage.classList.add('failure');
}

document.getElementById('container').appendChild(resultMessage);
