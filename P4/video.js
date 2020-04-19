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
video4.width = 820;
video4.height = 500;

//--Obtener los botones
imagen.src="https://github.com/yolandalillo/mis_recursos/raw/master/pruebas.jpg"

video4.poster ="https://github.com/yolandalillo/mis_recursos/raw/master/cb.jpg";

video1.src="https://github.com/yolandalillo/mis_recursos/raw/master/casapap1.mp4"

video2.src="https://github.com/yolandalillo/mis_recursos/raw/master/casapap2.mp4"

video3.src="https://github.com/yolandalillo/mis_recursos/raw/master/casapap3.mp4"

play1.onclick = () =>{
  console.log("Click video 1");
  video4.poster = false;
  video1.style.border = 'dotted #DA1D23'
  video2.style.border = null;
  video3.style.border = null;
  imagen.style.border = null;
  video4.src= video1.src;
  video4.muted = false;
  video4.currentTime = video1.currentTime;

};

play2.onclick = () =>{
  console.log("Click video 1");
  video4.poster = false;
  video2.style.border = 'dotted #DA1D23'
  video1.style.border = null;
  video3.style.border = null;
  imagen.style.border = null;
  video4.src= video2.src;
  video4.muted = false;
  video4.currentTime = video2.currentTime;

};
play3.onclick = () =>{
  console.log("Click video 1");
  video4.poster = false;
  video3.style.border = 'dotted #DA1D23'
  video2.style.border = null;
  video1.style.border = null;
  imagen.style.border = null;
  video4.src= video3.src;
  video4.muted = false;
  video4.currentTime = video3.currentTime;

};

play4.onclick = () =>{
  video4.poster = imagen.src;
  imagen.style.border = 'dotted #DA1D23'
  video3.style.border = null;
  video2.style.border = null;
  video1.style.border = null;
  video4.src = null;
}
