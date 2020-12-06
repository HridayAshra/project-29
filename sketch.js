const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, ground;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

 
  ground=new Ground(400, 380, 400, 20)
  box1=new Box(350,300);
  box2=new Box(400,100);
  
  console.log(box1);
}

function draw() {
  background(0,0,0);  
  ground.display();
  box1.display();
  box2.display();
}