var circle=[];


function setup(){
	createCanvas(400,400)
	background(235)
	colorMode(HSB)
	var count=0
	while(count<100){
	circle.push({
	x:10,
	y:10,
	vx:20,
	vy:20,
	r:5,
	h:random(360)
	});
		count=count+1
	}
}

function draw(){
	strokeWeight(2);
	circle.forEach(paint);
function paint(circle){
	fill(circle.h,100,100);
	ellipse(circle.x,circle.y,circle.r*2,circle.r*2)
function circleGrid(circle){
	if (circle.x<=width||circle.y<=width){
		circle.x+=circle.xv;
		circle.y+=circle.yv;
		fill(circle.h,100,100);
		ellipse(circle.x,circle.y,circle.r*2,circle.r*2)
	}
}
}
}


