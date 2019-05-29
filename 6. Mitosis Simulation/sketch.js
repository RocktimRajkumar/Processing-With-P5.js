var cells = [];
function setup() {
    createCanvas(600, 600);
    for (var i = 0; i < 4; i++) {
        cells.push(new Cell());
    }
}

function mousePressed() {
    for (var i = cells.length - 1; i >= 0; i--) {
        if (cells[i].clicked(mouseX, mouseY)) {
            cells.push(cells[i].mitosis());
            cells.push(cells[i].mitosis());
            cells.splice(i, 1);
        }
    }
}

function draw() {
    background(200);
    for (var i = 0; i < cells.length; i++) {
        cells[i].show();
        cells[i].move();
    }

    for (var i = cells.length-1; i >= 0; i--) {
        for (var j = 0; j < cells.length; j++) {
            if (cells[i].checkCombine(cells[j])) {
                cells.push(cells[i].combine(cells[j]));
                cells.splice(i, 1);
                cells.splice(j, 1);
                break;
            }
        }
    }
}