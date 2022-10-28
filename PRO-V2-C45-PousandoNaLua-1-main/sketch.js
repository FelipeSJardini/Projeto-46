let ground;
let lander;
var lander_img;
var bg_img;
var player, player_img, player_fire1, player_fire2
var player_right, player_left

//vx = Velocidade X, g = Gravidade, vy = Velocidade Y
var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
lander_img = loadImage("plataforma.png")
bg_img = loadImage("bg.png")
player_img = loadAnimation("normal.png")
player_fire1 = loadAnimation("normal.png","b_thrust_2.png.png","b_thrust_3.png")
player_fire2 = loadImage("b_thrust_3.png")
player_left = loadAnimation("left_thruster_1.png","left_thruster_2.png")
player_right = loadAnimation("right_thruster_1.png","right_thruster_2.png")
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
//criar sprite lander e add imagem e scale
  ground = createSprite(200,650,1050,40)
  lander = createSprite(880,595,180,120)
  lander.addImage(lander_img)
  lander.scale = 0.4
  player = createSprite(100,50,30,30)
  player.addAnimation("noAnimation",player_img)
  player.scale = 0.1
  player.addAnimation("playerUp",player_fire1)
  player.addAnimation("playerLeft",player_left)
  player.addAnimation("playerRight",player_right)


  rectMode(CENTER);
  textSize(15);
}

function draw() 
{

  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  //colocar texto na tela para velocidade vertical
  text("Velocidade Vertical " + round(vy), 800, 140)
  pop();

  //configurar a descida da nave em y + gravidade
  vy = vy + g
  player.y = player.y + vy
  player.x = player.x + vx
  drawSprites();
}

function keyPressed(){
  if (keyCode == UP_ARROW) {
    vy = - 1.5
    player.changeAnimation("playerUp")
  }
  if (keyCode == LEFT_ARROW) {
    vx = - 1.5
    player.changeAnimation("playerLeft")
  }
  if (keyCode == RIGHT_ARROW) {
    vx = + 1.5
    player.changeAnimation("playerRight")
  }
}

function keyReleased(){
  if (keyCode == UP_ARROW||keyCode == LEFT_ARROW||keyCode == RIGHT_ARROW ) {  
    player.changeAnimation("noAnimation")
  }
  
}

  