//Add 4 more shades to the array.

var shade=[10,20,25,45,60,70,80,90,100]


function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(HSB);
  noStroke();
	
	for(i=0;i<shade.length;i=i+1){
  fill(shade[i], 100, 100);
  rect(i*width/shade.length, 0, width/shade.length, height);
	}
}
