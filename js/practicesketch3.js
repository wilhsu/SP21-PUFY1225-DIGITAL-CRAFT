const x=250
const y=150
let g=100
let k=150
function setup() {
  createCanvas(800, 800);
  noLoop();
  noStroke();
}

function draw() {
  background("#99b89b");
  //square background
  fill("#e1f5c4");
  square(0,0,g*7);
  fill("#ede574");
  square(0,0,g*6);
  fill("#f9d423");
  square(0,0,g*5);
  fill("#fc913a");
  square(0,0,g*4);
  fill("#ff4e50");
  square(0,0,g*3);
  //circles
  fill("#f8b195");
  circle(x-100,y,g*2+50);
  fill("#f67280");
  circle(x-100,y,g*2);
  fill("#c06c84");
  circle(x-100,y,g+50);
  fill("#6c5b7b");
  circle(x-100,y,g);
  fill("#355c7d");
  circle(x-100,y,g-50);
    
  fill("#f8b195");
  circle(x+k,y+k,g*3+50);
  fill("#f67280");
  circle(x+k,y+k,g*3);
  fill("#c06c84");
  circle(x+k,y+k,g*2+50);
  fill("#6c5b7b");
  circle(x+k,y+k,g*2);
  fill("#355c7d");
  circle(x+k,y+k,g*2-50);
  
  fill("#f8b195");
  circle(x+3*k,y+3*k,g*4+50);
  fill("#f67280");
  circle(x+3*k,y+3*k,g*4);
  fill("#c06c84");
  circle(x+3*k,y+3*k,g*3+50);
  fill("#6c5b7b");
  circle(x+3*k,y+3*k,g*3);
  fill("#355c7d");
  circle(x+3*k,y+3*k,g*3-50);

  //ellipses
  fill("#ee4540");
  ellipse(x,y+500,g*4,g*2);
  fill("#c72c41");
  ellipse(x,y+500,g*4-50,g*2-50);  
  fill("#801336");
  ellipse(x,y+500,g*3,g);  
  fill("#510a32");
  ellipse(x,y+500,g*3-50,g-50); 
  fill("#2d142c");
  ellipse(x,y+500,g*2,g-80);
  
  fill("#ee4540");
  ellipse(x+3*k,y,g*4,g*2);
  fill("#c72c41");
  ellipse(x+3*k,y,g*4-50,g*2-50);  
  fill("#801336");
  ellipse(x+3*k,y,g*3,g);  
  fill("#510a32");
  ellipse(x+3*k,y,g*3-50,g-50); 
  fill("#2d142c");
  ellipse(x+3*k,y,g*2,g-80);

}

 