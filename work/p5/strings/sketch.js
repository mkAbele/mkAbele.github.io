margin = 0;
marginSet = 100;
canvasWidth = 3840;
canvasHeight = 2160;

maxSteps = 10000;
steps = 200;
i = 0;

drawLive = false;

let bg, c1, c2, c3;
defaultAlpha = 25;

let lines = [];
console.log(lines);

function generate(width, height, margin, insetStep, steps){
  let array = [];
  n = 0;
  a = 25;
  marginSet = 0;

  for (let i = 0; i < steps; i++, n++) {

    if (n >= insetStep){
      marginSet += margin
      n = 0;
    }

    a = floor(random(a, 255 - a*3))

    array.push([
      floor(random(0 + marginSet, width - marginSet)), // x1
      floor(random(0 + marginSet, height- marginSet)), // y1
      floor(random(0 + marginSet, width - marginSet)), // x2
      floor(random(0 + marginSet, height - marginSet)), // y2
      floor(random(1, 4)), // Krāsu komplektācija
      a // Alfas kanāls
    ]);

  }

  return array;
}

function quickDraw(lines){
  for (let i = 0; i < lines.length; i++) {
    strokeWeight(0.5);

    r = 0;
    g = 0;
    b = 0;
    alpha = lines[i][5];

    // stroke(255, 255, 255, 100);

    if(lines[i][4] == 1){
      r = 215;
      g = 25;
      b = 32;
    }

    if(lines[i][4] == 2){
      r = 255;
      g = 229;
      b = 0;
    }

    if(lines[i][4] == 3){
      r = 35;
      g = 31;
      b = 32;
    }

    r = 255;
    g = 255;
    b = 255;

    stroke(r, g, b, alpha);
    line(lines[i][0], lines[i][1], lines[i][2], lines[i][3])
  }
}
actionSpacebar = false;

function setup() {
  bg = color(35, 31, 32);
  c1 = color(215, 25, 32);
  c2 = color(255, 229, 0);
  c3 = color(35, 31, 32);


  canvasWidth;// = windowWidth;
  canvasHeight;// = windowHeight;
  createCanvas(canvasWidth, canvasHeight);
  background(bg);

  lines = generate(canvasWidth, canvasHeight, marginSet, steps, maxSteps);

  if(drawLive == false){
    for (let i = 0; i < lines.length; i++){
      stroke(255,255,255,15);
      line(lines[i][0], lines[i][1], lines[i][2], lines[i][3]);
    }
  }

  frameRate(30); 
  actionSpacebar = false;
}

function draw() {
  if(actionSpacebar == true){
    saveCanvas('myCanvas', 'jpg');
  }

  actionSpacebar == false;

  if(drawLive == false){
    
    background(bgColor);
    fill(255,255,255)
    

    for (let i = 0; i < frameCount ; i++) {
      stroke(255,255,255,10);
      line(lines[i][0], lines[i][1], lines[i][2], lines[i][3]);
    }

    if (frameCount >= lines.length){
      noLoop();
    }
  }

  

  // text("Frame Count: " + frameCount, 25, 25);

}

function keyPressed(){
  if (key == ' '){
    actionSpacebar = true;
    saveCanvas('myCanvas', 'jpg');
  }
}

