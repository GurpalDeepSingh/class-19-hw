var spaceImg, space;
var asteroidImg, asteroid, asteroidGroup;
var rocket, rocketImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"









function preload(){
    spaceImg = loadImage("space.png");
    asteroidImg = loadImage("asteroid.png");
    rocketImg = loadImage("rocket.png");
}

function setup() {
    createCanvas(600, 600);
    space = createSprite(400,300);
  space.addImage("space",spaceImg);
  space.velocityY = 1;



  asteroidGroup=new Group();
  invisibleBlockGroup = new Group();

  rocket=createSprite(200,200,50,50);
  rocket.scale=0.03;
  rocket.addImage("rocket",rocketImg);
}

function draw() {
    background(200);
    if(gameState==="play"){
  
    
    if(space.y > 400){
        space.y = 300
      }
      if(keyDown("left_arrow")){
        rocket.x=rocket.x-3;
  
      }
      if(keyDown("right_arrow")){
        rocket.x=rocket.x+3;
        
      }
      if(keyDown("space")){
        rocket.velocityY=-5;
        
      }

      if (frameCount % 120 === 0) {
        var asteroid = createSprite(400,120,40,10);
        asteroid.x = Math.round(random(80,120));
        asteroid.addImage(asteroidImg);
        asteroid.scale = 0.05;
        asteroid.velocityY = -3;

      rocket.velocityY = rocket.velocityY + 0.8
      if(asteroidGroup.isTouching(rocket)){
        rocket.velocityY=0;
      }





    drawSprites();
    if (gameState === "end"){
        stroke("yellow");
        fill("yellow");
        textSize(30);
        text("Game Over", 230,250)
      }
      asteroidGroup.add(asteroid);

      
}
}
}
