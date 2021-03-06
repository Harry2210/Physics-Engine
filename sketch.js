const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var object;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_option = {
        isStatic : true
    }
    var ball_option ={
        isStatic : false,
        restitution: 0.6
    }

    ground = Bodies.rectangle(200,390,200,20,ground_option);
    World.add(world, ground);
    ball=Bodies.circle(200,50,20,ball_option)

    World.add(world,ball);
    

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,200,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}
