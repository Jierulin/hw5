
var x=50;
		y=165;
		a=280;
		b=165;
		v=10;

function setup(){
createCanvas(332,332)
stroke(0);
fill(255);
rect(1,1,330,330)
colorMode(RGB);
}

function draw(){
stroke(255,0,0);
line(50,165,280,165)

	if (x<=90){
	x=x+v
	y=y+v
	a=a-v
	b=b-v
	line(x,y,a,b)	
	}
}
