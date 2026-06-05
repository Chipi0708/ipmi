let anguloRotacion = 0;
let TodosAlCentro = 0;
let TodosAfuera = 0;

function setup() {
  createCanvas(800, 480);
  rectMode(CENTER);
}

function draw() {

  actualizarInteracciones();

  let colorFondo = calcularColorFondo();
  background(colorFondo);

  translate(width / 2, height / 2);


  // ==========================================
  // FIGURA CAPA FONDO IZQUIERDA
  // ==========================================
  
  //Posición y rotación
let izqX = lerp(-120, 0, TodosAlCentro); 
//"-120" es su posición(X) normal, al ejecutar TodosAlCentro, la posición cambia a "0"
//no cambia de forma inmediata, sino que hay un recorrido visible gracias al "lerp"
izqX = lerp(izqX, -350, TodosAfuera);
// lo mismo, el destino de la figura es "-350"
let izqY = 0;

                 //Dibujo
let MovFondoIzq =sin(frameCount * 0.03) * 10; //Respiración
  push();
  translate(izqX + MovFondoIzq,izqY);
 rotate(anguloRotacion);
 stroke(0);
 strokeWeight(2);

  for (let i = -120; i <= 130; i += 8) {
let achique = map(i, -50, 220, 0, 80);
let y1 = -220 + achique;
let y2;

if (i < 0) {
      y2 = 220;} else {
      let achiqueAbajo = map(i, 0, 120, 0, 80);
      y2 = 220 - achiqueAbajo;
    }
line(i, y1, i, y2);
  }

  pop();

  // ==========================================
  // FIGURA CAPA FONDO DERECHA
  // ==========================================
              //Posición y rotación:
   
let derX = lerp(120, 0, TodosAlCentro);
derX = lerp(derX, 350, TodosAfuera);

let derY = 0;
                //Dibujo
   let MovFondoDerecha =sin(frameCount * 0.03) * 10;
  push();
translate(derX + MovFondoDerecha, derY);// 
rotate(anguloRotacion);
stroke(0);
strokeWeight(2);

  for (let i = -120; i <= 130; i += 8) {
 let achique = map(i, 130, -120, 0, 80);
let y2 = 220 - achique;
    let y1;
 
 if (i > 0) {
      y1 = -220;
    } else {
      let achiqueArriba = map(i, 0, -120, 0, 80);
      y1 = -220 + achiqueArriba;
    }
line(i, y1, i, y2);
  }
pop();
 // ==========================================
  // FIGURA CAPA INTERMEDIA ARRIBA/SUPERIOR
  // ==========================================
  
   //Posición y rotación
   
  let supX = lerp(40, 0, TodosAlCentro);
let supY = lerp(-120, 0, TodosAlCentro);
supY = lerp(supY, -300, TodosAfuera);

                //Dibujo
  let movArriba =sin(frameCount * 0.06) * 10; //Respiración   
 push();
 translate(supX, supY+ movArriba);// respiracion verticalmente
rotate(anguloRotacion);
stroke(0);
 strokeWeight(5);

  for (let i = -240; i <= 100; i += 10) {
line(i + 80,-90,i,120);
  }
pop();

  // ==========================================
  // FIGURA CAPA INTERMEDIA ABAJO/INFERIOR
  // ==========================================
             //Posición y rotación:
   
  let infX = lerp(40, 0, TodosAlCentro);

let infY = lerp(90, 0, TodosAlCentro);
infY = lerp(infY, 300, TodosAfuera);

                //Dibujo
 let MovAbajo =sin(frameCount * 0.06) * 10; //Respiración               
 push();
translate(infX, infY- MovAbajo);
rotate(anguloRotacion);
stroke(0);
strokeWeight(5);

  for (let i = -240; i <= 100; i += 10) {
line(i + 80, -90,i, 120);
  }
pop();
  // ==========================================
  // CENTRO
  // ==========================================
               //Posición y rotación
   
  let cenX = 0;
let cenY = 0;

                //Dibujo
let MovCentro =sin(frameCount * 0.06) * 10; //Respiración 
 push();
translate(cenX, cenY+ MovCentro);
rotate(-anguloRotacion);
stroke(0);
strokeWeight(9);

  for (let i = -90; i <= 90; i += 13) {
  line( i,-90,i,85);
  }
 pop();
}

// =====================================================
// INTERACCIONES
// S=Shhhhh= Todas las capas al centro
// A= AHHHHHHH= Todas las capas se dispersan
// Voz grave= Giro a la izquierda y color rosa
// Voz aguda: Giro a la derecha y color azul
// =====================================================

function actualizarInteracciones() {
let destinoAngulo =
    map(mouseX, 0, width, -30, 30);
      anguloRotacion =
       lerp(anguloRotacion, radians(destinoAngulo),0.1);

  // -------------------------
  // TECLA S
  // -------------------------

  if (keyIsPressed && (key === 's' || key === 'S')) {

  TodosAlCentro =
  //lerp(valorActual, valorDestino, velocidad)
  // el tercer valor del lerp tiene que tener un valor entre 0 y 1, para nuestro caso
  // "0.08" es lo que dura la trasición, lo podemos ir modificando a nuestro gusto
    lerp(TodosAlCentro, 1, 0.08);

  TodosAfuera =
    lerp(TodosAfuera, 0, 0.08);

}
else if (keyIsPressed && (key === 'a' || key === 'A')) {

  TodosAfuera =
    lerp(TodosAfuera, 1, 0.08);

  TodosAlCentro =
    lerp(TodosAlCentro, 0, 0.08);

}
else {

  TodosAlCentro =
    lerp(TodosAlCentro, 0, 0.08);

  TodosAfuera =
    lerp(TodosAfuera, 0, 0.08);

}
}
// =====================================================
// COLOR DE FONDO
// =====================================================

function calcularColorFondo() {

  if (mouseX < width / 2) {

    let TransicionIzq =
      map(mouseX, 0, width / 2, 1, 0);
return color(
//lerp(valorInicial, valorFinal, transición)

lerp(40, 230, TransicionIzq), //rojo (rosa)
   lerp(150, 90, TransicionIzq),//verde
   lerp(100, 160, TransicionIzq),//azul
   );

  } else {

    let TransicionDere =
      map(mouseX, width / 2, width, 0, 1);
     return color(
     //¿Cómo funciona el lerp? 
// lerp(valorInicial, valorFinal, transición)

      lerp(40, 20, TransicionDere), //rosa
      lerp(150, 70, TransicionDere),//verde
      lerp(100, 210, TransicionDere)//azul
    );
  }
}
