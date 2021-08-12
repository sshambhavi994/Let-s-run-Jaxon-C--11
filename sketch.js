var pathImage;
var path;

var runnerImage;
var runner;

var invisibleLeftBoundary;
var invisibleRightBoundary;

function preload()
{
  pathImage = loadImage("path.png");
  runnerImage = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup()
{
  createCanvas(600,600);
  path = createSprite(300,300,10,600);
  path.addImage("path",pathImage);
  path.scale = 1.7;

  runner = createSprite(400,500,20,20);
  runner.addAnimation("runner",runnerImage);
  runner.scale = 0.1
  
  invisibleRightBoundary = createSprite(560,300,170,600);
  invisibleRightBoundary.visible = false;

  invisibleLeftBoundary = createSprite(20,300,170,600)
  invisibleLeftBoundary.visible = false;
}

function draw() 
{
  background(0);
  path.velocityY = 5;

  if (path.y > 400)
  {
    path.y = height/2;
  }
  
  runner.x = World.mouseX;

  runner.collide(invisibleRightBoundary);
  runner.collide(invisibleLeftBoundary);
  
  drawSprites();
}
