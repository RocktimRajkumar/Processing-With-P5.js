var ship;
var alien = [];
var gun = [];

function setup() {
    createCanvas(1000, 700);
    ship = new Ship();
    createAlien();
}

function createAlien() {
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 15; j++) {
            alien.push(new Alien((60 + 60 * i), -550 + 40 * j));
        }
    }
}

function keyReleased() {
    if (keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW) {
        ship.setDir(0);
    }
}

function keyPressed() {

    if (key == ' ') {
        gun.push(new Gun(ship.shipLocation));
    }
    else if (keyCode == LEFT_ARROW) {
        ship.setDir(-1);
    }
    else if (keyCode == RIGHT_ARROW) {
        ship.setDir(1);
    }
}

function mousePressed() {
    loop();
    alien = [];
    gun = [];
    createAlien();
    ship = new Ship();
}

function draw() {
    background(52);
    ship.show();
    ship.move();

    var shiftDown = false;

    if (alien.length == 0) {
        noLoop();
        background(155, 148, 181, 180);
        rectMode(CORNER);
        textSize(32);
        textAlign(CENTER, CENTER);
        fill(204, 0, 0);
        textStyle(BOLD);
        text('You Won !', 0, -20, 1000, 700);
        textSize(20);
        text('Click to play again', 0, 20, 1000, 700);
    }

    for (var i = 0; i < alien.length; i++) {
        alien[i].show();
        alien[i].move();
        if (alien[i].alienLocation.x > width - 25 || alien[i].alienLocation.x < 25)
            shiftDown = true;
        if (alien[i].alienLocation.y > ship.shipLocation.y - ship.shipSize.y) {
            noLoop();
            background(155, 148, 181, 180);
            rectMode(CORNER);
            textSize(32);
            textAlign(CENTER, CENTER);
            fill(204, 0, 0);
            textStyle(BOLD);
            text('Game Over', 0, -20, 1000, 700);
            text('Alien Invaded your Ship', 0, 20, 1000, 700);
            textSize(20);
            text('Click to play again', 0, 60, 1000, 700);
        }
    }

    if (shiftDown) {
        for (var i = 0; i < alien.length; i++) {
            alien[i].shiftDown();
        }
    }

    for (var i = 0; i < gun.length; i++) {
        gun[i].fire();
        if (gun[i].bullet.y < 0) {
            gun.splice(i, 1);
            continue;
        }
        for (var j = 0; j < alien.length; j++) {
            if (gun[i].hit(alien[j])) {
                alien.splice(j, 1);
                j--;
                gun.splice(i, 1);
                i--;
                break;
            }
        }
    }

}