

var shade=[10,20,45,25,60]


function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(HSB);
  noStroke();
	
	for(i=0;i<5;i=i+1){
  fill(shade[i], 100, 100);
  rect(i*width/5, 0, width/5, height);
	}
}
