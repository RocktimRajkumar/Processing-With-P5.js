class Star{
    constructor(){
        this.x = random(-width,width);
        this.y = random(-height,height);
        this.z = random(width);
        this.pz = this.z;
    }

    show(){
        fill(255);
        noStroke();

        var r = map(this.z, 0, width, 4, 0);
        this.sx = map(this.x/this.z, 0, 1, 0, width)
        this.sy = map(this.y/this.z, 0, 1, 0, height);

        ellipse(this.sx, this.sy, r, r)

        this.px = map(this.x/this.pz, 0, 1, 0, width);
        this.py = map(this.y/this.pz, 0, 1, 0, height);
        this.pz = this.z;
        
        stroke(255);
        line(this.px,this.py,this.sx,this.sy);
    }
    update(){
        this.z -= speed;
        if(this.z < 1){
            this.z = random(width);
            this.x = random(-width,width);
            this.y = random(-height,height);
            this.pz = this.z;
        }
    }
}