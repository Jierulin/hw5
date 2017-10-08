var sizes = [40, 70, 90, 30, 60,10,10,10];

function setup() {
  createCanvas(600, 600);
	colorMode(HSB);
  noStroke();
    
  for (var i = 0; i < sizes.length; i += 1) {
    fill(15,100,100);
    ellipse(20+i*80, height/2, sizes[i], sizes[i]);
  }
}
