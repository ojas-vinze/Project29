const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;
  
  
  ground = new Ground(390,300,180,20);
  
  hexagone = new Shooter(100,195,50);
  slingshot = new Slingshot(hexagone,{x:100,y:195});

  // level 1
  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);
  block5 = new Block(450,235,30,40);

  // level 2
  block6 = new Block(360,195,30,40);
  block7 = new Block(390,195,30,40);
  block8 = new Block(420,195,30,40);

  // level 3
  block9 = new Block(390,155,30,40);

}

function draw() {
  background("black");
  ground.display();
  hexagone.display();
  slingshot.display()

  // level 1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  // level 2
  block6.display();
  block7.display();
  block8.display();

  // level 3
  block9.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hexagone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}