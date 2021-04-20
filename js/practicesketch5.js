let r,g,b;
let r2,g2,b2;
let r3,g3,b3;
var xpos=0;
var ypos=0;
var xpos2=0;
var ypos2=0;
let circleDiam;
let lineWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#ffdfd3");
  noStroke();
  
}

function draw() {
  //blue ellipses
  noStroke();
  r = 0;
  g = random(0,150);
  b = random(150,255);
  xpos = random(0,width);
  ypos = random(height/2,height);
  fill(r,g,b,150);
  ellipse(xpos,ypos,50,25);
  
  //orange squares
  noStroke();
  r2 = random(200,255);
  g2 = random(50,100);
  b2 = 0;
  xpos2 = random(width/6,width/3);
  ypos2 = random(0,height/2);
  fill(r2,g2,b2,100);
  square(xpos2,ypos2,10);
  
  //circle
  r3 = random(0,255);
  g3 = 0;
  b3 = random(0,255);
  lineWidth = random(2,10);
  circleDiam = random(100,250);
  stroke(r2,g2,b2,10);
  strokeWeight(lineWidth);
  fill(r3,g3,b3,10);
  circle(windowWidth-200,windowHeight/4,circleDiam);
  
  
}