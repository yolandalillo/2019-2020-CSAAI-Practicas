console.log("Ejecutando JS...");

//--Obtener elementos del DOM
const canvas =  document.getElementById('canvas');
const img = document.getElementById('imagensrc');
const ctx =  canvas.getContext('2d');

//-- Acceso a los deslizadores
const deslizadorR = document.getElementById('deslizadorR');
const deslizadorG = document.getElementById('deslizadorG');
const deslizadorB = document.getElementById('deslizadorB');
 //-- Valores de los deslizadores
const range_valueR = document.getElementById('range_valueR');
const range_valueG = document.getElementById('range_valueG');
const range_valueB = document.getElementById('range_valueB');
//-- Botones
const grises = document.getElementById('grises');
const original = document.getElementById('original');
const negativo = document.getElementById('negativo');
const sepia = document.getElementById('sepia');
const abajo = document.getElementById('abajo');
const reflejo = document.getElementById('reflejo');

var down = false;
var reflex = false;



//-- Función de retrollamada de imagen cargada

img.onload = function () {
  console.log("Imagen cargada");
  //--Tamaño del canvas el mismo que imagen original
  canvas.width = img.width;
  canvas.height =  img.height;
  //--Situar la imagen original en el canvas
  ctx.drawImage(img,0,0);

};

//-- Botón grises
grises.onclick = () => {
  console.log("Escala de grises");
  posicionImagen();
  ctx.drawImage(img, 0,0);
  var brillo = 0;
  //--Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0,0,canvas.width, canvas.height);
  //--Obtener el array con todos los píxeles
  let data = imgData.data;
  //--Calcular brillo para cada pixel
  for (let i = 0; i < data.length; i+=4) {
    brillo = (3*data[i] + 4*data[i+1]+ data[i+2])/8
    data[i] = data[i+1] = data[i+2] = brillo;
  }
  //--Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0,0);

}

//-- Botón original
original.onclick = () => {
    //--Situar la imagen original en el canvas
    console.log("Imagen original");
    posicionImagen();
    ctx.drawImage(img, 0,0);

}

//-- Botón negativo
negativo.onclick = () =>{
  console.log("Imagen negativa");
  posicionImagen();
  ctx.drawImage(img, 0,0);
  //--Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0,0,canvas.width, canvas.height);
  //--Obtener el array con todos los píxeles
  let data = imgData.data;
  for (let i = 0; i < data.length; i+=4) {
    //--Calcular RGB complementario
    red_neg = 255 - data[i];
    green_neg = 255 - data[i+1];
    blue_neg = 255 - data[i+2];

    data[i] = red_neg;
    data[i+1] = green_neg;
    data[i+2] = blue_neg;
  }
  //--Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0,0);
}

//-- Botón sepia
sepia.onclick = () => {
  console.log("Imagen en sepia");
  posicionImagen();
  ctx.drawImage(img, 0,0);
  var luminosidad = 0;
  //--Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0,0,canvas.width, canvas.height);
  //--Obtener el array con todos los píxeles
  let data = imgData.data;
  for (let i = 0; i < data.length; i+=4) {
    //calcula la luminosidad
    luminosidad = .3 * data[i] + .6 * data[i + 1] + .1 * data[i + 2];
		data[i] = Math.min(luminosidad + 40, 255); // rojo
		data[i + 1] = Math.min(luminosidad + 15, 255); // verde
		data[i + 2] = luminosidad; // azul
  }
  //--Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0,0);


}
//-- Botón abajo

abajo.onclick = () => {
  console.log("Imagen boca abajo");
  ctx.drawImage(img, 0,0);
  ctx.translate(0,2*(img.height)/2);
  ctx.scale(1,-1);
  ctx.drawImage(img, 0,0);
  down = true;
}

//--Botón reflejo

reflejo.onclick = () => {
  console.log("Imagen reflejada");
  ctx.drawImage(img, 0,0);
  ctx.translate(2*(img.width)/2,0);
  ctx.scale(-1,1);
  ctx.drawImage(img, 0,0);
  reflex = true;
}

function posicionImagen(){
  if(down == true){
    abajo.onclick();
    down = false;
  }
  if(reflex == true){
    reflejo.onclick();
    reflex = false;
  }
}


function colores() {
  //--Situar la imagen original en el canvas
  ctx.drawImage(img, 0,0);
  //--Mostrar nuevos valores del deslizador
  range_valueR.innerHTML = deslizadorR.value;
  range_valueG.innerHTML = deslizadorG.value;
  range_valueB.innerHTML = deslizadorB.value;
  //--Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0,0,canvas.width, canvas.height);
  //--Obtener el array con todos los píxeles
  let data = imgData.data;
  //--Obtener umbrales
  let umbralR = deslizadorR.value
  let umbralG = deslizadorG.value
  let umbralB = deslizadorB.value
  //--Umbrales
  for (var i = 0; i < data.length; i+=4) {
      if (data[i] > umbralR){
        data[i] = umbralR;
      }
      if (data[i+1] > umbralG){
        data[i+1] = umbralG;
      }
      if (data[i+2] > umbralB){
        data[i+2] = umbralB;
      }
  }
  //--Poner imagen en canvas

  ctx.putImageData(imgData, 0,0);
}

//-- Funcion de retrollamada de los deslizadores
deslizadores.onclick = ()  => {
  ctx.drawImage(img, 0,0);

    deslizadorR.oninput = () => {
      console.log("Deslizador rojo");
      colores();
    }
    deslizadorG.oninput = () => {
      console.log("Deslizador verde");
      colores();
    }
    deslizadorB.oninput = () => {
      console.log("Deslizador azul");
      colores();
    }
}

console.log("Fin...");
