var backgroundimg
var child1,child2

function preload(){
  backgroundimg=loadImage("snow2.jpg")
  
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  child1= new child1(200,300)
}

function draw() {
  background(backgroundimg);  
 child1.display
  drawSprites();
}