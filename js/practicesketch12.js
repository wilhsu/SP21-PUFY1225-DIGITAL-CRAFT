let w=50;
let h=75;
let wspeed=5;
let hspeed=5;
let r,g,b;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255);
  
  r = random(250,255);
  g = random(30,135);
  b = random(40,245);
  
  stroke(r,g,b);
  strokeWeight(random(2,15));
  noFill();
  ellipse(width/2,height/2,w,h);
  
  w+=wspeed;
  h+=hspeed;
  
  if (w>width || w<50){
    wspeed=-wspeed;
    if(h>height||h<50){
    hspeed=-hspeed;
    }
  }

  for (let r=0;r<width;r+=20){
    ellipse(r,height/2,w,h);
  }
  
}