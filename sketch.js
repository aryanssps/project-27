
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,roof,chain;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 650);

  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     bob1=new Pendulum(600,600)
     bob2=new Pendulum(650,600)
     bob3=new Pendulum(700,600)
     bob4=new Pendulum(550,600)
     bob5=new Pendulum(500,600)
     roof=new Roof(600,200,200,20)
     chain=new Chain(bob1.body,roof.body,0,0)
     chain1=new Chain(bob2.body,roof.body,0,0)
     chain2=new Chain(bob3.body,roof.body,0,0)
     chain3=new Chain(bob4.body,roof.body,0,0)
     chain4=new Chain(bob5.body,roof.body,0,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue")
  Engine.update(engine)
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  chain.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
}

function keyPressed(){
  if (keyCode=UP_ARROW){
    Body.applyForce(bob5.body,bob2.body.position,{x:-60,y:-60})
}
}
