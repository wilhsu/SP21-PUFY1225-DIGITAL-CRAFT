let h,s,b;
var xpos=0;
var ypos=0;
let circleSize;

function setup() {
  createCanvas(750, 750);
  noStroke();
  background(255);

}

function draw() {
  colorMode(HSB);
  //random values
  h=random(0,360);
  s=random(60,80);
  b=random(50,100);
  xpos=random(0,375);
  ypos=random(375,700);
  circleSize=random(0,300);
  
  //green
  noFill();
  strokeWeight(2.5);
  stroke(110,s,b);
  rect(xpos,ypos,5,80);
  //red
  stroke(360,s,b);
  rect(xpos+180,ypos-350,80,5);
  //blue
  stroke(220,s,b);
  rect(ypos,xpos,80,5);
  //orange
  stroke(20,s,b);
  rect(xpos,ypos-400,5,80);
  //purple
  stroke(270,s,b);
  rect(ypos-400,xpos+250,80,5);
  //pink
  stroke(330,s,b);
  rect(ypos+30,xpos+300,5,80);
  //yellow
  stroke(50,s,b);
  rect(xpos+250,ypos+100,80,5);
  
  //circle
  stroke(h,100,100);
  strokeWeight(1);
  circle(375,375,circleSize);
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}
