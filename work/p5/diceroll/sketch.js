// Rule set:

// 1.If the number thrown with the dice is even, draw the line diagonally upwards to the right; 
// 'if the number is odd, draw it horizontally to the right.
// 2.If the previous number was even and the next one is also even, draw the line diagonally upwards and to the left; 
// if odd, draw it vertically upwards.


let canvasSize = 800;
let gridSize = 40;

let startX = 0;
let startY = canvasSize;

let lines = []
let sequence = 0;

let diceRoll = 0;
let diceRollHistory = [];

let x1, y1;

function setup() {
  createCanvas(canvasSize, canvasSize);
  background(255);
  //drawGrid();
}

function draw() {
  console.log("------------");
  
  //Set up
  if(sequence == 0){
    x1 = startX;
    y1 = startY;
  }

  let x2 = x1;
  let y2 = y1;

  diceRoll = floor(random(1, 7));
  console.log(diceRoll);

  //Logic

  if(isOdd(diceRoll)){
    if(isOdd(diceRollHistory[diceRollHistory.length-1])){
      console.log("Dice rolled odd again");
      y2 -= gridSize;
    }else{
      console.log("Dice rolled odd");
      x2 += gridSize;
    }
  }

  if(isEven(diceRoll)){
    if(isEven(diceRollHistory[diceRollHistory.length-1])){
      console.log("Dice rolled even again");
      x2 -= gridSize;
      y2 -= gridSize;

    }else{
      console.log("Dice rolled even");
      x2 += gridSize;
      y2 -= gridSize;
    }
  }

  

  //Draw lines
  stroke(0, 0, 0, 255);
  strokeWeight(1);
  line(x1, y1, x2, y2);


  //Out
  sequence++;
  diceRollHistory.push(diceRoll);
  x1 = x2;
  y1 = y2;

  if(x1 > width){
    sequence = 0;
  }

  if(x1 < 0){
    sequence = 0;
  }

  if(y1 > height){
    sequence = 0;
  }

  if(y1 < 0){
    sequence = 0;
  }

  frameRate(30);
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

function isOdd(number) {
  return number % 2 !== 0;
}

function isEven(number) {
  return number % 2 === 0;
}