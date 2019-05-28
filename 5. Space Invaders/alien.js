class Alien {
    constructor(x, y) {
        this.alien = loadImage('./images/alien.png');
        this.alienLocation = createVector(x, y);
        this.xdir = 1;
        this.alienSize = createVector(55, 40);
    }

    show() {
        imageMode(CENTER);
        image(this.alien, this.alienLocation.x, this.alienLocation.y, this.alienSize.x, this.alienSize.y);
    }

    move() {
        this.alienLocation.x += this.xdir;
    }

    shiftDown() {
        this.xdir *= -1;
        this.alienLocation.y += 20;
    }
}