
let canvasSize = 800;
let pA = [];
let pB = [];
let pC = [];

let diceRoll;
let x1, x2, y1, y2;
let midPoint;

gridSize = 40;


function setup() {
  createCanvas(canvasSize, canvasSize);
  background(255);
  //drawGrid();
  maxSteps = floor(random(100, 1000))

  pA = {x: width/2, y: gridSize}
  pB = {x: gridSize, y: height - gridSize}
  pC = {x: width - gridSize, y: height - gridSize}


  
  stroke("#000");
  strokeWeight(1);

  // Bottom-right.
  point(pA.x, pA.y);
  point(pB.x, pB.y);
  point(pC.x, pC.y);

  let startP = randomTriPoint(pA, pB, pC)
  x1 = startP.x;
  y1 = startP.y;

}


function draw() {
  diceRoll = floor(random(1, 7));
  stroke(random(100, 250), random(100, 250), random(100, 250));

  if (diceRoll === 1 || diceRoll === 6) {
    midPoint = getMidpoint(pA.x, pA.y, x1, y1);
    x2 = midPoint.x;
    y2 = midPoint.y;
  }

  if (diceRoll === 2 || diceRoll === 3) {
    midPoint = getMidpoint(pB.x, pB.y, x1, y1);
    x2 = midPoint.x;
    y2 = midPoint.y;
  }

  if (diceRoll === 4 || diceRoll === 5) {
    midPoint = getMidpoint(pC.x, pC.y, x1, y1);
    x2 = midPoint.x;
    y2 = midPoint.y;
  }

  point(x2, y2)

  x1 = x2;
  y1 = y2;

}

function randomTriPoint(p1, p2, p3){
  let u = random();
  let v = random();
  
  if (u + v > 1) {
    u = 1 - u;
    v = 1 - v;
  }

  let w = 1 - u - v;

  let x = u * p1.x + v * p2.x + w * p3.x;
  let y = u * p1.y + v * p2.y + w * p3.y;

  return {x: x, y: y}
}

function getMidpoint(x1, y1, x2, y2) {
  let midX = (x1 + x2) / 2;
  let midY = (y1 + y2) / 2;
  return { x: midX, y: midY };
}

function drawGrid() {
  stroke(0, 0, 0, 100);
  strokeWeight(1);
  for (let i = 0; i <= width; i += gridSize) {
    line(i, 0, i, height);
  }
  for (let j = 0; j <= height; j += gridSize) {
    line(0, j, width, j);
  }
}

// Function to get a random point within the pentagon
function getRandomPointInPentagon() {
  let found = false;
  let randomPoint;
  
  while (!found) {
    // Generate a random point within the bounding box of the pentagon
    randomPoint = { x: random(100, 400), y: random(100, 300) };
    
    // Check if the random point is inside the pentagon using a point-in-polygon algorithm
    if (isPointInsidePolygon(randomPoint, vertices)) {
      found = true;
    }
  }
  
  return randomPoint;
}

// Function to check if a point is inside a polygon using the ray casting algorithm
function isPointInsidePolygon(point, polygon) {
  let oddNodes = false;
  let j = polygon.length - 1;
  let x = point.x;
  let y = point.y;

  for (let i = 0; i < polygon.length; i++) {
    let xi = polygon[i].x;
    let yi = polygon[i].y;
    let xj = polygon[j].x;
    let yj = polygon[j].y;

    if ((yi < y && yj >= y || yj < y && yi >= y) && (xi <= x || xj <= x)) {
      if (xi + (y - yi) / (yj - yi) * (xj - xi) < x) {
        oddNodes = !oddNodes;
      }
    }
    j = i;
  }

  return oddNodes;
}