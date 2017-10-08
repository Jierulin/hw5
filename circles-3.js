var sizes = [10, 15, 15, 12, 70,60,40,40];

function setup() {
  createCanvas(600, 600);
	colorMode(HSB);
  noStroke();
    
  for (var i = 0; i < sizes.length; i += 1) {
    fill(15,100,100);
    ellipse(20+i*70, height/2, sizes[i], sizes[i]);
  }
}
