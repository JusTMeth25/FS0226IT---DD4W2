function sum() {
  let a = 2;
  let b = 3;
  return a + b;
}
console.log(sum());

function newSum() {
  let a = 5;
  return a + sum();
}
console.log(newSum());

const moltiplicazione = function (num1, num2) {
  return num1 * num2;
};

console.log(moltiplicazione(3, 4));

// Piccolo flusso di programma

const regard = function (name = "Non so chi salutare") {
  print(name);
};

// Controllo semaforico
const checkError = function (name) {
  if (name === "Non so chi salutare") {
    return false;
  }
  return true;
};

const print = function (name) {
  if (checkError(name)) {
    document.querySelector("#saluta").textContent += name;
  } else {
    document.getElementById("saluta").textContent = name;
  }
};

regard("Lorenzo");

const listElements = document.querySelectorAll("#firstList li");
console.log(listElements);

const colorElements = function () {
  for (let i = 0; i < listElements.length; i++) {
    listElements[i].classList.add("listElements"); // classList.add ancora non abbiamo visto
  }
};
colorElements();

// Closure

function creaContatore() {
  let count = 0;
  let increment = 1;
  return function () {
    count++;
    increment = increment * 2;
    return `Il valore di count è ${count}, il valore di increment è (${increment})`;
  };
}

const contatore = creaContatore();
const count = document.querySelector("#count");

for (let i = 0; i < 8; i++) {
  count.innerHTML += `<li>${contatore()}</li>`;
}

let myName = "Lorenzo Melis Melis";
console.log(myName.includes("Mel"));
console.log(myName.indexOf("li"));
console.log(myName.slice(6, 10));

const myNameArray = myName.split(" ");
console.log(myNameArray);

let myNameJoined = myNameArray.join().replaceAll(",", " "); // sostituisci le virgole con lo spazio
console.log(myNameJoined);

const today = new Date();
console.log(today);
//console.log(today).getDate(),today.getMonth(),today.getFullYear();

const myBirthday = new Date(1997,03,25);
console.log(myBirthday);

// Math
let myAbs = Math.abs (3.15);
console.log(myAbs);


// Numero casuale da 1 a 10
let myCasualNumeber = Math.floor(Math.random() * 11);
console.log(myCasualNumeber);
//let myCasualNumeber = Math.floor(Math.random() * 10) + 1;
//console.log(myCasualNumeber);

function filtraPerCatgegoria (lista, categoria) {
    const trovati = [];
    for (const p of lista) {
        if (p.categoria === categoria) trovati.push(p);
    }
    return trovati;
}


// Inizio codice prof. 

function sum() {
	let a = 2;
	let b = 3;
	return a + b;
}

function newSum() {
	let a = 5;
	return a + sum();
}

console.log(newSum());

const moltiplicazione = function (num1, num2) {
	// PARAMETRI
	return num1 * num2;
};

console.log(moltiplicazione(3, 5)); // ARGOMENTI
console.log(moltiplicazione(8, 4));
console.log(moltiplicazione(2, 6));
console.log(moltiplicazione('Pippo', 5));

// Piccolo flusso di programms

const regard = function (name = 'Non so chi salutare') {
	print(name);
};

const checkError = function (name) {
	if (name === 'Non so chi salutare') {
		return false;
	}
	return true;
};

const print = function (name) {
	if (checkError(name)) {
		document.querySelector('#saluta').textContent += name;
	} else {
		document.getElementById('saluta').textContent = name;
	}
};

regard('Angelo');

const listElements = document.querySelectorAll('#firstList li');
console.log(listElements);

const colorElements = function () {
	for (let i = 0; i < listElements.length; i++) {
		listElements[i].classList.add('listElements');
	}
};

colorElements();

// Closure
function creaContatore() {
	let count = 0;
	let increment = 1;
	return function () {
		count++;
		increment = increment * 2;
		return `Il valore di count è ${count}, il valore di increment è (${increment})`;
	};
}

const contatore = creaContatore();
const count = document.querySelector('#count');

for (let i = 0; i < 8; i++) {
	count.innerHTML += `<li>${contatore()}</li>`;
}

let myName = 'Dario Del Giudice';
console.log(myName.includes('Del'));
console.log(myName.includes('Pippo'));
console.log(myName.indexOf('De'));
console.log(myName.slice(6, 10));
console.log(myName.slice(6));
console.log(myName.slice(-8, -1));

const myNameArray = myName.split(' ');
console.log(myNameArray);

let myNameJoined = myNameArray.join().replaceAll(',', ' ');
console.log(myNameJoined);

const today = new Date();
console.log(today);
console.log(today.getDate(), today.getMonth(), today.getFullYear())

const myBirthDay = new Date(1967, 9, 20);
console.log(myBirthDay);

// Math
let myAbs = Math.abs(-12);
console.log(myAbs);

let myMaxNumber = Math.max(12, 21, 3);
console.log(myMaxNumber);

// Numero casuale da 1 a 10
let myCasualNumber = Math.floor(Math.random() * 10) + 1;
console.log(myCasualNumber);