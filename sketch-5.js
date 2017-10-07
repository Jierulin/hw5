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
	
	keyPressed(circle);
  keyPressed(circle2);
}

function paint(circle) {
  ellipse(circle.x, circle.y, circle.r*2, circle.r*2);
}

function move(circle) {
	circle.x += random(-10,10);
  circle.y += circle.vy;
}

function reset(circle) {
  if (circle.x > width || circle.x < 0) {
    circle.x = 100;
	}
  if (circle.y <0 ) {
    
		circle.y=400;
  }

}

function keyPressed(circle) {
  if (keyCode === UP_ARROW) {
    circle.vy=circle.vy+1000;
  } else if (keyCode === DOWN_ARROW) {
   circle.vy=circle.vy-1000;
  }
}
