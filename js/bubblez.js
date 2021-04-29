let bubbles = [];

function setup() {
  createCanvas(400, 800);
}

function mousePressed(){
  let r = random(10,50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function draw() {
  colorMode(RGB);
  background(255, 255, 255, 0.5);
  for (let i = 0; i<bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  move(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }
  
  show(){
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x,this.y,this.r*2);
  }
}