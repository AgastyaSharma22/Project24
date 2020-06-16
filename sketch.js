var paperBall,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(1600,700);
     rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	paperBall=new Paper(200,450,40);
	bin=new Bin(1200,650);

	//Create a Ground
	ground=new Ground(width/2,670,width,20);
	

	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paperBall.display();
  bin.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85});
	}
}