var song;
// let x=10;
// let y=10;
// let xspeed=2;
// let yspeed=5;

function preload(){
  song = loadSound("scream.mp3");
}

function setup() {
  createCanvas(400, 400);
  song.play();
}

function draw() {
  background(0);
//   x+=xspeed;
//   y+=yspeed;
//   ellipse(x,y,50,50);
  
//    if (x>width || x<0){
//   xspeed=-xspeed;
//   }
//    if (y>height || y<0){
//   yspeed=-yspeed;
//   }
}