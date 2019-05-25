var size = 15;
var snake;
var food;
var w;
var h;
var count = 4;
var score = 0;
var scoreBoard;
var restart = false;
var hh = 00;
var mm = 00;
var ss = 00;

var myTimer;

function startTimer(){
    myTimer = setInterval(function () {
        if (ss == 60) {
            ss = 0;
            mm++;
        }
        if (mm == 60) {
            hh++;
            mm = 0;
        }
        ss++;
        document.getElementById("time").innerText = hh+":"+mm+":"+ss;
    }, 1000);
}

function setup() {
    scoreBoard = document.getElementById("score");
    scoreBoard.innerText = "Score : " + score;
    createCanvas(600, 600);
    snake = new Snake();
    w = floor(width / size);
    h = floor(height / size);
    frameRate(8);
    getFoodLocation();
    startTimer();

}

function draw() {
    if (count >= 0) {
        noLoop();
        setTimeout(function () {
            background(155, 148, 181, 180);
            textSize(32);
            textAlign(CENTER, CENTER);
            fill(51);
            textStyle(BOLD);
            text('Game Starts in ' + count, 0, 0, width, height);
            loop();
        }, 1000);
    } else {
        background(110, 110, 110);
        if (snake.eat(food)) {
            score += 10;
            scoreBoard.innerText = "Score : " + score;
            getFoodLocation();
        }
        snake.update();
        snake.show();
        fill(255, 0, 100);
        rect(food.x, food.y, size, size);
        snake.endGame();
    }
    count--;
}

function getFoodLocation() {
    food = createVector(floor(random(w)), floor(random(h)));
    food.mult(size);
}

function keyPressed() {
    switch (keyCode) {
        case UP_ARROW: snake.direction(0, -1);
            break;
        case DOWN_ARROW: snake.direction(0, 1);
            break;
        case LEFT_ARROW: snake.direction(-1, 0);
            break;
        case RIGHT_ARROW: snake.direction(1, 0);
            break;
        case ENTER: snake.grow();
    }
}

function mousePressed() {
    if (restart) {
        snake = new Snake();
        count = 4;
        loop();
        ss=mm=hh=0;
        startTimer();
    }
}
