const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world,ground;
var fundoimagem;
var torre;
var torreimagem;
var canhaovar;
var angle=60;


function preload() {

fundoimagem=loadImage("./assets/background.gif");  
torreimagem=loadImage("./assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 torre= Bodies.rectangle(160,350,160,310,options);
 World.add(world,torre);
 
canhaovar=new canhao(180,110,130,100,angle);

}

function draw() {
  background(fundoimagem);
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
 
 push();
 imageMode(CENTER);
 image(torreimagem,torre.position.x, torre.position.y,160,310);
 pop(); 

 canhaovar.show();
   
}
