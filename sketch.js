const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Contraint = Matter.Constraint;

var engine,world;
var ground1;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var ball1;
var rope1;

function setup() {

  createCanvas(1200,600);

engine = Engine.create ();
world = engine.world;

ground1 = new ground(600,580,1200,30);

b1 = new box(800,500,50,50);
b2 = new box(800,450,50,50);
b3 = new box(800,400,50,50);
b4 = new box(800,350,50,50);
b5 = new box(800,300,50,50);
b6 = new box(800,250,50,50);
b7 = new box(800,200,50,50);
b8 = new box(800,150,50,50);
b9 = new box(800,100,50,50);
b10 = new box(800,50,50,50);
b11 = new box(1000,500,50,50);
b12 = new box(1000,450,50,50);
b13 = new box(1000,400,50,50);
b14 = new box(1000,350,50,50);
b15 = new box(1000,300,50,50);
b16 = new box(1000,250,50,50);
b17 = new box(1000,200,50,50);
b18 = new box(1000,150,50,50);
b19 = new box(1000,100,50,50);
b20 = new box(1000,50,50,50);

ball1 = new ball(400,400,100);

rope1 = new rope(ball1.body,{x:400,y:300});

  
}

function draw() {
  background("cyan"); 

 Engine.update(engine);

 ground1.display();
 
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 b10.display();
 b11.display();
 b12.display();
 b13.display();
 b14.display();
 b15.display();
 b16.display();
 b17.display();
 b18.display();
 b19.display();
 b20.display();
  
 ball1.display();

 rope1.display();

 drawSprites();
}