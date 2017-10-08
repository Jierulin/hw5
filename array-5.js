//challenges!!
//Modify the code so that the shade of the last panel changes with the y coordinate of the mouse. (Note: you can access the last entry in an array using its length, as in shades[shades.length-1] = 300.)


var shade=[10,20,25,45,60,70,80,90,100]


function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(HSB);
  noStroke();
	
	for(i=0;i<shade.length-1;i=i+1){
  fill(shade[i], 100, 100);
  rect(i*width/shade.length, 0, width/shade.length, height);
	
	}
	shade[shade.length-1] = mouseY
	fill(mouseY,100,100);
	rect(i*width/shade.length, 0, width/shade.length, height);
}
