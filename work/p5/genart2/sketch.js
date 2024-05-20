let grid = [];
let cols, rows;
let cellWidth, cellHeight;

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
            grid.push({x1, y1, x2, y2});
        }
    }

    // Draw the grid
    // drawGrid();

    console.log(grid)
}

function draw() {
    // You can add any dynamic drawing code here if needed
  for (let cell of grid){
    x1 = random(cell.x1, cell.x2)
    y1 = random(cell.y1, cell.y2)
    x2 = random(cell.x1, cell.x2)
    y2 = random(cell.y1, cell.y2)
    stroke(255,255,255,10);
    line(x1, y1 , x2, y2);
    console.log(x1)
  }

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