const myGameArea = {
    canvas: document.createElement('canvas'),
    frames: 0,
    start: function () {
        this.canvas.width = 780;
        this.canvas.height = 470;
        this.canvas.style.backgroundColor  = '#000';
        this.canvas.style.border = '2px solid yellow';
        this.context = this.canvas.getContext('2d');
        this.context.fillStyle = 'purple';
        this.context.fillRect(600, 270, 180, 200);
        document.body.insertBefore(this.canvas, document.querySelector("footer"));
        this.interval = setInterval(updateGameArea, 10);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = 'green';
        this.context.fillRect(600, 270, 180, 200);
        this.context.fillRect(600, 0, 180, 200);
        this.context.fillRect(400,70, 130, 400);
        this.context.fillRect(200,0, 130, 400);
        this.context.fillRect(0,70, 130, 400);

      },
  };
  const header = document.querySelector("header");
  console.log(header);
  console.log(document.body.childNodes);

  class Component {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;

       
    }
   
    update() {
      const ctx = myGameArea.context;
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

const monstro = new Component(30, 30, 'red', 750, 220);


const waves = [ {name: 'wave1', vida: 10, speed: 1, comp: monstro}]

function startWave(){
    // primeiro trecho reto
    if(waves[0].comp.x > 550){
        waves[0].comp.x -= (1+1*waves[0].speed);
    // segundo trecho -- sobe  
    }else if (waves[0].comp.x <= 550 && waves[0].comp.x >= 350 && waves[0].comp.y > 25){
        waves[0].comp.y -=(1+1*waves[0].speed);
    // terceiro trecho -- reto  
    }else if (waves[0].comp.x <= 550 && waves[0].comp.x >= 350 && waves[0].comp.y <= 25 ){
        waves[0].comp.x -=1+1*waves[0].speed;
    // quarto trecho -- desce
    }else if (waves[0].comp.x >= 150 && waves[0].comp.x < 350 && waves[0].comp.y <= 415){
        waves[0].comp.y += 1+1*waves[0].speed;
    // quinto trecho -- reto
    }else if (waves[0].comp.x >= 150 && waves[0].comp.x < 350 && waves[0].comp.y >= 415  ){
        waves[0].comp.x -=1+1*waves[0].speed;
    // sexto trecho -- sobe
    }else if (waves[0].comp.x <= 150 && waves[0].comp.y > 25 ){
        waves[0].comp.y -=1+1*waves[0].speed;
    // setimo trecho -- reto
    }else if (waves[0].comp.x > -30 && waves[0].comp.x < 150 && waves[0].comp.y <= 25 ){
        waves[0].comp.x -=1+1*waves[0].speed;
    }
   

}

console.log(waves[0].speed)

function updateGameArea() {
    myGameArea.clear();
    monstro.update();
    startWave();
}

myGameArea.start();