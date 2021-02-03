class Dustpin {
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.width = width
        this.height=height
        this.dustpin = Bodies.rectangle(x,y,width,height,option);
         World.add(world,this.dustpin);
        this.dustpinImage=loadImage("dustpin.png") 
          
     }
    display(){
     var pos =this.dustpin.position
     push();
     translate(pos.x,pos.y)
     imageMode (CENTER);
     //rect(0,0,this.width,this.height)
     image(this.dustpinImage,0,-100,this.width, this.height*9)
     pop ();
    } 
};