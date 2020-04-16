//--https://giphy.com/explore/la-casa-de-papel
//--url para descargar gifs utiles para mi practica

//--Mirar S6 donde hay ejemplos de autoreproduccion, video con controles,
//--control desde js, youtube.
console.log("Ejecutando JS...");

//--Obtener elemento de vído y configurarlo
const video1 =  document.getElementById("video1")
video1.width = 300; //--Tamaño de la pantalla de video
video1.height = 200;

const video2 = document.getElementById("video2");
video2.width = 300; //--Tamaño de la pantalla de video
video2.height = 200;

const video3 = document.getElementById("video3");
video3.width = 300; //--Tamaño de la pantalla de video
video3.height = 200;

const video4= document.getElementById("video4");
video4.width = 600;
video4.height = 500;
//--Obtener los botones

video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"

video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"

video3.src="https://github.com/yolandalillo/mis_recursos/raw/master/video1.mp4"

video4.poster ="https://github.com/yolandalillo/mis_recursos/raw/master/descarga.png";


play1.onclick = () =>{
  console.log("Click video 1");
  video4.src= video1.src;
  video4.currentTime = video1.currentTime;

};
play2.onclick = () =>{
  console.log("Click video 1");
  video4.src= video2.src;
  video4.currentTime = video2.currentTime;

};
play3.onclick = () =>{
  console.log("Click video 1");
  video4.src= video3.src;
  video4.currentTime = video3.currentTime;

};
