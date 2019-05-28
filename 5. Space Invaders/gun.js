class Gun {
    constructor(ship) {
        this.bullet = createVector(ship.x, ship.y - 30);
        this.bulletSize = createVector(4, 20);
    }

    fire() {
        fill(164, 55, 184);
        noStroke();
        rectMode(CENTER);
        rect(this.bullet.x, this.bullet.y, this.bulletSize.x, this.bulletSize.y);
        this.bullet.y -= 4;
    }

    hit(alien) {
        var dis = dist(alien.alienLocation.x, alien.alienLocation.y, this.bullet.x, this.bullet.y);
        if (dis < ((this.bulletSize.x / 2) + (alien.alienSize.x / 2))) {
            return true;
        }
        else {
            return false;
        }
    }
}