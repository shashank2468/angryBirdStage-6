class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");

  this.Visibility=255;

  }
  display(){
    if(this.body.speed<3){
      super.display();

    }
    else
    {
      this.Visibility=this.Visibility-20;
      push ();
      tint(255,this.Visibility)
      image(this.image,this.body.position.x,this.body.position.y,50,50)
       pop ();
      World.remove(world,this.body)
 
    }

  }
  count(){
  if(this.Visibility<0 && this.Visibility>-1000){
    score=score+1;
  }
  }
};
