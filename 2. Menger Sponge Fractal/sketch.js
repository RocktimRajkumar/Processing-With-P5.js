var angl = 0;
var b;
var sponge = [];

function setup() {
    createCanvas(800, 700,WEBGL);
    b = new Box(0, 0, 0, 350);
    sponge.push(b);
}

function mousePressed() {
    var boxes = [];
    for (var i = 0; i < sponge.length; i++) {
        var _boxes = sponge[i].generate();
        boxes = boxes.concat(_boxes);
    }
    sponge = boxes;
}

function draw() {
    background(51);
    stroke(255);
    noFill();

    lights();
    rotateX(angl);
    rotateY(angl);

    for (var i = 0; i < sponge.length; i++) {
        sponge[i].show();
    }

    angl += 0.01;
}