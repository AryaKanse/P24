const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball,dS1,dS2,dS3;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground =new Ground(400,700,900,20);
	ball = new PaperBall(250,400,10);
	//creating dustbin 
	dS1 = new Dustbin(350,550,15,25);
	dS2 = new Dustbin(410,550,15,25);
	dS3 = new Dustbin(320,400,30,15);

	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

  ground.display();
  ball.display();
  dS1.display();
  dS2.display();
  dS3.display();
  
  drawSprites();
 
}