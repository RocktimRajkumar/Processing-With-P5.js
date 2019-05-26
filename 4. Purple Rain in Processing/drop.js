class Drop {
    constructor() {
        this.rain = createVector(random(width), random(-700, -50), random(0, 20));
        this.len = map(this.rain.z, 0, 20, 10, 20);
        this.yspeed = map(this.rain.z, 0, 20, 1, 3);
    }

    fall() {
        this.rain.y += this.yspeed;
        var gravity = map(this.rain.z, 0, 20, 0, 0.2);
        this.yspeed += gravity;
        if (this.rain.y > height) {
            this.rain = createVector(random(width), random(-700, -50), random(0, 20));
            this.len = map(this.rain.z, 0, 20, 10, 20);
            this.yspeed = map(this.rain.z, 0, 20, 1, 2);
        }
    }

    show() {
        var thick = map(this.rain.z, 0, 20, 1, 3);
        strokeWeight(thick);
        stroke(138, 43, 226);
        line(this.rain.x, this.rain.y, this.rain.x, this.rain.y + this.len);
    }
}