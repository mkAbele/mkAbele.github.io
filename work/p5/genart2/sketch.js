let grid = [];
let cols, rows;
let cellWidth, cellHeight;
let steps = 0;
let stepover = 100;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0); // Set background to white

    // Define the number of columns and rows
    cols = 10;
    rows = 10;

    // Calculate the width and height of each cell
    cellWidth = width / cols;
    cellHeight = height / rows;

    // Populate the grid array with boundary coordinates for each cell
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x1 = i * cellWidth;
            let y1 = j * cellHeight;
            let x2 = x1 + cellWidth;
            let y2 = y1 + cellHeight;
            let interval = floor(random(1, 4))
            grid.push({x1, y1, x2, y2, interval});
        }
    }

    // Draw the grid
    // drawGrid();

    console.log(grid)
}


function draw() {
    // You can add any dynamic drawing code here if needed
  for (let cell of grid){
    if( steps >= stepover){
        steps = 0;
        cell.interval += cell.interval;
    }

    x1 = random(cell.x1 + cell.interval, cell.x2+cell.interval)
    y1 = random(cell.y1+cell.interval, cell.y2+cell.interval)
    x2 = random(cell.x1+cell.interval, cell.x2+cell.interval)
    y2 = random(cell.y1+cell.interval, cell.y2+cell.interval)
    stroke(255,255,255,10);
    line(x1, y1 , x2, y2);
    // console.log(x1)
  }

  steps++;

  frameRate(90);
}

function drawGrid() {
    for (let cell of grid) {
        // Draw the cell boundaries
        stroke(255,255,255); // Set stroke color to black
        noFill();  // No fill for the rectangles
        rect(cell.x1, cell.y1, cellWidth, cellHeight);
    }
}