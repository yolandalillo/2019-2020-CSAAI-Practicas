console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Obtener Sonidos
const sonido_raqueta =  new Audio("pong-raqueta.mp3");
const sonido_rebote = new Audio("pong-rebote.mp3");
const song =  new Audio("song2.mp3");

//-- Estados del juego
const ESTADO = {
  INIT: 0,
  SAQUE: 1,
  JUGANDO: 2,
}

//-- Variable de estado
//-- Empezamos en el estado inicial
let estado = ESTADO.INIT;

//-- Pintar todos los objetos en el canvas
function draw() {
  //-- Dibujar bola solo en estado jugando
  if (estado == ESTADO.JUGANDO) {
    bola.draw();
  }

  //-- Dibujar la raqueta izquierda
  raqI.draw();
  //--Dibujar la raqueta derecha
  raqD.draw();

  //--------- Dibujar la red
  ctx.beginPath();

  //-- Estilo de la linea: discontinua
  //-- Trazos de 10 pixeles, y 10 de separacion
  ctx.setLineDash([10, 10]);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  //-- Punto superior de la linea. Su coordenada x está en la mitad
  //-- del canvas
  ctx.moveTo(canvas.width/2, 0);

  //-- Dibujar hasta el punto inferior
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  //-- Dibujar texto de saque
  if (estado == ESTADO.SAQUE) {
    ctx.font = "40px Arial";
    ctx.fillStyle = "#BD1C22";
    ctx.fillText("SACA",30,350);
  }
  //-- Dibujar el texto de comenzar
  if (estado == ESTADO.INIT) {
    ctx.font = "40px Arial";
    ctx.fillStyle = "#DA1D23";
    ctx.fillText("PULSA START", 20, 350);
  }
}

//-- Dibujar el tanteo
var ContadorI = 0;
var ContadorD = 0;
function drawCont(){
  ctx.font = "80px fantasy";
  ctx.fillStyle = "white";
  ctx.fillText(ContadorI, 200, 80);
  ctx.fillText(ContadorD, 340, 80);
}

//---- Bucle principal de la animación
function animacion()
{

  //-- Actualizar las posiciones de los objetos móviles

  //-- Actualizar la raqueta con la velocidad actual
  raqI.update();
  raqD.update();

  if (bola.y >= canvas.height) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola.vy = bola.vy * -1;
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }else if (bola.y <= 0 ) {
    bola.vy = bola.vy * -1;
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }
  //-- Si llega al límite izquierdo, hemos perdido
  //-- pasamos al estado de SAQUE
  if (bola.x >= canvas.width) {
     estado = ESTADO.SAQUE;
     bola.init();
     console.log("Tanto!!!!");
     ContadorI++;
     console.log(ContadorI);

  }
  if (bola.x <= (canvas.width<0)){
    estado = ESTADO.SAQUE;
    bola.init();
    console.log("Tanto!!!!");
    ContadorD++;
    console.log(ContadorD);
  }


  //-- Comprobar si hay colisión con la raqueta izquierda
  if (bola.x >= raqI.x && bola.x <=(raqI.x + raqI.width) &&
      bola.y >= raqI.y && bola.y <=(raqI.y + raqI.height)) {
    bola.vx = bola.vx * -1;
    //-- Reproducir sonido
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play();
  }
  //-- Comprobar si hay colisión con la raqueta izquierda
  if (bola.x >= raqD.x && bola.x <=(raqD.x + raqD.width) &&
      bola.y >= raqD.y && bola.y <=(raqD.y + raqD.height)) {
    bola.vx = bola.vx * -1;
    //-- Reproducir sonido
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play();
  }


  //-- Actualizar coordenada x de la bola, en funcion de
  //-- su velocidad
  bola.update()

  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  drawCont();
  draw();
  //window.requestAnimationFrame(animacion);
}

//-- Inicializa la bola: Llevarla a su posicion inicial
const bola = new Bola(ctx);
//bola.init();
//-- Crear las raquetas
const raqI = new Raqueta(ctx);
const raqD = new Raqueta(ctx);

//-- Cambiar las coordenadas de la raqueta derecha
raqD.x_ini = 540;
raqD.y_ini = 300;
raqD.init();

//-- Arrancar la animación
//animacion();
//-- Arrancar la animación
setInterval(()=>{
  animacion();
},16);


//-- Retrollamada de las teclas
window.onkeydown = (e) => {

  switch (e.key) {
    case "ArrowDown":
      raqI.v = raqI.v_ini;
      break;
    case "ArrowUp":
      raqI.v = raqI.v_ini * -1;
      break;
    case "q":
      raqD.v = raqD.v_ini;
      break;
    case "a":
      raqD.v = raqD.v_ini * -1;
      break;
    case " ":
      //-- El saque solo funciona en estado SAQUE
      if (estado == ESTADO.SAQUE) {
        //-- Reproducir sonido
        sonido_raqueta.currentTime = 0;
        sonido_raqueta.play();
        //-- Llevar bola a su posicion incicial
        bola.init();
        //-- Darle velocidad
        bola.vx = bola.vx_ini;
        bola.vy = bola.vy_ini;
        //-- Cambiar al estado de jugando!
        estado = ESTADO.JUGANDO;

        return false;
      }
    default:
  }
}

//-- Retrollamada de la liberacion de teclas
window.onkeyup = (e) => {
  //--Mirar si puedo poner los dos if en uno o da error
  if (e.key == "ArrowDown" || e.key == "ArrowUp"){
    //-- Quitar velocidad de la raqueta
    raqI.v = 0;
  }
  if (e.key == "q" || e.key == "a") {
    raqD.v = 0;
  }
}
//-- Botón de arranque
const start = document.getElementById("start");

start.onclick = () => {
  song.play();

  estado = ESTADO.SAQUE;
  console.log("SAQUE!");
  canvas.focus();
}

//-- Boton de stop
const stop = document.getElementById("stop");

stop.onclick = () => {
  //-- Volver al estado inicial
  song.pause();
  estado = ESTADO.INIT;
  bola.init();
  start.disabled = false;
}
