console.log("Iniciando calculadora");

display = document.getElementById("display")
suma = document.getElementById("suma")
resta = document.getElementById("igual")
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

//-- Insertar simbolo de sumar
suma.onclick = () => {
  display.innerHTML += suma.value;
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}
