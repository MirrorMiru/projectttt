  var player, obstacle, tscreen, bg,  grnd, gameOver, restart, sofa, zippy, jumpa 
var gameState = 1
var score = 0
var obbGroup
var bGroup
var edge
 var randoo 

function preload(){
playerS = loadImage("stop.png")
playerM = loadAnimation("trex3.png","trex4.png")
playerC = loadAnimation("trex_collided.png")
backg = loadImage("bg.png") 
ground = loadImage("grnd.png")
titlei = loadImage("title.png")
obstacle1=loadImage("obstacle1.png")
obstacle2=loadImage("obstacle2.png")
obstacle3=loadImage("obstacle3.png")
gameoI = loadImage("gameOver.png")
retryI =loadImage("retry.png")
//titles = loadSound("Zippy.mp3")
//plays = loadSound("Sofa.mp3")
houseI = loadImage("biulding.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  //background("grey")
  edge = createEdgeSprites()
// titles.loop();
  //titles.stop()
 //plays.loop();
 //plays.stop();
 //bg = createSprite(500,200)
// bg.addImage(backg)
 //bg.scale = 2
 backg.resize(windowWidth,windowHeight-150)
 grnd = createSprite(480, edge[3].y,200,250)
 edge[0].shapeColor = 180
 edge[3].shapeColor = 180
 grnd.addImage(ground)
 grnd.scale = 1
ground.resize(windowWidth*2,windowHeight/7)
 player = createSprite(80,grnd.y-350)
 player.addImage(playerS)
 player.addAnimation("move",playerM)
 player.addAnimation("crash",playerC)
 title = createSprite(windowWidth/2,100)
 title.addImage(titlei)
 //gameOver = createSprite(player.x, player.y - 350)
 //gameOver.addImage(gameoI)
 restart = createSprite(player.x, player.y - 50)
 restart.addImage(retryI)
 restart.scale = 0.6
 jumpa = createSprite(0, grnd.y-60, windowWidth*3, 50)
jumpa.visible = false


 obbGroup = new Group()
   bGroup = new Group()
  
  
  

}

function draw() {
  background(180);
  
  camera.x = player.x
  camera.y = player.y
  
  
  if(keyWentDown("space")&& gameState === 2){
  gameState = 1
  obbGroup.destroyEach();
  bGroup.destroyEach()
  score = 0
  //gameOver.visible = false;
  restart.visible = false;
  obbGroup.setLifetimeEach(windowWidth/3);
  bGroup.setLifetimeEach(windowWidth/3) 
} 
//player.debug = true;
//grnd.setCollider("rectangle",0,74,900,20);
player.setCollider("circle",0,0,45);
if(keyWentDown("space")&& gameState === 0){
  gameState = 1
  

  
}  

   
  
  
textSize(20)
 fill("red")  
 
player.velocityY = player.velocityY + 0.8 
player.collide(grnd)
  
if(gameState === 1){
  
 // playsoundp()
  title.visible = false
 // gameOver.visible = false
  restart.visible = false
  player.changeAnimation("move",playerM) 
  score = score + Math.round(getFrameRate()/60);
  grnd.velocityX = -(6 + 1.5*score/100);
  //bg.velocityX = -(2 + 0.3*score/100);
    if(keyWentDown("space")&&grnd.y-250 ) {
      player.velocityY = -15;
    }
 
  
if(obbGroup.isTouching(player)){
gameState = 2
}   
  
if (gameState === 2) {
   
     // gameOver.visible = true
      restart.visible = true
     
      grnd.velocityX = 0
     // bg.velocityX = 0
      player.velocityX = 0
   
      
      player.changeAnimation("crash",playerC);    
      obbGroup.setLifetimeEach(-1);
      obbGroup.setVelocityXEach(0);
      bGroup.setLifetimeEach(-1);
      bGroup.setVelocityXEach(0);
   }


  
  
  
    
  spawnObstacle()
//  spawnBiulding()
}  
  
    if (grnd.x < 70){
      grnd.x = 500;
    }
    //if (bg.x < 100){
     // bg.x = 500;
   // }
 
  

  

  
  
  

drawSprites()
  

   if(gameState === 0){ 
 text("Press space to start",windowWidth/2,windowHeight/2)
  gameOver.visible = false
  restart.visible = false
  //playsoundt()
} 
if(gameState === 1||gameState === 2){
  fill("black")
  text("Score: " + score,edge[0].x,camera.position.y-50)
} 
  
  
}


function spawnObstacle() {

  
  if(frameCount % 74 === 0) {
    var obstacle = createSprite(windowWidth,grnd.y-60,20,20);
       obstacle.depth = grnd.depth+50
      obstacle.setCollider("circle",0,0,45);
    
    obstacle.velocityX = -(6 + 1.5*score/100);
    
  
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
      
              break;
      case 2: obstacle.addImage(obstacle2);
     
              break;
      case 3: obstacle.addImage(obstacle3);
     
              break;
      default: break;
    }
    
            
    obstacle.scale = 1.6;
    obstacle.lifetime = windowWidth/3;
  
    obbGroup.add(obstacle);
  }
}

//function spawnBiulding() {
  



  
  //if(frameCount % round(random(60,75)) === 0) {
    
    //var Biulding = createSprite(windowWidth+200,windowHeight/2+(round(random(10,200))),20,20);
  
   // Biulding.velocityX = -(6 + 0.6*score/100);
    
    //Biulding.depth = grnd.depth
    //player.depth = player.depth +1
    //grnd.depth = grnd.depth+1
    
  
    //add img
    //Biulding.addImage(houseI)
            
    //Biulding.scale = 3;
   // Biulding.lifetime = windowWidth/3;
     
   // bGroup.add(Biulding)

 
 // }
//}

function playsoundp() {
  
  
  if(plays.isPlaying() == false)  {
  //  titles.stop()
    //plays.play();
  } 
}
function playsoundt() {
  
  
  if(titles.isPlaying() == false)  {
    //titles.play()
    //plays.stop();
  } 
} 
