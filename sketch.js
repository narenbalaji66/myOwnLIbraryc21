var fixedRect,movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="green"
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green"
  car=createSprite(100,100,50,50)
  car.shapeColor="blue"
  car.velocityX=5;
  wall=createSprite(800,100,50,80)
  wall.shapeColor="orange"
}

function draw() {
  background(0);
  console.log(movingRect.x-fixedRect.x) 
  movingRect.x=World.mouseX 
  movingRect.y=World.mouseY
if(isTouching(car,wall)){
    textSize(30)
    text("accident",300,400)
}
bounceOff(car,wall)  
  
  drawSprites();
}
