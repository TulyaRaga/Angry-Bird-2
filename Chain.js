class Chain {
    constructor(bodyP,bodyQ){
        var options = {
            bodyA : bodyP,
            bodyB : bodyQ,
            stiffness: 0.4,
            length:10
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position
      
        strokeWeight(4);
stroke("brown");
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}