console.log("Iniciando calculadora");

display = document.getElementById("display")
igual  = document.getElementById("igual")
clear = document.getElementById("clear")
coma = document.getElementById("coma")



let digitos = document.getElementsByClassName('cdigito');
let operadores = document.getElementsByClassName('operador')

for (i=0; i<digitos.length; i++){
  digitos[i].onclick = (ev) =>{
    digito(ev.target);
  }
}

for (i=0; i<operadores.length; i++){
  operadores[i].onclick = (ev) =>{
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

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
  console.log("Resultado");
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}
