const x=400
const y=400
let k= 200
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("#fed000");
  //circles 1st row
  noStroke();
  fill("#24346c");
  circle(0,0,k);
  circle(k,0,k);
  circle(k*2,0,k);
  circle(k*3,0,k);
  circle(k*4,0,k);
  //2nd row
  circle(0,k,k);
  circle(k,k,k);
  circle(k*2,k,k);
  circle(k*3,k,k);
  circle(k*4,k,k);
  //3rd row
  circle(0,k*2,k);
  circle(k,k*2,k);
  circle(k*2,k*2,k);
  circle(k*3,k*2,k);
  circle(k*4,k*2,k);
  //4th row
  circle(0,k*3,k);
  circle(k,k*3,k);
  circle(k*2,k*3,k);
  circle(k*3,k*3,k);
  circle(k*4,k*3,k);
  //5th row
  circle(0,k*4,k);
  circle(k,k*4,k);
  circle(k*2,k*4,k);
  circle(k*3,k*4,k);
  circle(k*4,k*4,k);
  
  //feet
  fill("#e0005b");
  ellipse(x-100,y+180,k-20,k-60);
  ellipse(x+100,y+180,k-20,k-60);
  //hands
  fill("#f3a5aa");
  ellipse(x-180,y+20,k-50,k-100);
  ellipse(x+180,y+20,k-50,k-100);
  //body and face
  circle(x,y,k*1.9);
  //left eye
  stroke("#040000");
  strokeWeight(4);
  fill("#0076c0");
  ellipse(x-40,y-50,k/5,k/2);
  fill("#040000");
  ellipse(x-40,y-60,k/6,k/3);
  fill("#ffffff");
  ellipse(x-40,y-75,k/7,k/4);
  //right eye
  stroke("#040000");
  strokeWeight(4);
  fill("#0076c0");
  ellipse(x+40,y-50,k/5,k/2);
  fill("#040000");
  ellipse(x+40,y-60,k/6,k/3);
  fill("#ffffff");
  ellipse(x+40,y-75,k/7,k/4);
  //blush
  noStroke();
  fill("#eb6896");
  ellipse(x-100,y,k/3,k/6);
  ellipse(x+100,y,k/3,k/6);
  //smile
  noFill();
  stroke("#040000");
  strokeWeight(4);
  arc(x, y+20, 40, 30, 0, PI);  
}
