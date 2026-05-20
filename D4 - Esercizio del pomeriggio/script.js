/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — area
   Funzione area(l1, l2) che ritorna l1 * l2.
   Stampa area(3, 4).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  return l1 * l2;
}

console.log(area(3, 4));

/* ESERCIZIO 2 — sommaPazza
   Funzione sommaPazza(a, b): ritorna a + b.
   Se a === b: ritorna (a + b) * 3.
   Prova con (2, 3) e (4, 4).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function sommaPazza(a, b) {
  if (a === b) {
    return (a + b) * 3;
  }
  return a + b;
}

console.log(sommaPazza(2, 3));
console.log(sommaPazza(4, 4));

/* ESERCIZIO 3 — distanzaDa19
   Funzione distanzaDa19(n): ritorna Math.abs(n - 19).
   Se n > 19: ritorna distanza * 3.
   Prova con 5 e 25.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function distanzaDa19(n) {
  let distanza = Math.abs(n - 19);
  if (n > 19) {
    return distanza * 3;
  }
  return distanza;
}

console.log(distanzaDa19(5));
console.log(distanzaDa19(25));

/* ESERCIZIO 4 — dentroIntervallo
   Funzione dentroIntervallo(n):
   true se n è tra 20 e 100 (compresi) oppure è esattamente 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function dentroIntervallo(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  }
  return false;
}

console.log(dentroIntervallo(25));
console.log(dentroIntervallo(15));
console.log(dentroIntervallo(400));

/* ESERCIZIO 5 — epify
   Funzione epify(testo): aggiunge "EPICODE " davanti.
   Se il testo comincia già con "EPICODE", lo lascia invariato.
   Usa startsWith.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(testo) {
  if (testo.startsWith("EPICODE")) {
    return testo;
  }
  return "EPICODE" + testo;
}
console.log(epify("mimmo"));
console.log(epify("EPICODE mimmo"));

/* ESERCIZIO 6 — divisibilePer3o7
   Funzione divisibilePer3o7(n): true se n positivo E divisibile per 3 O per 7.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function divisibilePer3o7(n) {
  if (n > 0 && (n % 3 === 0 || n % 7 === 0)) {
    return true;
  }
  return false;
}
console.log(divisibilePer3o7(84));
console.log(divisibilePer3o7(21));
console.log(divisibilePer3o7(-3));

/* ESERCIZIO 7 — invertiStringa
   Funzione invertiStringa(testo): ritorna la stringa invertita.
   Vincolo: niente .reverse() di array.
   Suggerimento: split("") + for al contrario + join("").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function invertiStringa(testo = "") {
  let testoInv = testo.split("");
  let testoInvertito = [];

  for (let i = testoInv.length - 1; i >= 0; i--) {
    testoInvertito.push(testoInv[i]);
  }

  return testoInvertito.join("");
}

console.log(invertiStringa("Epicode"));
console.log(invertiStringa("Lorenzo"));

/* ESERCIZIO 8 — inizialiMaiuscole
   Funzione inizialiMaiuscole(frase): metti in maiuscolo la prima lettera di ogni parola.
   "ciao mondo" → "Ciao Mondo".
   Suggerimento: split(" ") + for + slice(0,1).toUpperCase() + slice(1) + join(" ").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const inizialiMaiuscole = function (frase) {
  const words = frase.split(" ");
  const result = [];
  for (const word of words) {
    const firstLetter = word.slice(0, 1).toUpperCase(); // parti dalla posizione 0 e togli una lettera, la prima
    const remain = word.slice(1); // parti dalla seconda lettera e tira fuori tutto il resto
    result.push(firstLetter + remain);
  }
  return result.join(" ");
};

console.log(inizialiMaiuscole("mimmo claudio e franco"));
/* ESERCIZIO 9 — togliPrimoEUltimo
   Funzione togliPrimoEUltimo(testo): rimuovi primo e ultimo carattere.
   Usa slice. Prova con "EPICODE".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const togliPrimoEUltimo = function (testo = "") {
  return testo.slice(1, testo.length - 1);
};

console.log(togliPrimoEUltimo("EPICODE"));

/* ESERCIZIO 10 — dammiCasuali
   Funzione dammiCasuali(n): ritorna un array di n numeri interi casuali tra 0 e 10 (inclusi).
   Usa Math.random e Math.floor.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*function dammiCasuali(n) {
  const casualNumbers = [];
  for (let i = 0; i < n; i++) {
    casualNumbers = Math.floor(Math.random() * 11);
    casualNumbers.push(Math.floor(Math.random() * 11));
  }
  return casualNumbers;
}
console.log(dammiCasuali(10));
*/
/* --EXTRA-- ESERCIZIO 11 — etaInGiorni
   Funzione etaInGiorni(annoNascita, meseNascita, giornoNascita).
   Ritorna l'età in giorni rispetto a oggi.
   - new Date() per oggi
   - new Date(anno, mese - 1, giorno) per la nascita (mese 0-based!)
   - oggi - nascita = millisecondi
   - dividi per 1000 * 60 * 60 * 24 e Math.floor per i giorni interi
   Stampa: "Hai X giorni!"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const etaInGiorni = function (annoNascita, meseNascita, giornoNascita) {
  const todayDate = new Date();
  const birthDay = new Date(annoNascita, meseNascita - 1, giornoNascita);
  const millisecondi = todayDate - birthDay;
  const daysFromBirth = Math.floor(millisecondi / (1000 * 60 * 60 * 24));
  console.log(`'Hai ${daysFromBirth} giorni!'`);
};

etaInGiorni(1996, 04, 25);

// Esercizio di quanti gatti in file ci sono
const gatti = function (a, b) {
  const file = Math.ceil(a / b);
  const gattimancanti = a % b;
  console.log(gattimancanti);
  console.log(file);
  return { file, gattimancanti };
};

console.log(gatti(44, 6));

// Esercizio conta il tempo
const conversioneSecondiOre = function (secondi) {
  const ore = Math.floor(secondi / (60 * 60));
  const minuti = Math.floor((secondi % 3600) / 60);
  const sec = secondi % 60;

  console.log(`${ore} ore, ${minuti} minuti, ${sec} secondi`);
};

conversioneSecondiOre(12560);

// //
// const casuale = function (n) {
//   return Math.floor(Math.random() * n + 1);
// };
// console.log(casuale(4));
// for (let i = 0; i < 10; i++) {
//   console.log(casuale(4));
// }

/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3
  
  http://www.imparareaprogrammare.it
*/

const a = 1, b = 2, c = 3, d = 4, e = 5;
const somma = a + b + c + d + e;
const media = somma / 5;
console.log(`somma = ${somma}, media = ${media}`);
