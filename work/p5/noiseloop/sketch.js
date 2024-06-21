let numFrames = 100;
let noise;

function setup() {
  createCanvas(500, 500);
  background(0);
  noise = openSimplexNoise(Date.now()); // Initialize noise with a seed based on the current time
}

function draw() {
  background(0);
  for (let i = 150; i <= width - 150; i += 5) {
    for (let j = 150; j <= height - 150; j += 5) {
      stroke(255, 25);
      noFill();

      let x = i;
      let y = j;

      point(x, y);
      for (let k = 0; k < 200; k++) {
        let res = field(x, y);
        res.mult(0.15);
        x += res.x;
        y += res.y;
        point(x, y);
      }

      point(x, y);
    }
  }

  console.log(frameCount);

  saveCanvas(`fr${nf(frameCount, 3)}.png`);

  if (frameCount === numFrames) {
    noLoop();
    console.log("finished");
  }
}

function field(x, y) {
  let amount = 2.5;
  let scale = 0.03;
  let radius = 0.45;
  let angle = TWO_PI * 1.0 * (frameCount - 1) / numFrames;
  let value1 = 400.0 * noise.noise3D(scale * x, scale * y, radius * cos(angle), radius * sin(angle));
  let value2 = 400.0 * noise.noise3D(1000 + scale * x, scale * y, radius * cos(angle), radius * sin(angle));
  let parameter1 = Math.round(value1) / 100.0;
  let parameter2 = Math.round(value2) / 100.0;
  return createVector(amount * parameter1, amount * parameter2);
}