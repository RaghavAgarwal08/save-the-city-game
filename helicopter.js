class Helicopter{
    constructor(x,y){
        var helicopter_options ={
            isStatic:true

        }
        this.x = x
        this.y =y
        this.w =200
        this.h = 100
        this.helicopter_image = loadImage('helicopter.gif')
        

    }

    show(){
        if(keyIsDown(UP_ARROW)){
            this.y-=2;
        }
        if(keyIsDown(DOWN_ARROW)){
            this.y+=2;
        }
        if(keyIsDown(RIGHT_ARROW)){
            this.x+=2;
        }
        if(keyIsDown(LEFT_ARROW)){
            this.x-=2;
        }

        push()
        translate (this.x,this.y)
        imageMode(CENTER);
        image(this.helicopter_image, 0, 0, 200,100);
        
        pop();

    }
}