let grid = [];
let cols, rows;
cols = 16;
rows = 16;
let cellWidth, cellHeight;
let capture = false;
let grain;

bgColors = ['#000','#fff']
myColors = ['#F2C4DE', '#F2B3E8','#7988D9','#5576D9','#B6F2F2']

function setup() {
    createCanvas(800, 800);
    background(bgColors[1]); // Set background to white

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
            // let hash = floor(random(1,5))
            // art = createCanvasArt(hash, cellWidth, cellHeight);
            // image(art,x1,y1);
            // console.log(hash)
        }
    }

    createFilmGrain(0, 0, 800, 800, 100, 3, 0.1);
    

    // Draw the grid
    //drawGrid();

    // let art = createCanvasArt(1, 50, 50);
    // image(art,25,25);

    console.log(grid)
}


function draw() {
    background(bgColors[1]);
    for (let cell of grid){
        let art;
        let hash = floor(random(1,5))
        art = createCanvasArt(hash, cellWidth, cellHeight);
        image(art,cell.x1,cell.y1);
    }

    updateGrain();
    displayGrain();

    frameRate(15);
    //noLoop();
    if (capture == true){
        noLoop();
        saveCanvas('bauhaus', 'png');
    }

}

function randomColor(colors){
    randCol=random(colors.length);
    randCol=floor(randCol);
    return colors[randCol]
}

function createCanvasArt(hash, sizeX, sizeY){
    let canv = createGraphics(sizeX,sizeY);
    switch(hash) {
        
        case 1:
            canv.background(bgColors[0]);
            canv.strokeWeight(0);

            canv.fill(randomColor(myColors));
            canv.circle(0,sizeY,sizeX*2);

            break;

        case 2:
            canv.background(bgColors[0]);
            canv.strokeWeight(0);

            canv.fill(randomColor(myColors));
            canv.circle(sizeX,sizeY,sizeX*2);

            break;

        case 3:
            canv.background(bgColors[0]);
            canv.strokeWeight(0);

            canv.fill(randomColor(myColors));
            canv.circle(0,0,sizeX*2);

            break;

        case 4:
            canv.background(bgColors[0]);
            canv.strokeWeight(0);

            canv.fill(randomColor(myColors));
            canv.circle(sizeX,0,sizeX*2);

            break;
        
        // case 5:
        //     canv.background(colVanilla);
        //     canv.strokeWeight(0);

        //     canv.fill(colAuburn);
        //     canv.circle(sizeX/2,sizeY/2,sizeY);

            
        //     canv.push();
        //     canv.beginClip();
        //     canv.fill(colRichBlack);
        //     canv.circle(sizeX/2,sizeY/2,sizeY);
        //     canv.endClip();
        //     canv.fill(colGamboge);
        //     canv.rect(sizeX/2, 0, sizeX/2, sizeY/2)
        //     canv.pop();

        //     canv.push();
        //     canv.beginClip();
        //     canv.fill(colRichBlack);
        //     canv.circle(sizeX/2,sizeY/2,sizeY);
        //     canv.endClip();
        //     canv.fill(colAlloyOrange);
        //     canv.rect(sizeX/2, sizeY/2, sizeX/2, sizeY/2)
        //     canv.pop();

        //     break;
        
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

function updateGrain() {
    grain.update();
}
  
function displayGrain() {
    grain.display();
}

function createFilmGrain(x, y, w, h, patternSize, sampleSize, patternAlpha) {
    grain = new FilmGrainEffect(x, y, w, h, patternSize, sampleSize, patternAlpha);
}

class Effects {
    static counter = 0;
  }
  
  class FilmGrainEffect {
    static counter = 0;
    static index = 0;
  
    constructor(x, y, w, h, patternSize, sampleSize = 1, patternAlpha = 0.1) {
      this.id = "FilmGrain_" + Effects.counter++;
      this.reset(x, y, w, h, patternSize, sampleSize, patternAlpha);
    }
  
    reset(x, y, w, h, patternSize, sampleSize = 1, patternAlpha = 0.1) {
      this.samples = [];
      this.currentSampleSet = [];
      this.patternRefreshInterval = 4;
      FilmGrainEffect.counter = 0;
      FilmGrainEffect.index = 0;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.p = patternSize;
      this.s = sampleSize;
      this.a = map(patternAlpha, 0, 1, 0, 255);
      for (let i = 0; i < sampleSize; i++) {
        this.samples.push(
          this.pattern(this.x, this.y, this.w, this.h, this.p, this.a)
        );
      }
    }
  
    add(effect) {}
  
    pattern(x, y, w, h, patternSize, patternAlpha) {
      // luodaan uusi p5 canvas || create new p5 canvas
      let pg = createGraphics(patternSize, patternSize);
      pg.pixelDensity(1);
  
      // luodaan kohina | create noise
      pg.loadPixels();
      for (var _y = 0; _y < patternSize; _y += 1) {
        for (var _x = 0; _x < patternSize; _x += 1) {
          let i = (_x + _y * patternSize) * 4;
          let value = (Math.random() * 255) | 0;
          pg.pixels[i] = value;
          pg.pixels[i + 1] = value;
          pg.pixels[i + 2] = value;
          pg.pixels[i + 3] = patternAlpha;
        }
      }
      pg.updatePixels();
  
      // lasketaan kohinapalojen paikat ja tallennetaan ne | calculate position of noise pieces and save them
      let xlen = w / patternSize;
      let ylen = h / patternSize;
  
      let samples = [];
      for (let i = 0; i < ylen; i++) {
        for (let j = 0; j < xlen; j++) {
          let _x = x + patternSize * j;
          let _y = y + patternSize * i;
          samples.push({
            canvas: pg,
            x: _x,
            y: _y,
            w: patternSize,
            h: patternSize,
          });
        }
      }
      
      return samples;
    }
  
    update(data) {
      if (FilmGrainEffect.counter++ === this.patternRefreshInterval) {
        FilmGrainEffect.counter = 0;
        FilmGrainEffect.index++;
        if (!this.samples[FilmGrainEffect.index]) {
          FilmGrainEffect.index = 0;
        }
      }
      this.currentSampleSet = this.samples[FilmGrainEffect.index];
    }
  
    display() {
      for (let sample of this.currentSampleSet) {
        image(sample.canvas, sample.x, sample.y, sample.w, sample.h);
      }
    }
  
    [Symbol.iterator]() {
      return this.currentSampleSet;
    }
  }