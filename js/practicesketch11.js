let x2=200;
let y2=200;
let xspeed=20;
let yspeed=25;
let i=50;
let h;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  colorMode(HSB);

  strokeWeight(4);
  fill(random(0,360),100,100);
  ellipse(x2,y2,100);
  
  x2+=xspeed;
  y2+=yspeed;
  
  if (x2>windowWidth || x2<25){
  xspeed = -xspeed;
  stroke(random(0,360),50,50);
}
  if (y2>windowHeight || y2<25){
  yspeed = -yspeed;
  stroke(random(0,360),50,50);
  }
  
  noFill();
for (let x=0;x<width;x+=45){
  for (let y=0;y<height;y+=45){
      ellipse(x,y,random(50,55));
    }
  }
}