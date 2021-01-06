//creating the variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObject, stoneObject,groundObject;
var mango1,mango2,mango3,mango4,mango5;
var mango6,mango7,mango8,mango9,mango10;
var mango11,mango12;
var launcherObject;

function preload()
{
	
}

function setup() {
	//creating the canvas
	createCanvas(800, 700);

	//creating the physics engine
	engine = Engine.create();

	//adding the physics engine to the world
	world = engine.world;

	//creating a sprite for the stone
	stoneObject=new Stone(235,420,30);

	//creating the sprite for all the 12 mangoes
	mango1=new Mango(1100,100,30);
    mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,25);
	mango8=new Mango(1140,150,25);
	mango9=new Mango(1100,230,25);
	mango10=new Mango(1200,200,25);
	mango11=new Mango(1120,50,25);
	mango12=new Mango(900,160,25);

	//creating the sprite for the launcher
	launcherObject=new launcher(stoneObj.body,{x:230,y:420})

	//creating the sprite for the tree
	treeObject=new Tree(1050,580);

	//creating the sprite  for the ground
	groundObject=new Ground(width/2,600,width,20);

	

    //running the physics engine
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  //creating the background
  background(0);

  //Displaying all the sprites
  treeObject.display();
  stoneObject.display();
  groundObject.display();
  launcherObject.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  
  
  //drawing the sprites
  drawSprites();
 
}

function keyPressed() {
if (keyCode === 32) {
Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
launcherObject.attach(stoneObj.body);
}
}

function mouseDragged(){
Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
launcherObject.fly();
}

function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false);
}
}



