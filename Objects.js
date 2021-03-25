class Objects{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.Visibility =  255;
        var op={
            restitution:0.8,
            friction:2,
            density:0.04
        }
        this.image = loadImage("enemy.png");
        this.body= Bodies.rectangle(x,y,width,height,op);
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed<6){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility-5;
            tint(255,this.Visibility);
            pop();
        }
    }
}