
class Banana {
    constructor(ctx,x, y){
    
    this.ctx = ctx;

    this.x = x;
    this.y =  y;
    this.width = 100;
    this.height = 50;
    
    this.img = new Image();
    this.img.src = 'assets/img/platano.png';

    }

    draw(){

        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}