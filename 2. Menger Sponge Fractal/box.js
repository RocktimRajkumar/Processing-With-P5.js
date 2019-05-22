class Box{
    constructor(x,y,z,r_){
        this.pos = createVector(x,y,z);
        this.r = r_;
    }


    generate(){
        var boxes = [];
        for(var x=-1; x<2; x++){
            for(var y=-1; y<2; y++){
                for(var z=-1; z<2; z++){
                    var sum = abs(x) + abs(y) + abs(z);
                    if(sum>1){
                    var size = this.r/3;
                    var b = new Box(this.pos.x+x*size,this.pos.y+y*size,this.pos.z+z*size,size);
                    boxes.push(b);
                    }
                }
            }
        }
        return boxes;
    }


    show(){
        push();
        translate(this.pos.x, this.pos.y, this.pos.z);
        noStroke();
        fill(255, 146, 12);
        box(this.r);
        pop();
    }
}