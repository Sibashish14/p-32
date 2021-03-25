class Polygon{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        var op={
            restitution:0.8,
            friction:1,
            density:0.8
        }
        this.bodyImg=loadImage("bird.png");
        this.body= Bodies.rectangle(x,y,width,height,op);
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.bodyImg,0,0,this.width,this.height);
        pop();
    }
}