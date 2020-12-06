class SlingShot{
    constructor(bodyA, pointB){
        var optionConstraint = {
            bodyA:bodyA, 
            pointB:pointB,
            stiffness:0.05,
            length:30,
        } 
        
   //     this.sling1=loadImage("sprites/sling1.png");
   //     this.sling2=loadImage("sprites/sling2.png");
   //     this.sling3=loadImage("sprites/sling3.png");

        this.bodyA=bodyA;
        this.pointB=pointB;
       this.constraintV = Constraint.create(optionConstraint);
       World.add(world, this.constraintV);
    }
    fly(){
        this.constraintV.bodyA=null
    }
    display(){

//image(this.sling1, this.pointB.x-20, this.pointB.y-30);
//image(this.sling2, this.pointB.x-50, this.pointB.y-32);


if(this.constraintV.bodyA){

strokeWeight(4);
stroke(48,22,8);

    line(this.constraintV.bodyA.position.x-20, this.constraintV.bodyA.position.y-10, this.pointB.x, this.pointB.y);
 //   line(this.constraintV.bodyA.position.x-20, this.constraintV.bodyA.position.y-10, this.pointB.x-30, this.pointB.y-12);
 //   image(this.sling3, this.constraintV.bodyA.position.x-20, this.constraintV.bodyA.position.y-10);
};
    }

     


}