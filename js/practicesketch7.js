let r,g,b;
let h,s,br;

function setup() {
  createCanvas(800, 800);

}

function draw() {
  colorMode(HSB);
  h=random(0,360);
  s=50;
  br=70;
  stroke(h,s,br);
  strokeWeight(15);
  background(220);
  //pink
  colorMode(RGB);
  r=255;
  g=random(0,102);
  b=random(127,178);
  fill(r,g,b);
  triangle(0,0,0,200,200,0);
  //red
  fill(r,g,g);
  quad(0,200,200,0,400,0,0,400);
  //orange
  fill(r,b,g);
  quad(0,400,400,0,600,0,0,600);
  //yellow
  fill(r,r,g);
  quad(0,600,600,0,800,0,0,800);
  //green
  fill(g,r,g);
  quad(0,800,800,0,800,200,200,800);
  //blue
  fill(g,r,r);
  quad(200,800,800,200,800,400,400,800);
  //indigo
  fill(g,g,r);
  quad(400,800,800,400,800,600,600,800);
  //purple
  fill(b,g,r);
  triangle(600,800,800,600,800,800);
}