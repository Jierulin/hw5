var agents = [];

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 30; i++) {
    agents.push({
      x: random(width),
      y: random(height),
      angle: random(TWO_PI),
      state: floor(random(3))
    });
  }
}

function draw() {
 	colorMode(HSB);
	rectMode(CENTER);
  background(220);
  agents.forEach(activateAgent);
  agents.forEach(drawAgent);
	
}

function drawAgent(agent) {
	push();
  translate(agent.x, agent.y);
  rotate(agent.angle);
    stroke(0);
	stroke(200,100,100);
  fill(200,100,100);
  rect(0, 0, 20, 10);
	stroke(200,100,50);
  fill(200,100,50);

  rect(0, 0, 2, 2);
  pop();
}

function onemore(agent) {
	push();
  translate(agent.x, agent.y);
  rotate(agent.angle);
    stroke(0);
	stroke(200,100,100);
  fill(200,100,100);
  rect(mouseX, mouseY, 20, 10);
	stroke(200,100,50);
  fill(200,100,50);

  rect(mouseX, mouseY, 2, 2);
  pop();
}


function activateAgent(agent) {
  if (random(100) < 1) {
    agent.state = floor(random(3));
  }

  if (agent.state == 1) {
    agent.angle += PI / 200;
  }

  if (agent.state == 2) {
    agent.x += cos(agent.angle) / 0.5;
    agent.y += sin(agent.angle) / 0.5;

    if (agent.x > width) {
      agent.x = 0;
    } else if (agent.x < 0) {
      agent.x = width;
    }

    if (agent.y > height) {
      agent.y = 0;
    } else if (agent.y < 0) {
      agent.y = height;
    }
  }
}

function isClickedOn(agents){
	if(dist(mouseX,mouseY,agents.x,agents.y)<10){
	agents.angle=0;
	}
}
	
function mousePressed(){
	append(agents,{
		x:mouseX,
		y:mouseY,
		angle:random(TWO_PI),
		state:floor(random(3)),
		h:random(0,360)
	});	
}
	
