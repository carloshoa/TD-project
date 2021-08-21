let terrenoElevado = [[600,270,180,200],[600, 0, 180, 200],[400,70, 130, 400],[200,0, 130, 400],[0,70, 130, 400]];
let towers = [];

// let img = new Image();
// img.src = './img/grama1.png'


const myGameArea = {
    canvas: document.createElement('canvas'),
    frames: 0,
    start: function () {
        this.canvas.width = 780;
        this.canvas.height = 470;
        let terreno = new Image();
        terreno.src = './img/rock.jpeg'
        this.canvas.style.border = '2px solid gray';
        this.context = this.canvas.getContext('2d');
        // this.context.fillStyle = 'green';
        this.context.drawImage(terreno, 0, 0, 780, 470);
        
        // this.context.fillRect(600, 270, 180, 200);
        
        document.body.insertBefore(this.canvas, document.querySelector("footer"));
        this.interval = setInterval(updateGameArea, 9);
    },
    clear: function () {
        let terreno = new Image();
        terreno.src = './img/wallpapers-dry-cracked-ground-texture-abstract-relief-pattern.jpg.jpg';
        //limpa tudo
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(terreno, 0, 0, 780, 470);
        // let pattern = this.context.createPattern(img, 'repeat');
        this.context.fillStyle = 'green';
 
        //desenha o terreno
        for(i=0;i<terrenoElevado.length;i++){
 
            let imgGrama = new Image();
            imgGrama.src = './img/45bea7a21ec3951e0d3be06c4a89e95c.jpg'
            this.context.drawImage(imgGrama, terrenoElevado[i][0], terrenoElevado[i][1], terrenoElevado[i][2], terrenoElevado[i][3]);
        }

        //atribui imagem a torres
        let imgTorres= [];
        for(j=0;j<towers.length;j++){
            if(towers[j][4]===1){
                imgTorres[j] = new Image();
                imgTorres[j].src = './img/Archer_Tower2.png';
            }else if(towers[j][4]===2){
                imgTorres[j] = new Image();
                imgTorres[j].src = './img/Archer_Tower6.png';
            }else if(towers[j][4]===3){
                imgTorres[j] = new Image();
                imgTorres[j].src = './img/Archer_Tower10.png';
            }else if(towers[j][4]===4){
                imgTorres[j] = new Image();
                imgTorres[j].src = './img/Archer_Tower12.png';
            }else if(towers[j][4]>4){
                imgTorres[j] = new Image();
                imgTorres[j].src = './img/Archer_Tower13.png';
                
            }
        }

        //desenha torres
        for(j=0;j<towers.length;j++){
            
            this.context.fillStyle = 'blue';
            
            this.context.drawImage(imgTorres[j], towers[j][0], towers[j][1], towers[j][2], towers[j][3]);
            
            // this.context.fillRect(towers[j][0], towers[j][1], towers[j][2], towers[j][3]);

        }
    },
};

const header = document.querySelector("header");
// console.log(header);
// console.log(document.body.childNodes);



class Component {

    constructor(width, height, color, x, y, isMonstre) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.nivel = 1;
        this.isMonstre = isMonstre;
        this.imgMonstros = 0;
        this.onAttack = false;
        
    }

    update() {

        // desenha o elemento em cada posição
        const ctx = myGameArea.context;
        

        if(this.isMonstre === true){
            
                if(nivelAtual===1){
                    this.imgMonstros = new Image();
                    this.imgMonstros.src = './img/Rat.gif'
                }else if(nivelAtual===2){
                    this.imgMonstros = new Image();
                    this.imgMonstros.src = './img/Undead_Prospector.gif'
                }else if(nivelAtual===3){
                    this.imgMonstros = new Image();
                    this.imgMonstros.src = './img/Elder_Bonelord.gif'
                }else if(nivelAtual===4){
                    this.imgMonstros = new Image();
                    this.imgMonstros.src = './img/tibia-drag.gif'
                }else if(nivelAtual===5){
                    this.imgMonstros = new Image();
                    this.imgMonstros.src = './img/Dragon_Lord.gif'
                }else if(nivelAtual===6){
                    this.imgMonstros = new Image();
                    this.imgMonstros.src = './img/Behemoth.gif'
                }else if(nivelAtual===7){
                    this.imgMonstros = new Image();
                    this.imgMonstros.src = './img/Guzzlemaw.gif'
                }else if(nivelAtual===8){
                    this.imgMonstros = new Image();
                    this.imgMonstros.src = './img/Sight_of_Surrender.gif'
                }else if(nivelAtual===9){
                    this.imgMonstros = new Image();
                    this.imgMonstros.src = './img/Vexclaw.gif'
                }else if(nivelAtual===10){
                    this.imgMonstros = new Image();
                    this.imgMonstros.src = './img/Demon_1__400x400.gif'
                }
                ctx.drawImage(this.imgMonstros, this.x, this.y, this.width, this.height);
            
                
                if((this.vida / this.vidainicial)>0.6){
                    ctx.fillStyle = 'green';

                }else if((this.vida / this.vidainicial)<0.6 &&
                        (this.vida / this.vidainicial)>0.3){
                    ctx.fillStyle = 'yellow';
                }else{
                    ctx.fillStyle = 'red';
                }


                ctx.fillRect(this.x, this.y - this.height/10, this.width*((this.vida / this.vidainicial)), 3);

                if(this.onAttack === true){
                    let attackImagem = new Image();
                    attackImagem.src = './img/26-262235_explosion-fire-clipart-pow-png.png';

                    ctx.drawImage(attackImagem,this.x+25,this.y+25, 7, 7);
                    
                        this.onAttack = false;
                    
                       
                }
            

        }else{

            
            
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            
            // desenha a vida atual
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y - this.height/10, this.width*((this.vida / this.vidainicial)), 3);
            
        }
        
}}


