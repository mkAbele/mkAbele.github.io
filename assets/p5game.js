import p5 from "p5";

document.addEventListener("DOMContentLoaded", function(event){
    window.addEventListener("load", function(e){
        locoscroll.destroy();
    });
});

let sprite_1;
let sprite_2;

let s = (sk) => {    
    sk.setup = () => {
        sk.createCanvas(window.innerWidth,window.innerHeight);
        sprite_1 = sk.createSprite(4, 100, 4, 100);
        sprite_1.shapeColor = sk.color(255, 255, 255);
    }

    sk.draw = () => {
        sk.background(50);
    }
}

const P5 = new p5(s);

// let spr;
// function setup() {
//   createCanvas(400, 400);
//   spr = createSprite(
//     width/2, height/3, 40, 40);
//   spr.shapeColor = color(255);
// }
// function draw() {
//   background(50);
//   fill(255);
//   noStroke();
//   textAlign(CENTER, CENTER);
//   text("use arrow keys, or SPACE to stop",
//     width/2, height*0.67);
//   drawSprites();
// }
// function keyPressed() {
//   if (keyCode == RIGHT_ARROW) {
//     spr.setSpeed(1.5, 0);
//   }
//   else if (keyCode == DOWN_ARROW) {
//     spr.setSpeed(1.5, 90);
//   }
//   else if (keyCode == LEFT_ARROW) {
//     spr.setSpeed(1.5, 180);
//   }
//   else if (keyCode == UP_ARROW) {
//     spr.setSpeed(1.5, 270);
//   }
//   else if (key == ' ') {
//     spr.setSpeed(0, 0);
//   }
//   return false;
// }