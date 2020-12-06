class Box{
    constructor(x,y){

      var optionZ = {
        restitution:0.5,
        };

        this.box=Bodies.rectangle(x,y,15,15, optionZ);
        
        World.add(world, this.box);
}
display(){
  push();
  translate(this.box.position.x, this.box.position.y);
   rotate(this.box.angle);
    rectMode(CENTER);
    fill("Brown");
    rect(0,0, 15, 15);
pop();
};
}