
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg;
var citizen
var citizen1
var citizen2
var citizen3
var citizen4
var citizen5

var helicopter

var helipad;
var helipadImg;

var hospital;
var hospitalImg

var ground;

function preload(){

  backgroundImg =loadImage('backgroundPic.jpg');
  citizenImg = loadImage('citizen.png');
  helipadImg = loadImage('helipad.png');
  hospitalImg = loadImage('hospital.png');

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  helicopter = new Helicopter(30,310,200,100, {isStatic:true});

  helipad = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, helipad);

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  hospital = Bodies.rectangle(840, 200, 220, 500, { isStatic: true });
  World.add(world, hospital);



  
    citizen = new Citizen(450,60,50,50);
    citizen1 = new Citizen(170, 170, 40,40)
    citizen2 = new Citizen(240, 40, 30,30)
    citizen3 = new Citizen(450, 300, 60,60)
    citizen4 = new Citizen(600, 40, 30,30)
    

  
  

  
  



  //citizen1= createSprite(250,50,50,50);
  //citizen1.addImage(citizenImg)

  


  
  
}


function draw() 
{
  background(51);
  image(backgroundImg,0,0,width,height);
  
  Engine.update(engine);

  push();
  translate(helipad.position.x, helipad.position.y);
  imageMode(CENTER);
  image(helipadImg,-120, 50, 100,200)
  
  pop();

  push();
  translate(hospital.position.x, hospital.position.y);
  imageMode(CENTER);
  image(hospitalImg,400, 260, 220,500)
  pop();

  push();
  translate(ground.position.x, ground.position.y);
  fill("yellow");
  rectMode(CENTER);
  rect(0, 0, width * 2, 1);
  pop();

 

  helicopter.show();
  citizen.show();
  citizen1.show();
  citizen2.show();
  citizen3.show();
  citizen4.show();
  
  
var collision = Matter.SAT.collides(helicopter.body, citizen.body);

if(collision.collided){
  console.log("check");
}
  
  drawSprites();

  if(collide(helicopter,citizen1,20)==true){
    console.log("check");
  }
}

function collide(body,citizen1,x)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,citizen1.position.x,citizen1.position.y);
          if(d<=x)
            {
               return true; 
            }
            else{
              return false;
            }
         }
}


  