// array de monstros
let monstros = []
let nivelAtual = 1;
let nextNivel = true;

       



function nivel(nivel, finish){
    if(finish){

        //construtor de wave
        //            ||
        //            \/
        for(n=0 ; n < 5+2*nivelAtual /* < -- valor a inserir */; n++){
            
            let posPrimeiroMonstro = 780;
            
            monstros[n] = new Component(40, 40, 'yellow', posPrimeiroMonstro + 80*n, 220, true);
            monstros[n].vidainicial = 50 + 200*nivel;
            monstros[n].vida = 50 + 200*nivel;
            monstros[n].isMonstre = true;
            
        }
        // inserir chefe da wave
        
        const chefao = new Component(60, 60, 'orange', monstros[monstros.length-1].x+80, 220, true);
        chefao.vida = 1000*nivel;
        chefao.vidainicial = 1000*nivel;
        monstros.push(chefao);
        monstros[n].isMonstre = true;
        
        nextNivel = false
    }
    
}



let pontos = 10;


const waves = [ {name: 'wave1', vida: 10, speed: 0.8*(nivelAtual), comp: monstros}]

function verifyWave(verify){
    return startWave(verify);
}


let auxtermino = 0;
function startWave(ligado){
    
    if(ligado === true){
        
        for(n=0;n<monstros.length;n++){

            // primeiro trecho reto
            if(waves[0].comp[n].x > 550){
                waves[0].comp[n].x -= (waves[0].speed);
                                // segundo trecho -- sobe  
            }else if (waves[0].comp[n].x <= 550 && waves[0].comp[n].x >= 350 && waves[0].comp[n].y > 25){
                waves[0].comp[n].y -=(1*waves[0].speed);
                                // terceiro trecho -- reto  
            }else if (waves[0].comp[n].x <= 550 && waves[0].comp[n].x >= 350 && waves[0].comp[n].y <= 25 ){
                waves[0].comp[n].x -=1*waves[0].speed;
                                // quarto trecho -- desce
            }else if (waves[0].comp[n].x >= 150 && waves[0].comp[n].x < 350 && waves[0].comp[n].y <= 415){
                waves[0].comp[n].y += 1*waves[0].speed;
                                // quinto trecho -- reto
            }else if (waves[0].comp[n].x >= 150 && waves[0].comp[n].x < 350 && waves[0].comp[n].y >= 415  ){
                waves[0].comp[n].x -=1*waves[0].speed;
                                // sexto trecho -- sobe
            }else if (waves[0].comp[n].x <= 150 && waves[0].comp[n].y > 25 ){
                waves[0].comp[n].y -=1*waves[0].speed;
                                // setimo trecho -- reto
            }else if (waves[0].comp[n].x > -30 && waves[0].comp[n].x < 150 && waves[0].comp[n].y <= 25 ){
                waves[0].comp[n].x -=1*waves[0].speed;
            }else {
                if(pontos>0){
                    pontos -= 1;
                       
                }else if(pontos <= 0 && n === (monstros.length-1)){
                    
                    document.querySelector('#start').innerHTML= `
                    <img src="./img/icons8-restart-48.png" alt="restart">
                    Restart`;
                    nivelAtual = 1;
                    nextNivel = false;
                    clickStart = false;
                    monstros.splice(0);
                    alert(`Voce nao salvou o mundo!`);
                    
                    score = 300;
                    document.querySelector('#msg').innerHTML = `
                       =( `;
                       
                    auxtermino = true;
                }
                
                document.querySelector('#pontos').innerHTML = `
                <img src="./img/icons8-red-heart-48.png" alt="vidas"> 
                ${pontos} vidas`;

                waves[0].comp[n].x = 760;                   
                waves[0].comp[n].y = 220;

                console.log(waves[0].comp[n].x );
                console.log(waves[0].comp[n].y );
                                                   
            }         
        }
    }
 
}



