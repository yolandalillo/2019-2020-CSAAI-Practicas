console.log("Ejecutando JS...");

display = document.getElementById("display")
//eliminamos boton1 y boton2 porque ya no tenemos el id
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

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
