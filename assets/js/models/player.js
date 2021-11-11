
class Player {
    constructor(ctx, x, y){

        this.ctx = ctx;

        this.x = x;
        this.x0 = x;
        this.y = y;
        this.y0 = y;

        this.w = 100;
        this.h = 100;

        this.xv = 2;
        this.vy = 0;
        this.ay = 0.2;

        this.img = new Image();
        this.img.frames = 3;
        this.img.frameIndex = 0;
        this.img.src = 'assets/img/dodo.png';
        
    }

    draw() {
        this.ctx.drawImage(
            this.img, 
            (this.img.width * this.img.frameIndex)/ this.img.frames,
            0,
            this.img.width / this.img.frames,
            this.img.height,
            this.x, 
            this.y, 
            this.w, 
            this.h
            );
    }

    move() {
        this.x += this.xv;
        this.y += this.vy;
        this.vy += this.ay;


      
        }
    
}