let clickStart = false;


document.querySelector('#start').addEventListener("click", ()=>{ 
    clickStart = true;
    document.querySelector('#msg').innerHTML= `
    <img src="./img/icons8-chat-message-50.png" alt="mensagem">
    Construa torres para destruir os inimigos `;
    document.querySelector('#start').innerHTML= `
    <img src="./img/icons8-next-page-100.png" alt="next-button">
    Next Nivel`;
    
    if(pontos <= 0){
        pontos = 10;
        document.querySelector('#pontos').innerHTML = `
        <img src="./img/icons8-red-heart-48.png" alt="vidas"> 
                ${pontos} vidas`;
        towers.splice(0);
        score = 300;
        areas = [ area1, area2, area3, area4,
            area5, area6, area7, area8,
            area9, area10, area11, area12];
    }
    document.querySelector('#moedas').innerHTML = ` 
<img src="./img/icons8-coin-48.png" alt="moedas">
${score} moedas`

    if(monstros.length===0){
        nivel(1,true);
    }
} ,false );


myGameArea.start();


  // pegando a posiçao do click
let posX = 0 ;
let posY = 0;
let posXUp = 0 ;
let posYUp = 0;

//pegar posição do mouse

function getPosition(event){
    posX = event.clientX - myGameArea.canvas.offsetLeft;
    posY = event.clientY - myGameArea.canvas.offsetTop;           
}

function getPosition2(event){
    posXUp = event.clientX - myGameArea.canvas.offsetLeft;
    posYUp = event.clientY - myGameArea.canvas.offsetTop;           
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


let areas = [ area1, area2, area3, area4,
                area5, area6, area7, area8,
                area9, area10, area11, area12];


// confere dentro de um array de areas se as coordenadas passadas (mouse) esta dentro dele
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

    return [aux,aux2]; // retorna o Booleano e o index da área dentro do array de areas 

};


let score = 300; /// score inicial


document.querySelector('#moedas').innerHTML = ` 
<img src="./img/icons8-coin-48.png" alt="moedas">
${score} moedas`


let xTower = null;
let yTower = null;
let towerLocal;
let indexTower;
let xTowerUp = null;
let yTowerup = null;



let upgradeArea = [];

// construindo torre
function buildTower(){  
    
    myGameArea.frames += 1;  // auxiliar para contagem de tempo

    myGameArea.canvas.addEventListener("mousemove", getPosition, false); //evento de mover mouse para chamar a função getPosition e conseguir as coordenadas do mouse.
    
    let checkTower = [posX,posY];
    let checkTowerUp = [posX,posY];

    

    towerLocal = areas[checkTrueTower(areas,checkTower)[1]];  // checagem se onde o mouse esta pode receber torre
    towerLocalUp = upgradeArea[checkTrueTower(upgradeArea,checkTower)[1]];

    //caso afirmativo
    if(checkTrueTower(areas,checkTower)[0]){
        // console.log("aqui pode!", towerLocal[0][1]);
        xTower = towerLocal[0][0]
        yTower = towerLocal[1][0]
        indexTower = checkTrueTower(areas,checkTower)[1];

        // indicação de possível torre
        myGameArea.context.fillStyle = 'orange';
        myGameArea.context.fillRect(xTower, yTower, 60, 60);
        
        myGameArea.canvas.addEventListener("click", buyTower, false);

    }else if(checkTrueTower(upgradeArea,checkTowerUp)[0]){
        // console.log("aqui pode!", towerLocal[0][1]);
        xTowerUp = towerLocalUp[0][0]
        yTowerUp = towerLocalUp[1][0]
        indexTowerUp = checkTrueTower(upgradeArea,checkTowerUp)[1];

        // indicação de possível upgrade de torre
        myGameArea.context.fillStyle = 'gray';
        myGameArea.context.fillRect(xTowerUp, yTowerUp, 60, 60);

        myGameArea.canvas.addEventListener("click", upTower, false);

    }else{
        xTower = null;
        yTower = null;
        xTowerUp = null;
        yTowerup = null;
    }
    
}




//construindo o objeto de torres e niveis



