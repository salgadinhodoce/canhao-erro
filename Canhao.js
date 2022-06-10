class canhao{

constructor(x,y,w,h,angle){

this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.angle=angle;   
this.canhaobase=loadImage("./assets/cannonBase.png");
this.canhaotubo=loadImage("./assets/canon.png");

} 

show(){


push();
imageMode(CENTER);
translate(this.x,this.y);
rotate(this.angle);
image(this.canhaotubo,0,0,this.w,this.h);
pop();
image(this.canhaobase,70,20,200,200);



}
    
}