//when you click on canvas, the gray square will change's brightness

var x=200;

function setup(){
colorMode(RGB);
createCanvas(350,350);
}

function draw(){
noStroke(0);
fill(x);
rect(1,1,175,175);

noStroke(0);
fill(69,195,241);
rect(175,175,175,175);


noStroke(0);
fill(255,240,126);
rect(175,1,350,175);

noStroke(0);
fill(240,80,100);
rect(1,175,175,350);


}

	function mousePressed(){
	x=mouseX;
	}
