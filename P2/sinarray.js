console.log("Iniciando calculadora");

display = document.getElementById("display")
suma = document.getElementById("suma")
resta = document.getElementById("resta")
multiplica = document.getElementById("multiplica")
divide = document.getElementById("divide")

igual  = document.getElementById("igual")
clear = document.getElementById("clear")
coma = document.getElementById("coma")
exp = document.getElementById("exp")



let digitos = document.getElementsByClassName('cdigito');

for (i=0; i<digitos.length; i++){
  digitos[i].onclick = (ev) =>{
    digito(ev.target);
  }
}

function digito(boton) {

  if (display.innerHTML == "0") {
    display.innerHTML = boton.value;
  }else {
  display.innerHTML += boton.value;
  }
}
//Tengo que hacer array para todos los operadores

//-- Insertar simbolo de sumar
suma.onclick = () => {
  display.innerHTML += suma.value;
  console.log("Sumamos");
}

//-- Insertar simbolo de restar
resta.onclick = () => {
  display.innerHTML += resta.value;
  console.log("Restamos");
}
//-- Insertar simbolo de división
divide.onclick = () => {
  display.innerHTML += divide.value;
  console.log("Dividimos");
}
//-- Insertar simbolo de multiplicación
multiplica.onclick = () => {
  display.innerHTML += multiplica.value;
  console.log("Multiplicamos");
}
//-- Insertar simbolo de exponencial
exp.onclick = () => {
  display.innerHTML += exp.value;
  console.log("Hacemos exponencial");
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
  console.log("Resultado");
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}
