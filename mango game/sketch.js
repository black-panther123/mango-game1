
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boyObj,boyImg;
var groundObject;
var stoneObj;
var treeObj;
var mango1,mango2,mango3,mango4,mango5,mango6;

function preload()
{
	boyImg=loadImage("images/boy.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
   stoneObj=new stone(250,450);
   mango1=new mango(750,300,20);
   mango2=new mango(700,350,20);
   mango3=new mango(710,370,20);
   mango4=new mango(730,350,20);
   mango5=new mango(700,390,20);
   mango6=new mango(720,350,20);
  boy=addImage(boyImg,"boy")





   treeObj=new tree(110,300);
   groundObject=new ground(width/2,670,width,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);



  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  groundObject.display();

detectCollision(stoneObj,mango1);
detectCollision(stoneObj,mango2);
//detectCollision(stoneObj,mango3);
//detectCollision(stoneObj,mango4);
//detectCollision(stoneObj,mango5);

  drawSprites();
 
}



function keyPressed(){


  if(keyCode===32){
Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
launcherObject.attach(stoneObj.body)

  }
}


function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


//function mouseReleased(){
   // stoneObj.fly();
//}


function detectCollision(Lstone,Lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.boy.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false)
}


}


