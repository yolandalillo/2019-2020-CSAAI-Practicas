//Mensaje para comprobar que inicia nuestro js
console.log("Iniciando calculadora");
//Variables
display = document.getElementById("display")
igual  = document.getElementById("igual")
clear = document.getElementById("clear")
coma = document.getElementById("coma")
//variables de alcance local
let digitos = document.getElementsByClassName('cdigito');
let operadores = document.getElementsByClassName('operador')

//Bucle con array para los digitos del 0 al 9
for (i=0; i<digitos.length; i++){
  digitos[i].onclick = (ev) =>{
    digito(ev.target);
  }
}

//Bucle con array para los operadores +,-,*,/,^
for (i=0; i<operadores.length; i++){
  operadores[i].onclick = (ev) =>{
    digito(ev.target);
  }
}

//funcion para eliminar cero al principio del display
function digito(boton) {

  if (display.innerHTML == "0") {
    display.innerHTML = boton.value;
  }else {
  display.innerHTML += boton.value;
  }
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
