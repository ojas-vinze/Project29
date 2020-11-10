class Block  {
  constructor(x, y, width, height){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.x=x
    this.y=y
    this.width=width
    this.height=height
    World.add(this.body)
  }

  display(){
    var pos = this.body.position
    push()
    translate(pos.x,pos.y)
    fill("blue")
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
    pop()
  }

};
