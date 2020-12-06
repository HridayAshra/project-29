class Ground{
    constructor(x,y,width,height){
        var optionB={
            isStatic:true
        }
        this.ground=Bodies.rectangle(x, y, width, height,optionB);
        
        this.width=width;
        this.height=height;
        
        World.add(world ,this.ground);
    };
    display(){
        push();
    rectMode(CENTER);
    fill("Brown");
    rect(this.ground.position.x, this.ground.position.y, this.width, this.height);
 pop();   
};
}