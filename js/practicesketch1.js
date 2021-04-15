const xPos = 350
const yPos = 210
let g = 100
function setup() {
  createCanvas(800, 800);
  noLoop();
  noStroke();
}

function draw() {
  background("#89cff0");
   //grass
  noStroke();
  fill("#77dd77");
  rect(0,400,g*8,g*4)
  //skirt
  stroke("#f43828");
  strokeWeight(4);
  fill("#f76d64");
  quad(xPos-50,yPos+50,xPos+50,yPos+50,xPos+75,yPos+180,xPos-75,yPos+180);
  //left ear
  stroke("#f3a7d0");
  strokeWeight(4);
  fill("#f9cfe5");
  ellipse(xPos-50,yPos-60,g-70,g-40);
  //right ear
  ellipse(xPos,yPos-70,g-70,g-40);
  //snout
  stroke("#f3a7d0");
  strokeWeight(4);  
  fill("#f9cfe5");
  ellipse(xPos+60,yPos-40,g+20,g-20);
  //nose
  ellipse(xPos+100,yPos-40,g/2-10,g/1.5-15);
  //face
  noStroke();
  fill("#f9cfe5");
  ellipse(xPos,yPos,g+50,g+50);
  //nostrils
  stroke("#cf7daa");
  strokeWeight(10);
  point(xPos+90,yPos-40);
  point(xPos+105,yPos-45);
  //smile
  noFill();
  stroke("#f5579c");
  strokeWeight(5);
  arc(xPos+10, yPos+10, 60, 50, 0, PI);  
  //left eye
  stroke("#f3a7d0");
  strokeWeight(4);
  fill("white");
  ellipse(xPos-20,yPos-40,g/5,g/5);
  noStroke();
  fill("black");
  ellipse(xPos-23,yPos-37,g/10,g/10);
  //right eye
  stroke("#f3a7d0");
  strokeWeight(4);
  fill("white");
  ellipse(xPos+15,yPos-50,g/5,g/5);
  noStroke();
  fill("black");
  ellipse(xPos+12,yPos-48,g/10,g/10);
  //blush
  fill("#f9b0d4");
  ellipse(xPos-40,yPos,g/3,g/3);
  //legs
  stroke("#f9cfe5");
  strokeWeight(6);
  line(xPos-30,yPos+185,xPos-30,yPos+210);
  line(xPos+30,yPos+185,xPos+30,yPos+210);
  //arms
  line(xPos-50,yPos+80,xPos-100,yPos+100);
  line(xPos+60,yPos+80,xPos+110,yPos+100);
  //shoes
  stroke("black");
  strokeWeight(8);
  line(xPos-30,yPos+210,xPos-10,yPos+210);
  line(xPos+30,yPos+210,xPos+50,yPos+210);
}