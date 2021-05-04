class Paper{
    constructor(x,y,radius){
        var options={
            restitution:0.8,
            friction:0.3, 
            density: 4
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position
        ellipseMode(RADIUS);
        push();
        translate(pos.x,pos.y);
        fill("yellow");
        noStroke();
        ellipse(0,0,this.radius,this.radius);
        pop();
       
    }

}