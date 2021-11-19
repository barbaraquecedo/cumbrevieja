
class Banana {
    constructor(ctx,x,y) {
    
    this.ctx = ctx;

    this.x = x;
    this.y =  y;
    this.width = 50;
    this.height = 20;
    this.vx = -2;
    
    this.img = new Image();
    this.img.src = 'assets/img/platano.png';

    }

    draw(){

        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

        
    }

    move(){
        this.x += this.vx;
    }
}