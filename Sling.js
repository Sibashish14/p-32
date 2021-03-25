class Sling{
    constructor(bodyA,pointB){
        this.pointB=pointB;
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.sling=Matter.Constraint.create(option);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        if(this.sling.bodyA){
        stroke("brown");
        strokeWeight(3);
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }
}