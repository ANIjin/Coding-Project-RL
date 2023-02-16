const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var player;
var npc;
var playerJump;
var npcJump;
var ground,groundImg;
var playerImg;
var npc,npcImg;
var leftGoal,leftGoalImg;
var rightGoal,rightGoalImg;
var invisGround;
var backgroundImg;
var background1;
var ball,ballImg;
var jumps = 2;
var engine,world;
var goalscore=0;
function preload(){
playerImg = loadImage("assets/Player.png")
playerJump = loadImage("assets/Jump.png")
npcImg = loadImage("assets/NPC.png")
leftGoalImg = loadImage("assets/LeftGoal.png")
rightGoalImg = loadImage("assets/RightGoal.png")
groundImg = loadImage("assets/Grass.png")
backgroundImg = loadImage("assets/field.png")
ballImg = loadImage("assets/ball.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 // background1 = createSprite(400,200)
  //background1.addImage("field",backgroundImg)
  player = createSprite(250, 360)
  player.addImage("main", playerImg)
  player.addImage("jump", playerJump)
  player.scale = 3
  npc = createSprite(550, 360)
  npc.addImage("bot", npcImg)
  npc.scale = 3
  leftGoal = createSprite(50, 310)
  leftGoal.addImage("goal1", leftGoalImg)
  leftGoal.scale = 0.02
  rightGoal = createSprite(750,310)
  rightGoal.addImage("goal2", rightGoalImg)
  rightGoal.scale = 0.02
  var ground_options ={
    isStatic: true
  };
  ground = Bodies.rectangle(400,390,400,20,ground_options);
  World.add(world,ground);
  var options = {
    isStatic:true
  }
  
  ball = createSprite(400, 360)
  ball.addImage("ball1", ballImg)
  ball.scale = 0.25
  //ball = Bodies.circle(400,250,30,options)
  //World.add(world,ball)
  //ground = createSprite(400,390)
  //ground.addImage("grass", groundImg)
  //ground.scale = 0.6
  invisGround = createSprite(400,400,800,10)
  //invisGround.visible = false;
  rectMode(CENTER);
  ellipseMode(RADIUS)

}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  text(mouseX+","+mouseY,mouseX,mouseY)
  ball.bounceOff(player)
  text(goalscore,780,20)

  if(keyIsDown(LEFT_ARROW)){
    player.x -= 5
  }
  if(keyIsDown(RIGHT_ARROW)){
    player.x +=5
  }
  if(keyIsDown(UP_ARROW)){
    if(player.collide(invisGround)){
      player.velocity.y = -10
  
    }
    player.changeImage("jump",playerJump)
  }else{
    player.changeImage("main", playerImg)
  }
  if(ball.collide(rightGoal)){
    goalscore+=1
    
  }
  player.velocity.y += 0.5
  rect(ground.position.x,ground.position.y,800,20);
 player.collide(invisGround)
 image(ballImg,ball.position.x,ball.position.y,100,100)
  drawSprites();
  
}
