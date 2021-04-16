const x=40
const y=40
let k=40
let c=9
function setup() {
  createCanvas(400, 400);
  noStroke();
  noLoop();
}

function draw() {
  background(255);
  //column 1
  fill(c);
  square(0,0,k);
  fill(2*c);
  square(0,2*y,k);
  fill(3*c);
  square(0,4*y,k);
  fill(4*c);
  square(0,6*y,k);
  fill(5*c);
  square(0,8*y,k);
  //column 2
  fill(6*c);
  square(x,y,k);
  fill(7*c);
  square(x,3*y,k);
  fill(8*c);
  square(x,5*y,k);
  fill(9*c);
  square(x,7*y,k);
  fill(10*c);
  square(x,9*y,k);
  
  //column 3
  fill(11*c);
  square(2*x,0,k);
  fill(12*c);
  square(2*x,2*y,k);
  fill(13*c);
  square(2*x,4*y,k);
  fill(14*c);
  square(2*x,6*y,k);
  fill(15*c);
  square(2*x,8*y,k);
  
  //column4
  fill(16*c);
  square(3*x,y,k);
  fill(17*c);
  square(3*x,3*y,k);
  fill(18*c);
  square(3*x,5*y,k);
  fill(19*c);
  square(3*x,7*y,k);
  fill(20*c);
  square(3*x,9*y,k);
  
  //column 5
   fill(21*c);
  square(4*x,0,k);
  fill(22*c);
  square(4*x,2*y,k);
   fill(23*c);
  square(4*x,4*y,k);
   fill(24*c);
  square(4*x,6*y,k);
   fill(25*c);
  square(4*x,8*y,k);
  
  //column 6
  fill(25*c);
  square(5*x,y,k);
  fill(24*c);
  square(5*x,3*y,k);
  fill(23*c);
  square(5*x,5*y,k);
  fill(22*c);
  square(5*x,7*y,k);
  fill(21*c);
  square(5*x,9*y,k);
  
  //column 7
  fill(20*c);
  square(6*x,0,k);
  fill(19*c);
  square(6*x,2*y,k);
  fill(18*c);
  square(6*x,4*y,k);
  fill(17*c);
  square(6*x,6*y,k);
  fill(16*c);
  square(6*x,8*y,k);
  
  //column 8
  fill(15*c);
  square(7*x,y,k);
  fill(14*c);
  square(7*x,3*y,k);
  fill(13*c);
  square(7*x,5*y,k);
  fill(12*c);
  square(7*x,7*y,k);
  fill(11*c);
  square(7*x,9*y,k);
  
  //column 9
  fill(10*c);
  square(8*x,0,k);
  fill(9*c);
  square(8*x,2*y,k);
  fill(8*c);
  square(8*x,4*y,k);
  fill(7*c);
  square(8*x,6*y,k);
  fill(6*c);
  square(8*x,8*y,k);
  
  //column 10
  fill(5*c);
  square(9*x,1*y,k);
  fill(4*c);
  square(9*x,3*y,k);
  fill(3*c);
  square(9*x,5*y,k);
  fill(2*c);
  square(9*x,7*y,k);
  fill(c);
  square(9*x,9*y,k);
}