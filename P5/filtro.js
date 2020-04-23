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
const grises = document.getElementById('grises');
const colores = document.getElementById('colores');

//-- Función de retrollamada de imagen cargada

img.onload = function () {
  console.log("Imagen cargada");
  //--Tamaño del canvas el mismo que imagen original
  canvas.width = img.width;
  canvas.height =  img.height;
  //--Situar la imagen original en el canvas
  ctx.drawImage(img,0,0);

};

grises.onclick = () => {
  console.log("Escala de grises");
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

colores.onclick = () => {
  //--Situar la imagen original en el canvas
  ctx.drawImage(img, 0,0);
  range_valueR.innerHTML = deslizadorR.value;
  range_valueG.innerHTML = deslizadorG.value;
  range_valueB.innerHTML = deslizadorB.value;

  //-- Funcion de retrollamada de los deslizadores
  deslizadorR.oninput = () => {

  }
  deslizadorB.oninput = () => {

  }
  deslizadorB.oninput = () => {

  }
}

console.log("Fin...");
