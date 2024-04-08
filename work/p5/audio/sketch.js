
let mySound = [];
let userHasClicked = false;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound[0] = loadSound('assets/river.wav');
  mySound[1] = loadSound('assets/metal.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //mySound.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySound[0]);
  fft = new p5.FFT();
  fft.setInput(mySound[0]);

  textAlign(CENTER)
 
}

function draw() {
  if(userHasClicked == false){
    background('black');
    textSize(22);
    fill('white');
    text('Click to fing start', width/2, height/2);
    return
  }


  background('hotpink');
  circle(width/2,height/2,width/2)

  if(mySound[0].isPlaying() == false){
    mySound[0].play();
  }

  if(mySound[1].isPlaying() == false){
    mySound[1].play();
  }

  let targetValume = map(
    mouseX,
    0,
    width,
    0,
    1
  );
  mySound[0].setVolume(targetValume);
  let targetValume2= map(
    mouseX,
    0,
    width,
    1,
    0
  );
  mySound[1].setVolume(targetValume2);

  let rms = analyzer.getLevel();
  console.log(rms*10);
  
  circle(width/2,height/2,(width/2) * (rms*10))

  let spectrum = fft.analyze();
  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0));
  }
  endShape();
  

  

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(){
  userHasClicked = true;
}