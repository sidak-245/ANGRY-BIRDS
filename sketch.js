const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,380,50,100);
    box2 = new Box (920,380,50,100)
    box3 = new Box (720,250,40,70)
    box4= new Box (900,250,40,70)
    pig2 =new Pig (810,250)
    bird1 = new Bird(250,200)
    pig1= new Pig (810,380)
    log1 = new Log (810,280,20,270,PI/2)
    log2 = new Log (810,180,20,210,PI/2)
    ground= new Ground (200,390,15000,5)
}

function draw(){
    background(0);
    console.log (box2.body.angle)
    Engine.update(engine);
    box1.display();
    box2.display();
    box4.display();
    box3.display();
    log2.display();
    bird1.display();
    pig1.display();
    pig2.display();
    log1.display();
    
    ground.display();
   
}