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
    listElements[i].style.color = "red";
  }
};
colorElements();
