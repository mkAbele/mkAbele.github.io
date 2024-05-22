let gridSize = 20;  // Size of the grid cells
let x, y;  // Current position
let diceRolls = [];
let steps = 255;  // Number of steps to simulate
let canvasSize = 400;
let previousEven = null;  // Track the previous dice roll to check if it was even
let movesCount = 0;  // Count of moves made
let intersections = [];  // Array to store intersection points

function setup() {
  createCanvas(canvasSize, canvasSize);
  background(255);
  x = 0;
  // y = height - gridSize;
  y = height;
  generateDiceRolls(steps);
  drawGrid();
  stroke(0);
  strokeWeight(1);
  noLoop();
}

function draw() {
  for (let i = 0; i < diceRolls.length; i++) {
    let currentRoll = diceRolls[i];
    let nextRoll = diceRolls[(i + 1) % diceRolls.length];
    drawLine(currentRoll, nextRoll);
    if (movesCount >= 3 && intersects(x, y)) {
      // If intersection detected after 3 moves, finish at intersection point
      x = intersections[0].x;
      y = intersections[0].y;
      movesCount = 0;
      intersections = [];
    }
  }
}

function generateDiceRolls(num) {
  for (let i = 0; i < num; i++) {
    diceRolls.push(floor(random(1, 7)));  // Simulate a dice roll (1 to 6)
  }
}

function drawGrid() {
  stroke(200);
  strokeWeight(1);
  for (let i = 0; i <= width; i += gridSize) {
    line(i, 0, i, height);
  }
  for (let j = 0; j <= height; j += gridSize) {
    line(0, j, width, j);
  }
}

function drawLine(currentRoll, nextRoll) {
  let newX = x;
  let newY = y;

  if (currentRoll % 2 === 0) {  // Even roll
    newX += gridSize;
    newY -= gridSize;
  } else {  // Odd roll
    newX += gridSize;
  }

  if (previousEven !== null && previousEven % 2 === 0 && nextRoll % 2 === 0) {
    newX -= gridSize;
    newY -= gridSize;
  } else if (previousEven !== null && previousEven % 2 === 0 && nextRoll % 2 !== 0) {
    newY -= gridSize;
  }

  // Boundary handling
  newX = (newX + width) % width;
  newY = (newY + height) % height;

  line(x, y, newX, newY);

  // Store intersection points
  if (movesCount > 0 && intersects(newX, newY)) {
    intersections.push({ x: newX, y: newY });
  }

  x = newX;
  y = newY;
  previousEven = currentRoll;
  movesCount++;
}

function intersects(newX, newY) {
  // Check if the current position intersects with any previous position
  for (let i = 0; i < intersections.length; i++) {
    let intersection = intersections[i];
    if (newX === intersection.x && newY === intersection.y) {
      return true;
    }
  }
  return false;
}
