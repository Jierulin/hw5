var circle = {
  x: 100, 
  y: 400,
  vx: 0,
  vy: -4,
  r: 10
};

var circle2 = {
  x: 160, 
  y: 400,
  vx: 0,
  vy: -4,
  r: 10
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  paint(circle);
  paint(circle2);
  
  move(circle);
  move(circle2);
  
  reset(circle);
  reset(circle2);
}

function paint(circle) {
  ellipse(circle.x, circle.y, circle.r*2, circle.r*2);
}

function move(circle) {
  circle.x += circle.vx; // circle.x = circle.x + circle.vx
  circle.y += circle.vy;
}

function reset(circle) {
  if (circle.x > width || circle.x < 0) {
    circle.vx = - circle.vx;
	
		
  }
  if (circle.y <0 ) {
    
		circle.y=400;
  }
}
