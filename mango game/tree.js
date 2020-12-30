class tree extends BaseClass{
constructor(x,y){
super(x,y,100,50);
this.image = loadImage("images/tree.png");
}
display() {
   //this.body.position.x = mouseX;
   //this.body.position.y = mouseY;
   super.display();
 }
}
