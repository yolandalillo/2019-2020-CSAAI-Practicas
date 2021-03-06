console.log("Ejecutando JS...");

//--Obtener elementos del DOM
const canvas =  document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx =  canvas.getContext('2d');

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {
  //--Se establece como tamaño del canvas el mismo
  //--que el de la imagen original
  canvas.width = img.width;
  canvas.height =  img.height;

  //--Situar la imagen original en el canvas
  //--No se han hecho manipulaciones todavía
  ctx.drawImage(img,0,0);
};

//--Función de retrollamada del deslizador
deslizador.oninput = () => {
  //--Mostrar el nuevo valor del deslizador
  range_value.innerHTML = deslizador.value;

  //--Situar la imagen original en el canvas
  //--No se han hecho manipulaciones todavia
  ctx.drawImage(img,0,0);

  //--obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //--Obtener el array con todos los píxeles
  let data = imgData.data

  //--obtener el umbral de rojo del deslizador
  umbral = deslizador.value

  //--filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral) {
      data[i] = umbral;
    }
  }
  //--poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0,0);
}
console.log("Fin...");
