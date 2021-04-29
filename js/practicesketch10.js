function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  colorMode(HSB);
  background(0);
  let x=10;
  let y=10;
  for (let x=10;x<width+50;x+=20){
    for (let y=10;y<height+50;y+=25){
    fill(random(0,60),90,90);
    ellipse (x,y,30,50);
    }
  }
}