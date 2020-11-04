class Box{

    constructor(x,y,width,height){
       var options={
           isStatic:true
       }
   
     this.box=Bodies.rectangle(x,y,width,height,options);
     this.width=width;
     this.height=height;
     World.add(world,this.box)
    
     this.dustbin=loadImage("dustbingreen.png")
     image(this.image, 100, 100,this.width, this.height);	
    }
    
    display(){
        rectMode(CENTER);
        fill("red")
        rect(this.box.position.x,this.box.position.y,this.width,this.height)
    }
}