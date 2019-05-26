class Snake {
    constructor() {
        this.tails = [];
        this.tails.push(createVector(0,0));
        this.snakeDirection = createVector(1, 0);
        this.snakePosition = createVector(0,0);
    }

    update() {
        this.snakePosition = this.tails.slice(-1)[0].copy();;
        this.snakePosition.x = this.snakePosition.x + this.snakeDirection.x * size;
        this.snakePosition.y = this.snakePosition.y + this.snakeDirection.y * size;
        this.tails.push(this.snakePosition);
        this.tails.shift();   
    }

    show() {
        var flag = false;
        for(var i = 0; i<this.tails.length; i++){
            fill(55, 108, 42);
            rect(this.tails[i].x, this.tails[i].y, size, size);
            if(this.tails[i].equals(this.tails.slice(-1)[0]) && i!=this.tails.length-1){
                flag = true;
            }
        }
        if(flag)
            this.message();
    }

    direction(x, y) {
        this.snakeDirection.x = x;
        this.snakeDirection.y = y;
    }

    eat(food) {
        if (this.snakePosition.x == food.x && this.snakePosition.y == food.y) {
            this.tails.push(this.snakePosition);
            return true;
        }
        else {
            return false;
        }
    }

    message(){
        noLoop();
        background(155, 148, 181,180);
        textSize(32);
        textAlign(CENTER, CENTER);
        fill(51);
        textStyle(BOLD);
        text('Game End', 0,-20,width,height);
        text('Click to Restart',0,20,width,height);
        restart = true;
        clearInterval(myTimer);
    }

    endGame(){
        if(this.snakePosition.x > w*size-1 || this.snakePosition.x < 0 || this.snakePosition.y > h*size-1 || this.snakePosition.y < 0){
            this.message();
        }
    }
}