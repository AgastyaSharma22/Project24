class Bin{
    constructor(x,y){
     this.x=x;
     this.y=y;
     this.BinWidth=200;
     this.BinHeight=100;
     this.wallThickness=20;
     this.angle=0;
     this.bottomBody=Bodies.rectangle(this.x,this.y,this.BinWidth,this.wallThickness,{isStatic:true});
     this.leftWallBody=Bodies.rectangle(this.x-this.BinWidth/2,this.y-this.BinHeight/2,this.wallThickness,this.BinHeight,{isStatic:true});
     Matter.Body.setAngle(this.leftWallBody,this.angle);
     this.rightWallBody=Bodies.rectangle(this.x+this.BinWidth/2,this.y-this.BinHeight/2,this.wallThickness,this.BinHeight,{isStatic:true});
     Matter.Body.setAngle(this.rightWallBody,this.angle);
     World.add(world,this.bottomBody);
     World.add(world,this.leftWallBody);
     World.add(world,this.rightWallBody);
    }
    display(){
        var bottomPos=this.bottomBody.position;
        var leftPos=this.leftWallBody.position;
        var rightPos=this.rightWallBody.position;
        push();
        translate(leftPos.x,leftPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(this.angle);
        rect(0,0,this.wallThickness,this.BinHeight);
        pop();

        push();
        translate(rightPos.x,rightPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(-1*this.angle);
        rect(0,0,this.wallThickness,this.BinHeight);
        pop();

        push();
        translate(bottomPos.x,bottomPos.y);
        rectMode(CENTER);
        fill(255);
        stroke(255);
        rect(0,0,this.BinWidth,this.wallThickness);
        pop();
     }
}