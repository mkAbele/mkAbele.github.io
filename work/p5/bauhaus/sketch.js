let grid = [];
let cols, rows;
cols = 4;
rows = 4;
let cellWidth, cellHeight;
let capture = false;

// Colors
let colRichBlack = "#001219ff";
let colMidnightGreen = "#005f73ff";
let colDarkCyan = "#0a9396ff";
let colTiffanyBlue = "#94d2bdff";
let colVanilla = "#e9d8a6ff";
let colGamboge = "#ee9b00ff";
let colAlloyOrange = "#ca6702ff";
let colRust = "#bb3e03ff";
let colRufous = "#ae2012ff";
let colAuburn = "#9b2226ff";



function setup() {
    createCanvas(800, 800);
    background(0); // Set background to white

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
            
            // let art;
            // let hash = floor(random(1,6))
            // art = createCanvasArt(hash, cellWidth, cellHeight);
            // image(art,x1,y1);
            // console.log(hash)
        }
    }

    // Draw the grid
    //drawGrid();

    // let art = createCanvasArt(1, 50, 50);
    // image(art,25,25);

    console.log(grid)
}


function draw() {
    background(0);
    for (let cell of grid){
        let art;
        let hash = floor(random(1,6))
        art = createCanvasArt(hash, cellWidth, cellHeight);
        image(art,cell.x1,cell.y1);
    }



    frameRate(5);
    //noLoop();
    if (capture == true){
        noLoop();
        saveCanvas('bauhaus', 'png');
    }

}

function createCanvasArt(hash, sizeX, sizeY){
    let canv = createGraphics(sizeX,sizeY);
    switch(hash) {
        case 1:
            canv.background(colVanilla);
            canv.strokeWeight(0);

            canv.fill(colAlloyOrange);
            canv.circle(0,sizeY,sizeX*2);

            canv.fill(colRichBlack);
            canv.circle(0,sizeY,sizeX);
            break;

        case 2:
            canv.background(colVanilla);
            canv.strokeWeight(0);

            canv.fill(colAlloyOrange);
            canv.circle(0,0,sizeX*2);

            canv.fill(colRichBlack);
            canv.circle(0,0,sizeX);
            break;

        case 3:
            canv.background(colVanilla);
            canv.strokeWeight(0);

            //Lielais aplis
            canv.push();
            canv.beginClip();
            canv.fill(colRichBlack);
            canv.circle(sizeX/2,sizeY/2,sizeY);
            canv.endClip();
            canv.fill(colDarkCyan);
            canv.rect(0, 0, sizeX/2, sizeY)
            canv.pop();

            canv.push();
            canv.beginClip();
            canv.fill(colRichBlack);
            canv.circle(sizeX/2,sizeY/2,sizeY);
            canv.endClip();
            canv.fill(colRichBlack);
            canv.rect(sizeX/2, 0, sizeX/2, sizeY)
            canv.pop();

            //Mazais aplis
            canv.push();
            canv.beginClip();
            canv.fill(colRichBlack);
            canv.circle(sizeX/2,sizeY/2,sizeY/2);
            canv.endClip();
            canv.fill(colRufous);
            canv.rect(0, 0, sizeX/2, sizeY)
            canv.pop();

            canv.push();
            canv.beginClip();
            canv.fill(colRichBlack);
            canv.circle(sizeX/2,sizeY/2,sizeY/2);
            canv.endClip();
            canv.fill(colAlloyOrange);
            canv.rect(sizeX/2, 0, sizeX/2, sizeY)
            canv.pop();

            //canv.fill(colAlloyOrange);
            //canv.circle(sizeX/2,sizeY/2,sizeY/2);
            break;

        case 4: 
            canv.background(colRichBlack);
            canv.strokeWeight(0);

            //Kreisais aplis
            canv.push();
            canv.beginClip();
            canv.fill(colRichBlack);
            canv.circle(0,sizeY/2,sizeY);
            canv.endClip();
            canv.fill(colDarkCyan);
            canv.rect(0, 0, sizeX, sizeY/2)
            canv.pop();

            canv.push();
            canv.beginClip();
            canv.fill(colRichBlack);
            canv.circle(0,sizeY/2,sizeY);
            canv.endClip();
            canv.fill(colRufous);
            canv.rect(0, sizeY/2, sizeX, sizeY/2)
            canv.pop();

            //Labais aplis
            canv.push();
            canv.beginClip();
            canv.fill(colRichBlack);
            canv.circle(sizeX,sizeY/2,sizeY);
            canv.endClip();
            canv.fill(colVanilla);
            canv.rect(0, 0, sizeX, sizeY/2)
            canv.pop();

            canv.push();
            canv.beginClip();
            canv.fill(colRichBlack);
            canv.circle(sizeX,sizeY/2,sizeY);
            canv.endClip();
            canv.fill(colTiffanyBlue);
            canv.rect(0, sizeY/2, sizeX, sizeY/2)
            canv.pop();
            
            break;
        
        case 5:
            canv.background(colVanilla);
            canv.strokeWeight(0);

            canv.fill(colAuburn);
            canv.circle(sizeX/2,sizeY/2,sizeY);

            
            canv.push();
            canv.beginClip();
            canv.fill(colRichBlack);
            canv.circle(sizeX/2,sizeY/2,sizeY);
            canv.endClip();
            canv.fill(colGamboge);
            canv.rect(sizeX/2, 0, sizeX/2, sizeY/2)
            canv.pop();

            canv.push();
            canv.beginClip();
            canv.fill(colRichBlack);
            canv.circle(sizeX/2,sizeY/2,sizeY);
            canv.endClip();
            canv.fill(colAlloyOrange);
            canv.rect(sizeX/2, sizeY/2, sizeX/2, sizeY/2)
            canv.pop();

            break;
        
        default:
            canv.background(random(0,255));
    }


    return canv;
}

function drawGrid() {
    for (let cell of grid) {
        // Draw the cell boundaries
        stroke(255,255,255); // Set stroke color to black
        noFill();  // No fill for the rectangles
        rect(cell.x1, cell.y1, cellWidth, cellHeight);
    }
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