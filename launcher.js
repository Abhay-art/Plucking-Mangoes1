class constraint 
{
    constructor(bodyA,anchor)
    {

    var options=
    {
        bodyA:body,
        pointB:anchor,
        length:1,
        stiffness:0.004

    }
this.bodyA=body
this.pointB=anchor
    

    this.chain=Constraint.create(options);
    World.add(world,this.chain);
    }
   

    fly()
    {
        this.chain.bodyA=null;
    }

    attacher(bodyA)
    {
        this.chain.bodyA=body;
    }

    

    display()
    {
       

        if(this.chain.bodyA)
        {
            strokeWeight(1);
            line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }
}