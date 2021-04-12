function setup(){
	createCanvas(400,400);
}
function draw(){
	background("gray");
	//main body of camera
	noStroke();
	fill("#c8060b");
	rect(42,147,315,175);
	//frame sqaure
	fill("black");
	rect(170,155,47,31);
	fill("#4b3c38");
	rect(185,164,18,13);
	//flash
	fill("#a17975");
	rect(270,153,52,25);
	//flash switch
	fill("black");
	rect(265,222,54,20);
	fill("#292823")
	rect(266,223,31,18);
	//shutter
	fill("black");
	rect(115,139,36,8);
	//dots on the side
	fill("black");
	ellipse(81.28,297.41,2,2);
	ellipse(79.27,289.13,2,2);
	ellipse(76.75,280.41,2,2);
	ellipse(75.74,272.39,2,2);
	ellipse(74.75,262.61,2,2);
	ellipse(75.28,310.4,2,2);
	ellipse(73.28,302.12,2,2);
	ellipse(70.75,293.4,2,2);
	ellipse(69.75,285.4,2,2);
	ellipse(68.75,275.62,2,2);
	fill("#f1c6c3");
	rect(302,266,32,28);
	//lens
	fill("black");
	ellipse(170,240,40,40);
	stroke(3);
	noFill();
	ellipse(170,240,92,92);
}