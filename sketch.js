
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bg,bgImage;
var car,carImage;
var boundry1,boundry2;
var boundry3;
var distance=0;
var cars;
var car1Image,car2Image,car3Image;
var redcars,bluecars,blackcars;
var damage=0;
var Cars;
var redCarGroup,blueCarGroup,blackCarGroup;
var gameoverImage;
var score=0;
var PLAY=1;
var END=0;
var gameState=1;
var play;
var carSound;
var start,startImage;
var crashSound;
var play;
var finish,finishImage;
var wonImage;
var carSound;
var boundry5;


function preload()
{
	bgImage=loadImage("1.jpg");
  carImage=loadImage("car.png");
  car1Image=loadImage("bluecar.png");
  car2Image=loadImage("blackcar.png");
  car3Image=loadImage("redcar.png");
  gameoverImage=loadImage("gameover.jpg");
  
  startImage=loadImage("start.jpg");

  wonImage=loadImage("won.jpg");


}

function setup() {
	createCanvas(1300, 500);


	engine = Engine.create();
	world = engine.world;

  

bg=createSprite(650,250,displayWidth,displayHeight);
bg.scale=3;
bg.displayWidth;
bg.displayHeight;

bg.addImage(bgImage);

redCarGroup=createGroup();
blueCarGroup=createGroup();
blackCarGroup=createGroup();






car=createSprite(380,300,50,50);
car.scale=0.2;
car.addImage(carImage);

boundry1=createSprite(0,250,10,500);
//boundry1.visible=false;

boundry2=createSprite(450,-100,1700,10);
//boundry2.visible=false;

boundry3=createSprite(1300,250,10,500);
//boundry3.visible=false;

boundry4=createSprite(450,700,1700,10);
//boundry4.visible=false;

start=createSprite(150,270,50,50);
start.scale=0.7;
start.addImage(startImage);

damage=0;

	Engine.run(engine);
  
  play=createButton("Play");
  play.position(600,50);
  play.mousePressed(race);

}



function draw() {
  rectMode(CENTER);
  background(133,133,133);
  
  
if(bg.velocityX<0){
  
  car.collide(boundry1);
  car.collide(boundry2);
  car.collide(boundry3);
  car.collide(boundry4);
  
  distance=Math.ceil(frameCount/frameRate());

  

  if(bg.x<0){
    bg.x=bg.width/2;

    }
   
    camera.velocityX-4;

    if(keyDown("right")){
      camera.position.x=1300/2;
      camera.position.y=car.y;
}
      


    if(keyDown("left")){
      camera.position.x=1300/2;
      camera.position.y=car.y;
  
      }
    
    if(keyDown("up")){
      camera.position.x=1300/2;
      camera.position.y=car.y;
      }
    
    if(keyDown("down")){
      camera.position.x=1300/2;
      camera.position.y=car.y;
        }
        
    
    if(keyDown("up")){
      car.y=car.y-5;
        
    }
    
    if(keyDown("down")){
      car.y=car.y+5;
  
    }
    
    if(keyDown("left")){
      car.x=car.x-5;
  
    }
    
    
    if(keyDown("right")){
      car.x=car.x+5;
    
    }
  
    if(car.isTouching(redCarGroup)){
      damage=damage+50;
      redCarGroup.destroyEach();
      
      }
      
      if(car.isTouching(blueCarGroup)){
        damage=damage+50;
      blueCarGroup.destroyEach();
      
        
        }
        
      if(car.isTouching(blackCarGroup)){
          damage=damage+50;
      blackCarGroup.destroyEach();
          
          }
       
      spawnblueCars();
      spawnredCars();
      spawnblackCars();


     

}

if(distance===50){
  gameState===END;
  background(wonImage);
  bg.visible=false;
  car.visible=false; 
  redCarGroup.destroyEach(); 
  blueCarGroup.destroyEach(); 
  blackCarGroup.destroyEach();
  play.destroy();

camera.destroy();

textSize(50);
fill("white");
stroke("black");
strokeWeight(8);
text("If you liked the game don't forget to like it :D",100,250);

}



if(damage===300 ){

gameState===END;
background(gameoverImage);
bg.visible=false;
car.visible=false; 
redCarGroup.destroyEach(); 
blueCarGroup.destroyEach(); 
blackCarGroup.destroyEach();
play.visible=false;

textSize(50);
fill("white");
stroke("white");
strokeWeight("5");
text("Better,Try Next Time",500,480);

camera.destroy();


}


 drawSprites();

 textSize(20);
 fill("white");
 stroke("red");
 text("NOTE:Reach the distance=50 ,you'll win ,If damage will 300 you will lost!!",380,10);


  fill("white");
  stroke("black");
  strokeWeight(5);
  textSize(20);
  text("Distance :  "+ distance , 50,20);


  textSize(20);
  fill("white");
  stroke("black");
  strokeWeight(5);
  text("Damage : "+ damage , 250,20);

  
  
}



function race(){

  gameState===PLAY;
  bg.velocityX=-20;
  start.velocityX=-20;

  }


function spawnblueCars() {

  if (frameCount % 300 === 0) {
 bluecars = createSprite(600,250,40,10); 
 bluecars.y = random(100,450);
 bluecars.x=800;
  
  bluecars.velocityX = -8;
  
  
  bluecars.lifetime = 300; 
  
  blueCarGroup.add(bluecars);
  
  bluecars.addImage(car1Image);
  bluecars.scale=0.3;
  
} 
}


function spawnredCars() {

  if (frameCount % 400 === 0) {
 redcars = createSprite(600,250,40,10); 
 redcars.y = random(100,450);
 redcars.x=800;
  
  redcars.velocityX = -11;
  
  
  redcars.lifetime = 300; 
  
  redCarGroup.add(redcars);
  redcars.addImage(car3Image);
  redcars.scale=0.4;
  
} 
}


function spawnblackCars() {

  if (frameCount % 650 === 0) {
 blackcars = createSprite(600,250,40,10); 
 blackcars.y = random(100,450);
 blackcars.x=800;
  
  blackcars.velocityX = -13;
  
  
  blackcars.lifetime = 300; 
  
  blackCarGroup.add(blackcars);
  
  blackcars.addImage(car2Image);
  blackcars.scale=0.4;
  
} 
}


