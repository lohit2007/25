class DustBin{
    constructor(x,y,width,height){
        var options={
           isStatic:true 
        }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.image = loadImage("dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
        //rect(this.x, this.y, this.width, this.height)s
        var binpos= this.body.position;		
		push()
		translate(binpos.x, binpos.y);
		imageMode(CENTER)
		//strokeWeight(3);
		fill(255,0,255)
		//ellipse(0,0,this.r, this.r);
		image(this.image, 0,0,this.width,this.height);
		pop()
    }
}