var stars = [];
var speed;
function setup(){
    createCanvas(windowWidth-25, windowHeight-25);
    for(let i = 0; i < 1200; i++){
        stars[i] = new Star();
    }

}

function draw(){
    speed = map(mouseX, 0, width, 0, 30);
    background(0);
    translate(width/2, height/2);
    for(let i = 0; i<stars.length; i++){
        stars[i].update();
        stars[i].show();
    }
}