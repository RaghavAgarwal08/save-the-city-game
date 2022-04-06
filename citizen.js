class Citizen {
    constructor(x, y,width, height, citizenPos) {

     this.body = Bodies.rectangle(x, y, width, height);
     this.x = x
     this.y = y
     this.width = width;
     this.height = height;
  
      this.citizenPosition = citizenPos;
      this.citizen_img = loadImage('citizen.png');
  
      World.add(world, this.body);
    }

    show(){

      push ()
      translate(this.x, this.y);
      imageMode (CENTER);

      
       
      image (this.citizen_img,0,0,this.width,this.height);
      
    
      
      pop ()
        
    }

}