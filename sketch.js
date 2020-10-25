var bullet;
var wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(0, 200, 90, 40);
  wall = createSprite(1300, 200, thickness, 256);
  
  speed = random(223, 321);
  weight = random(30, 52);
  bullet.velocityX = speed;

  thickness = random(22, 83);
  wall.debug = true;
}

function draw() {
  background(0);

  if(Collision(bullet, wall)){
    bullet.velocityX = -0;
    var Damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if(Damage > 10){
      wall.shapeColor = color(255, 0, 0);
    }

    if(Damage < 10){
      wall.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}