
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width / 2, 670, width, 20);
	box1 = new Dustpin(1250, 670, 200, 20)
	box2 = new Dustpin(1150,610,20,100);
	box3 = new Dustpin(1350,610,20,100)
	paper = new Paper(200, 450, 40)
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("grey");


	drawSprites();
	ground.display();
	paper.display();
	box1.display();
	//box2.display();
	//box3.display();
	
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
    
  	}
}