function buyTower(){

    if(score >= 100 && xTower){
        
        if(confirm(`deseja compra uma torre por: 100 gold?`)){
                        
            towers.push([xTower, yTower, 60, 60,1]);
            upgradeArea.push(areas[indexTower]);
            areas.splice(indexTower,1);
            
            console.log(upgradeArea)
            console.log(areas.length);
            score -= 100;

            document.querySelector('#moedas').innerHTML = `<img src="./img/icons8-coin-48.png" alt="moedas"> ${score} moedas`
        }
    }else if(score<100 && xTower){
        alert(`Você não tem moedas suficientes!`)
    }
}


// melhorando torres


function upTower(){
   
    for( t =0 ; t< towers.length ; t++){
        if(towers[t][0] === xTowerUp && towers[t][1] === yTowerUp){
            
            let price = 100 + towers[t][4]*100;
            
            if(score >= price && xTowerUp){
                                   
                if(confirm(`deseja melhorar sua torre : ${price} gold?`)){
                    
        
                    towers[t][4] += 1;
                    
                    
                    score -= price;
        
                    document.querySelector('#moedas').innerHTML = `<img src="./img/icons8-coin-48.png" alt="moedas"> ${score} moedas`
                }
            }else if(score < price && xTowerUp){
                
                alert(`Você não tem moedas suficientes!`)

            }
        }
    }
}




function receiveDamage(){
    if(towers.length === 0 ){
        return null;
    }

    if(monstros.length === 0){
        return null;
    }

    
    for ( t=0 ; t < towers.length ; t++){
        // let checkProx = false;
        
        let distancias = [];
        for(m=0 ; m < monstros.length; m++){
            
            let dist = Math.sqrt( (towers[t][0] - monstros[m].x)**2 + (towers[t][1] - monstros[m].y)**2)
            
            distancias.push(dist); // array com as distancias de todos os monstro em relação a uma torre especifica
            
            // console.log(distancias);
            //destroi monstro morto
            if( monstros[m].vida <=0){

                console.log(`morreu monstro ${monstros[m]}`);
                
                score += monstros[m].vidainicial/10;
                //SCORE

                if(score === 0){
                    document.querySelector('#moedas').innerHTML=
                    `<img src="./img/icons8-coin-48.png" alt="moedas">
                    ${score} moeda`;  
                }
                document.querySelector('#moedas').innerHTML=
                `<img src="./img/icons8-coin-48.png" alt="moedas">
                ${score} moedas`;

                // monstros[m].width = 0;
                // monstros[m].height = 0;
                monstros.splice(m,1);

                // PAINEL DE MENSAGEM
                if(monstros.length === 0){
                    clickStart = false;
                    nextNivel = true;
                    nivelAtual += 1;
                    document.querySelector('#msg').innerHTML=
                    `<img src="./img/icons8-chat-message-50.png" alt="mensagem">
                    Todos os monstros foram abatidos!`
                    document.querySelector('#nivel').innerHTML=`
                    <img src="./img/batalha.png" alt="nivel">
                    <p>Nivel ${nivelAtual}</p>`
                }else{
                    if(monstros.length>1){
                        document.querySelector('#msg').innerHTML=
                        `<img src="./img/icons8-chat-message-50.png" alt="mensagem">
                        Restam ${monstros.length} monstro!`;
                    }else{
                        document.querySelector('#msg').innerHTML=
                        `<img src="./img/icons8-chat-message-50.png" alt="mensagem">
                        Resta apenas ${monstros.length} monstro! Não desista`;

                    }
                }
            }
        }

        let MenorDistancia = Math.min.apply(Math, distancias); //metodo para pegar o menor numero em um array indeterminado de numeros;
        
        if(MenorDistancia < 135){  
            let firstMonstroPosition = distancias.indexOf(MenorDistancia);
            if(myGameArea.frames%10 === 0){
                monstros[firstMonstroPosition].vida -= (1+5*towers[t][4]);
                monstros[firstMonstroPosition].onAttack = true;
                

            }
        }
    }  
}


function checkWin(){

    if (nivelAtual===11){
        alert(`Parabens! Você salvou o mundo`);
        document.querySelector('#msg').innerHTML=
        `<img src="./img/icons8-chat-message-50.png" alt="mensagem">
        =]`;
        nivelAtual = 1;
        nextNivel = false;
        clickStart = false;
        monstros.splice(0);
        score =300;
        towers.splice(0);
        areas = [ area1, area2, area3, area4,
            area5, area6, area7, area8,
            area9, area10, area11, area12];
    }
}


function updateGameArea() {
    myGameArea.clear();
    for(i=0; i<monstros.length;i++){
        monstros[i].update();
    }
    checkWin();
    startWave(clickStart);  
    buildTower();
    receiveDamage();
    nivel(nivelAtual, nextNivel);

  

}


