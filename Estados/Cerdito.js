class Cerdito {
  constructor () {
    this.Color= color(255, 0, 0);
    //this.Tamaño=20;
    this.posX = width/2;
    this.posY = 370;
  }

  iniciar () {
  this.posX = width/2;
    this.posY = 370;
  }
  dibujar () {
    fill (this.Color);
    rect (this.posX, this.posY, 30, 30);
  }


  //Mover
  teclaPresionada() {
    if (keyCode === LEFT_ARROW) {
      this.posX=  this.posX -30;
    } else if (keyCode === RIGHT_ARROW) {
      this.posX=  this.posX +30;
    }else if (keyCode === UP_ARROW) {
      this.posY=  this.posY -30;
    }
    else if (keyCode === DOWN_ARROW) {
      this.posY=  this.posY +30;
    }
  }
}
