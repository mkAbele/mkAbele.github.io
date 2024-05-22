// Rule set:

// 1.If the number thrown with the dice is even, draw the line diagonally upwards to the right; 
// 'if the number is odd, draw it horizontally to the right.
// 2.If the previous number was even and the next one is also even, draw the line diagonally upwards and to the left; 
// if odd, draw it vertically upwards.

let capture = false;
let canvasSize = 800;
let gridSize = 40;

let startX = 0 + gridSize;
let startY = canvasSize - gridSize;
let endX = canvasSize - gridSize;
let endY = 0 + gridSize;

let lines = []
let sequence = 0;
let stopEvent = false;

let diceRoll = 0;
let diceRollHistory = [];

let x1, y1;

let stepCount = 0;
let maxSteps = 500;

function setup() {
  createCanvas(canvasSize, canvasSize);
  background(255);
  maxSteps = floor(random(100, 1000))
  //drawGrid();
}

function draw() {
  if (stepCount <= maxSteps){
    console.log("------------");
    stopEvent = false;
    
    //Set up
    if(sequence == 0){
      x1 = startX;
      y1 = startY;
    }

    diceRoll = floor(random(1, 7));
    console.log(diceRoll);

    //Logic

    let x2 = x1;
    let y2 = y1;

    for(let StepSize = 1; StepSize < diceRoll; StepSize++){

    

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

      // 4.If the line goes beyond the field, it starts from the opposite border.
      if(x2 > endX){
        console.log("Line reached maximum X");
        x1 = startX
        x2 = x1;
      }

      if(x2 < startX){
        console.log("Line reached minimum X");
        x1 = endX;
        x2 = x1;
      }

      if(y2 < endY){
        console.log("Line reached maximum Y");
        console.log(y1+"<"+endY);
        y1 = startY
        y2 = y1;
      }

      if(y2 > startY){
        console.log("Line reached minimum Y");
        y1 = endY;
        y2 = y1;
      }

      

      //Draw lines
      stroke(0, 0, 0, 255);
      strokeWeight(1);
      line(x1, y1, x2, y2);

      if(sequence >= 2){
        if(intersects(x2, y2)){
          stopEvent = true;
        }
      }

      lines.push({x1: x1, y1: y1, x2: x2, y2: y2});
      x1 = x2;
      y1 = y2;

      if(stopEvent == true){
        break;
      }

    }


    //Out
    sequence++;
    diceRollHistory.push(diceRoll);

    if(stopEvent == true){
      sequence = 0;
    }
    

    console.log("X1: "+x1+" X2:"+x2+" Y1:"+y1+" Y2:"+y2)
    console.log("Seq: "+sequence)
    console.log("Stop event: "+stopEvent)

    // if(x1 > width){
    //   sequence = 0;
    // }

    // if(x1 < 0){
    //   sequence = 0;
    // }

    // if(y1 > height){
    //   sequence = 0;
    // }

    // if(y1 < 0){
    //   sequence = 0;
    // }

    frameRate(30);

    
  }

  if (capture == true){
    noLoop();
    saveCanvas('canvas', 'png');
  }

  stepCount++;

}

// function intersects(x, y){
//   for (let i = 0; i < lines.length; i++) {
//     let intersection = lines[i];
//     if (x == intersection.x && y == intersection.y) {
//       console.log("Line was hit")
//       return true;
//     }
//   }
//   return false;
// }

function intersects(x2, y2){
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    // Check if the new line endpoint (x2, y2) matches any existing line endpoint
    if ((line.x1 === x2 && line.y1 === y2) || (line.x2 === x2 && line.y2 === y2)) {
      console.log("Line was hit");
      return true;
    }
  }
  return false;
}


function keyPressed() {
  if (key === ' ') {
      if(capture == false){
          //noLoop();
          capture = true;
      }else{
          capture = false;
          loop();
      }
  }
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