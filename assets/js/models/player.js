
class Player {
    constructor(ctx, x, y){

        this.ctx = ctx;

        this.x = x;
        this.x0 = x;
        this.y = y;
        this.y0 = y;

        this.w = 100;
        this.h = 100;

        this.vx = 0;
        this.vy = 0;
        this.ay = 0.2;

        this.img = new Image();
        this.img.frames = 3;
        this.img.frameIndex = 0;
        this.img.src = 'assets/img/dodo.png';

        this.isMovingToRight = false;

        
        
        this.drawCount = 0;
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

            this.drawCount++;

            if (this.drawCount % 15 === 0){

                if (this.y < this.y0) {
                    this.img.frameIndex = 2;
                } else {
                    this.img.frameIndex += 1;
                    if (this.img.frameIndex > 1){
                        this.img.frameIndex = 0;
                    }
                }
            }
            

            // si drawCount es multiplo de 10, sumo 1 a frameIndex.
            // si frameIndex se hace mayor que 2, lo reseteo a 0 para que sea 0, 1, 2, 0, 1, 2...

            
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.ay;

        if(this.x + this.w >= this.ctx.canvas.width) {
            this.vx =- this.vx;
        }

        if(this.x <= 0) {
            this.vx =- this.vx;
        }

        if(this.y >= this.y0) {
            this.y = this.y0;
            this.vy = 0;
        }
        
        if(this.y <= 0) {
            this.y = 0;
            this.vy = - this.vy;
        }
    }

    onKeyDown(code){
        if(code === KEY_FORWARD) {
            this.vx = 5;
            this.isMovingToRight = true;
        }
        
        if (code === KEY_UP && this.y >= this.ctx.canvas.height / 4) {
            this.vy = -5;
        }

        if (code === KEY_BACKWARD) {
            this.vx = -5;
        }


    }

    onKeyUp(code){
        if(code === KEY_FORWARD) {
            this.vx = 0;
            this.isMovingToRight = false;
        }

        if (code === KEY_UP) {
            this.vy = 0;
        }

        if (code === KEY_BACKWARD) {
            this.vx = 0;
        }
    }
}
