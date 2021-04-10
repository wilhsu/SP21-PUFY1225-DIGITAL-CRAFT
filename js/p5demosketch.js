function setup(){
	createCanvas(600,600);
}
function draw(){
	var rectWidth = 50;
	var rectHeight = 50;
	background(200);
	noStroke();
	fill("red");
	ellipse(width/2,height/2,100,100);
	stroke(0);
	fill("green");
	rect(width/2-rectWidth/2,height/2-rectHeight/2,50,50);
	noStroke();
	fill("blue");
	ellipse(width/2,height/2,20,20);
	stroke(0);
	fill(200,0,200,50);
	triangle(width/2,100,320,100,310,80);
}