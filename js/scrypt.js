terrenoElevado = [[600,270,180,200],[600, 0, 180, 200],[400,70, 130, 400],[200,0, 130, 400],[0,70, 130, 400]];
towers = [];
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
        for(i=0;i<terrenoElevado.length;i++){
            this.context.fillRect(terrenoElevado[i][0], terrenoElevado[i][1], terrenoElevado[i][2], terrenoElevado[i][3]);
        }
        for(j=0;j<towers.length;j++){
            this.context.fillStyle = 'blue';
            this.context.fillRect(towers[j][0], towers[j][1], towers[j][2], towers[j][3]);
        }
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

monstro.vida = 100;
const waves = [ {name: 'wave1', vida: 10, speed: 1, comp: monstro}]

function verifyWave(verify){
    return startWave(verify);
}

function startWave(ligado){
    
    if(ligado === true){
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
    }else {
        waves[0].comp.x = 780;
        waves[0].comp.y = 220;
        clickStart = false;
        console.log('correndo')
    }
}

}

let clickStart = false;




document.querySelector('#start').addEventListener("click", ()=>{ clickStart = true;} ,false );
myGameArea.start();


//building towers 
// myGameArea.canvas.setAttribute("onmousedown","showCoords(event)")
// function showCoords(evt){
//     console.log(
//       "clientX value: " + evt.clientX + "\n" +
//       "clientY value: " + evt.clientY + "\n"
//     );
//   }

//   console.log(myGameArea.canvas.offsetLeft, myGameArea.canvas.offsetBottom);

  // pegando a posiçao do click
let posX = 0 ;
let posY = 0;

//pegar posição do mouse

  function getPosition(event){
      posX = event.clientX - myGameArea.canvas.offsetLeft;
      posY = event.clientY - myGameArea.canvas.offsetTop;           
  }
  
//Posiçoes possiveis para torres;
const area1 = [[605,665],[275,335]];
const area2 = [[675,735],[275,335]];
const area3 = [[605,665],[135,195]];
const area4 = [[675,735],[135,195]];
const area5 = [[430,490],[230,290]];
const area6 = [[430,490],[90,150]];
const area7 = [[230,290],[150,210]];
const area8 = [[230,290],[230,290]];
const area9 = [[230,290],[310,370]];
const area10 = [[30,90],[90,150]];
const area11 = [[30,90],[180,240]];
const area12 = [[30,90],[290,350]];


const areas = [ area1, area2, area3, area4,
                area5, area6, area7, area8,
                area9, area10, area11, area12];

function checkTrueTower(area, mouse){
    // dentro de x
    let aux = false;
    let aux2 = null;
    
    for( i=0 ; i < area.length ; i++){
        
        if(mouse[0]<area[i][0][1] && mouse[0]>area[i][0][0]// confere em x
            && mouse[1]<area[i][1][1] && mouse[1]>area[i][1][0]//confere em y
            ){
            aux = true;
            aux2 = i;
        };
    }

    return [aux,aux2];

};


const score = 200; /// score a ser incrementado
let xTower = null;
let yTower = null;
function buyTower(){
    if(score > 100 && xTower){
        console.log(`deseja compra a torre 1 por: 100 gold?`);   /// adicionar botão para compra
       
        towers.push([xTower, yTower, 60, 60]);
        console.log(towers);
    }
}

// construindo torre
function buildTower(){  
    myGameArea.frames += 1;
    myGameArea.canvas.addEventListener("mousemove", getPosition, false);
    
    let checkTower = [posX,posY];
    let towerLocal = areas[checkTrueTower(areas,checkTower)[1]];
    if(checkTrueTower(areas,checkTower)[0]){
        console.log("aqui pode!", towerLocal[0][1]);
        xTower = towerLocal[0][0]
        yTower = towerLocal[1][0]
        myGameArea.context.fillStyle = 'orange';
        myGameArea.context.fillRect(xTower, yTower, 60, 60);
        
        myGameArea.canvas.addEventListener("click", buyTower, false);
    }else{
        xTower = null;
        yTower = null;
    }
console.log(monstro.vida)
// if(towers.length != 0){
//     console.log(( towers[0][0] - monstro.x)**2);
// }
}


function receiveDamage(){
    if(towers.length === 0 ){
        return null;
    }
    
    let distancia = Math.sqrt( (towers[0][0] - monstro.x)**2 + (towers[0][1] - monstro.y)**2)
    console.log(distancia);
    
    if( distancia < 100){
        
        if(myGameArea.frames%5 ===0){

            monstro.vida -=1;
    
        }

    }
}



function updateGameArea() {
    myGameArea.clear();
    monstro.update();
    startWave(clickStart);  
    buildTower();
    receiveDamage();
    // getPosition("click")
}


