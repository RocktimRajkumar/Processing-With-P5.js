class Ship {
    constructor() {
        this.warShip = loadImage('./images/ship.png');
        this.shipLocation = createVector(width / 2, height - 30);
        this.dir = 0;
        this.shipSize = createVector(35, 35);
    }

    move() {
        this.shipLocation.x += this.dir * 4;
        this.shipLocation.x = constrain(this.shipLocation.x, 20, width - 20);
    }

    show() {
        imageMode(CENTER);
        image(this.warShip, this.shipLocation.x, this.shipLocation.y, this.shipSize.x, this.shipSize.y);
    }

    setDir(dir) {
        this.dir = dir;
    }
}