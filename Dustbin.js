class Dustbin{

    constructor(x,y,width,height){

        var Options ={
            "density":1.2,
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,Options);
        this.width = width;
        this.height = height;
    World.add(world,this.body);    

    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
    }
}