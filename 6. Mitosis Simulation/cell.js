function Cell(pos, radius, colour) {
    this.pos = pos || createVector(random(90, width - 90), random(90, height - 90));
    this.r = radius || random(10, 100);
    this.colour = colour || color(random(40, 225), random(0, 200), random(130, 235), 200);

    this.move = function () {
        var velocity = p5.Vector.random2D();
        this.pos.add(velocity);
    }

    this.show = function () {
        noStroke();
        fill(this.colour);
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
    }

    this.mitosis = function () {
        var cell = new Cell(this.pos.copy(), this.r, this.colour);
        return cell;
    }

    this.clicked = function (x, y) {
        var dis = dist(this.pos.x, this.pos.y, x, y);
        if (dis < this.r / 2) {
            return true;
        }
        else {
            return false;
        }
    }

    this.checkCombine = function (cell) {
        var dis = dist(this.pos.x, this.pos.y, cell.pos.x, cell.pos.y);
        if ((dis < ((this.r / 2) + (cell.r / 2)) / 2) && this.colour != cell.colour) {
            return true;
        }
        else {
            return false;
        }
    }

    this.combine = function (cell) {
        var cell = new Cell((this.pos.copy().add(cell.pos)).div(2, 2), this.r + cell.r/2);
        return cell;
    }
}