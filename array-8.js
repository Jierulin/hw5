var shade=[10,20,25,45,60,70,80,90,100]
var clicknumber=0
var 	v=0.011

function setup() {
  createCanvas(400, 400);

}


function draw() {


	colorMode(HSB);
  noStroke();
	
	for(i=0;i<shade.length-1;i=i+1){
  fill(shade[i], 100, 100);
  rect(i*width/(shade.length+clicknumber), 0, width/(shade.length+clicknumber), height);

	}
	
	clicknumber+=v;	
		
}
