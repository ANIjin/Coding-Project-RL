class soccarBall {
    constructor(x, y) {
      var options = {
        isStatic: false
      };
      this.r = 30;
      
      this.body = Bodies.circle(x, y, this.r, options);
      this.image = loadImage("assets/ball.png");
      
      World.add(world, this.body);
    }
  
    
  
    
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      
     // push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r, this.r);
     // pop();
  
      
    }
  }
  