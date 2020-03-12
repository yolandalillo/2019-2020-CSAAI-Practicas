console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");
//-- Raquetas
ctx.fillStyle = 'white';
ctx.fillRect(50,100, 10, 40)


//----- Dibujar la Bola
ctx.beginPath();
ctx.fillStyle='white';

//-- x,y, anchura, altura
//si x e y ponemos valor 1000 se sale del canvas
ctx.rect(200, 200, 50, 50); //para dibujar cuadrado
ctx.fill();

//repasar lo de dibujar una línea que aún no lo tengo claro
