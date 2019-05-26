
var rain = [];

function setup() {
    createCanvas(900, 600);
    for (var i = 0; i < 1000; i++)
        rain.push(new Drop());
}

function draw() {
    background(230, 230, 250);
    for (var i = 0; i < rain.length; i++) {
        rain[i].fall();
        rain[i].show();
    }
}