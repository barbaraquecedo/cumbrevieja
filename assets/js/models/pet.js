
class Pet {
    
    constructor(ctx, x, y){
        
        this.ctx = ctx;

        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 100;

        this.img = new Image();
        this.img.src = 'assets/img/street-dog.png';

    }

    draw(){
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}