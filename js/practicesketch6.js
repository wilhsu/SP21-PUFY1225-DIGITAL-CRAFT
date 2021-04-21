const x=400
const y=400
let k= 200
let g= 200

let circleShade;

let h,s,b;

function setup() {
  createCanvas(800, 800);
   
}

function draw() {
  //background
  h = random(0,360);
  s = random(50,75);
  b = 100;
  colorMode(HSB);
  background(h,s,b);
  //circles 1st row
  k = random(180,200);
  noStroke();
  //circleShade=random(0,255);
  //fill(circleShade);
  fill(h,h,h);
  circle(0,0,k);
  circle(g,0,k);
  circle(g*2,0,k);
  circle(g*3,0,k);
  circle(g*4,0,k);
  //2nd row
  circle(0,g,k);
  circle(g,g,k);
  circle(g*2,g,k);
  circle(g*3,g,k);
  circle(g*4,g,k);
  //3rd row
  circle(0,g*2,k);
  circle(g,g*2,k);
  circle(g*2,g*2,k);
  circle(g*3,g*2,k);
  circle(g*4,g*2,k);
  //4th row
  circle(0,g*3,k);
  circle(g,g*3,k);
  circle(g*2,g*3,k);
  circle(g*3,g*3,k);
  circle(g*4,g*3,k);
  //5th row
  circle(0,g*4,k);
  circle(g,g*4,k);
  circle(g*2,g*4,k);
  circle(g*3,g*4,k);
  circle(g*4,g*4,k);
  
  //feet
  fill("#e0005b");
  ellipse(x-100,y+180,g-20,g-60);
  ellipse(x+100,y+180,g-20,g-60);
  //hands
  fill("#f3a5aa");
  ellipse(x-180,y+20,g-50,g-100);
  ellipse(x+180,y+20,g-50,g-100);
  //body and face
  circle(x,y,g*1.9);
  //left eye
  stroke("#040000");
  strokeWeight(4);
  fill(212,s,h);
  ellipse(x-40,y-50,g/5,g/2);
  fill("#040000");
  ellipse(x-40,y-60,g/6,g/3);
  fill("#ffffff");
  ellipse(x-40,y-75,g/7,g/4);
  //right eye
  stroke("#040000");
  strokeWeight(4);
  fill(212,h,s);
  ellipse(x+40,y-50,g/5,g/2);
  fill("#040000");
  ellipse(x+40,y-60,g/6,g/3);
  fill("#ffffff");
  ellipse(x+40,y-75,g/7,g/4);
  //blush
  noStroke();
  fill("#eb6896");
  ellipse(x-100,y,g/3,g/6);
  ellipse(x+100,y,g/3,g/6);
  //smile
  noFill();
  stroke("#040000");
  strokeWeight(4);
  arc(x, y+20, 40, 30, 0, PI);  
}
