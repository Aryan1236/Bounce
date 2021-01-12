const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var circle1, engine, world, rect2 ;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world =  engine.world;

  var rect2_options = {
    isStatic : true
  }

  var circle1_options = {
     restitution : 1.0
  }

  circle1 = Bodies.circle(200,200,25,circle1_options);
  World.add(world,circle1);

  rect2 = Bodies.rectangle(50,380,25,25,rect2_options);
  World.add(world,rect2);

}

function draw() {
  background("black");  
  
  Engine.update(engine);



  rectMode  (CENTER)
  rect(rect2.position.x,rect2.position.y,800,10);

  ellipseMode(RADIUS);
  ellipse(circle1.position.x,circle1.position.y,40);
}