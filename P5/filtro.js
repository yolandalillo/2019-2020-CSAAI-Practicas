console.log("Ejecutando JS...");

//--Obtener elementos del DOM
const canvas =  document.getElementById('canvas');
const img = document.getElementById('imagensrc');
const ctx =  canvas.getContext('2d');

//-- Acceso a los deslizadores
 deslizadorR = document.getElementById('deslizadorR');
 deslizadorG = document.getElementById('deslizadorG');
 deslizadorB = document.getElementById('deslizadorB');
 //-- Valores de los deslizadores
 range_valueR = document.getElementById('range_valueR');
 range_valueG = document.getElementById('range_valueG');
 range_valueB = document.getElementById('range_valueB');
 escalagrises = document.getElementById('boton1');
 botonoriginal = document.getElementById('botonoriginal');

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {
  console.log("Imagen cargada");
  //--Se establece como tamaño del canvas el mismo
  //--que el de la imagen original
  canvas.width = img.width;
  canvas.height =  img.height;
  //--Situar la imagen original en el canvas
  //--No se han hecho manipulaciones todavía
  ctx.drawImage(img,0,0);

  //--Obterner la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0,0,canvas.width, canvas.height);

  //--Obtener el array con todos los píxeles
  let data = imgData.data

  //--Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0,0);

};
console.log("Fin...");
