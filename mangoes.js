class mango 
{
    constructor(x,y,r)
    {
        var options=
        {
            isStatic:true,
         restitution:0,
            friction:1
        }
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options)
        this.image=loadImage("mango.png")
        World.add(world,this.body)

      
        
    }

    display()
    {
        //var mangopos=this.body.position
        push();
        translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle)
        fill("yellow")
        imageMode(CENTER)
        ellipseMode(CENTER)
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }
}