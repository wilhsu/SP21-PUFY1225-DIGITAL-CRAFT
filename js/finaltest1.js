var wave;
let f=100;
let img;

//toxic chemicals
let x=300;
let y=300;
let xspeed=5;
let yspeed=4;
let i=250;
let tc=3477504;
let c;

//desertification
let x2=250;
let y2=250;
let xspeed2=4;
let yspeed2=2;
let u=220;
let d=4261478;
let c2;

//CO2 emissions
let x3=400;
let y3=400;
let xspeed3=20;
let yspeed3=22;
let o=400;
let co=12879880457;
let c3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(20);
  wave = new p5.Oscillator();
  wave.setType(sin);
  wave.start();
  wave.amp(1);
  wave.freq(f);

  //title
  fill(50);
  rect(0,0,width,50);
  fill(255);
  textAlign(LEFT);
  text('environmental pollution of 2021',20,40);
  //display
  fill(35);
  rect(0,50,width,60);
  fill(50,200,50);
  text(d,50,90);
  fill(200,50,50);
  text(tc,width/3+50,90);
  fill(50,50,200);
  text(co,width/3*2+50,90);

  //CO2 emissions
  x3+=xspeed3;
  y3+=yspeed3;
  fill(50,50,c3,180);
  ellipse(x3,y3,o);
  textSize(40);
  fill(150,150,250);
  text('CO2 emissions',x3-130,y3+10);
  text(co,x3-110,y3+50);
  if (x3>width-o/2||x3<o/2){
    c3=random(50,200);
    xspeed3=-xspeed3;
    co+=100;
    f+=1;
  }
  if (y3>height-o/2||y3<o/2+130){
    c3=random(50,200);
    yspeed3=-yspeed3;
    co+=100;
    f+=1;
  }

  //toxic chemicals
  x+=xspeed;
  y+=yspeed;
  fill(c,50,50,100);
  ellipse(x,y,i);
  textSize(32);
  fill(250,150,150);
  text('toxic chemicals',x-110,y+5);
  text(tc,x-65,y+35);
  if (x>width-i/2||x<i/2){
    xspeed=-xspeed;
  }
  if (y>height-i/2||y<i/2+130){
    c=random(50,200);
    yspeed=-yspeed;
    tc+=1;
  }

  //desertification
  x2+=xspeed2;
  y2+=yspeed2;
  fill(50,c2,50,50);
  ellipse(x2,y2,u);
  textSize(30);
  fill(150,250,150);
  text('desertification',x2-95,y2+10);
  text(d,x2-65,y2+40);
  if (x2>width-u/2||x2<u/2){
    xspeed2=-xspeed2;
    c2=random(50,200);
    d+=1;
  }
  if (y2>height-u/2||y2<u/2+130){
    yspeed2=-yspeed2;
  }
}