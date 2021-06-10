class PaperBall{
    constructor(x,y,r){
        
        var Options={

            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density :1.2

        }

        this.x = x;
        this.y =y;
        this.r = r;
        this.body =Bodies.circle(this.x,this.y,this.r,Options);
        World.add(world,this.body);
    }
    display(){
        var paperPos = this.body.position;

        push();
        translate(paperPos.x,paperPos.y);
        ellipseMode(CENTER);
        strokeWeight(3);
        fill(255,255,255);
        ellipse(this.x,this.y,this.r);
        pop();
    }

}