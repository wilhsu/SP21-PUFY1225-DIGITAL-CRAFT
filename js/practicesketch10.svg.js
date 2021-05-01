function setup() {
  createCanvas(400,400,SVG);
  noStroke();
}

function draw() {
  colorMode(RGB);
  background(255);
  let x=10;
  let y=10;
  for (let x=10;x<width+50;x+=20){
    for (let y=10;y<height+50;y+=30){
    fill(x,100,y,150);
    ellipse (x,y,30,50);
    }
  }
  save("ombrepicnic.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
}
