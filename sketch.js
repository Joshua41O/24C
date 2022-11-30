


const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world;

  

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
  var ball1_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   var ground_options ={
     isStatic: true
   };
  
  

  ground = Bodies.rectangle(100,300,200,100,ground_options);
  World.add(world,ground);
//crear un fondo
//agregarlo a world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ball1 = Bodies.circle(200,10,20,ball1_options);
  World.add(world,ball1);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball1.position.x,ball1.position.y,20);

  rect(ground.position.x,ground.position.y,200,100);
 


  
  
}

