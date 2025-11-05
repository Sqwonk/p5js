var bgred = 220;
var bggreen = 220;
var bgblue = 220;
var score = 0;

var ballx = 50;
var bally = 50;
var rectx = 50;
var recty = 50;

var disToBall;

var ballSize = 50;
var rectSize = 30;

var difficulty = 50;

function setup(){
createCanvas (400, 400);
textAlign(CENTER);
}


function draw(){
background(bgred, bggreen, bgblue);

disToBall = dist (ballx, bally, mouseX, mouseY);

text('Score: ' + score, width/2, 40);
text('MouseX: ' + mouseX, 40, 40);
text('MouseY: ' + mouseY, 40, 80);
text('Distance: ' + disToBall, 90, 120);

ballActivity();
}

function levelOne() {
  bgred = 220;
  bggreen = 0;
  bgblue = 0;
  difficulty = 25;
}

function levelTwo() {
  bgred = 0;
  bggreen = 220;
  bgblue = 0;
  ballSize = 25;
  difficulty = 10;
}

function levelThree() {
  bgred = 0;
  bggreen = 0;
  bgblue = 220;
  difficulty = 25;
}

function mousePressed(){
  if (disToBall < difficulty){
   ballx = random (0, 400);
   bally = random (0, 400);
   rectx = random (0, 400);
   recty = random (0,400);
   score = score + 1;
}
}

function ballActivity() {
 if (score < 5) {
   levelOne();
 ellipse (ballx, bally, ballSize, ballSize);
} else if (score >= 5 & score < 10) {
  levelTwo();
  ellipse (ballx + random(10), bally + random(10), ballSize, ballSize);
} else if (score >= 10) {
  levelThree();
  ellipse (ballx, bally, ballSize, ballSize);
  rect (rectx, recty, rectSize, rectSize);
}
}
