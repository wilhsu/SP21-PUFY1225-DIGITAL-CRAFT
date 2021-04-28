let x=0;
let y=0;
let xspeed=30;
let yspeed=20;
let i=50;
let h;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  colorMode(HSB);
  fill(h,100,100);
  strokeWeight(10);
  ellipse(x,y,i,i);
  circle(x+150,y,i);
  rect(x+50,y,i,i);
  
  x +=xspeed;
  y +=yspeed;
  
  if (x>width-i/2 || x<0){
    xspeed = -xspeed;
    h = random(0,360);
    background(random(0,360),100,100);
    stroke(random(0,360),100,100);
    
  }
  if (y>height-i/2 || y<0){
    yspeed = -yspeed; 
    h = random(0,360);
    background(random(0,360),100,100);
    stroke(random(0,360),100,100);
    
  }
}