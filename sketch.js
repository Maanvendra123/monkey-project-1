var END=0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  ground=createSprite(400,350,900,20)
ground.velocityX=-5
  monkey=createSprite(80,315,10,50)
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.2
  bananaGroup=new Group();
  obstaclesGroup=new Group();
  score=0;
  
}


function draw() {
  background("white")
  if(keyDown("space")){
    monkey.velocityY=-5
  }
  monkey.velocityY=monkey.velocityY+0.8
  if(ground.x<0){
    ground.x=ground.width/2
  }
  monkey.collide(ground)
  spawnbananas();
  spawnObstacles();
  
  
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -13;
    }
  monkey.velocityY=monkey.velocityY + 0.8
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  if(obstaclesGroup.isTouching(monkey)){
    monkey.velocityY=0;
    ground.velocityX=0;
    obstaclesGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
  }
drawSprites();
  stroke("white");
  textSize(20);
  fill("black")
  text("score:"+score,500,50)
  
  stroke("blacke");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:"+survivalTime,100,50);
}
function spawnbananas(){
  if(frameCount%60===0){
  banana=createSprite(600,100,10,50)
  banana.addImage(bananaImage)
  banana.velocityX=-4
  banana.scale=0.1
    banana.y=Math.round(random(120,200))
    banana.lifetime=300
    monkey.depth=banana.depth+1
    bananaGroup.add(banana)
}
}
function spawnObstacles(){
  if(frameCount%300===0){
  Obstacle=createSprite(600,320,10,50)
  Obstacle.addImage(obstacleImage)
  Obstacle.velocityX=-4
  Obstacle.scale=0.1
   
    Obstacle.lifetime=300
    obstaclesGroup.add(Obstacle)
  
 
}
}



