
class Background {

    constructor(ctx){

    this.ctx = ctx;

    this.x = 0;
    this.y = 434;

    this.vx = 0.2;

    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;
    

    this.bgImg = new Image();
    this.bgImg.src = 'assets/img/volcano.png';
    this.bgImg.width = this.width;
    this.bgImg.height = this.height;

    }

    draw() {
        this.ctx.drawImage(this.bgImg, 0, 0, this.bgImg.width, this.bgImg.height);
        this.ctx.drawImage(this.bgImg, this.x + this.width, this.y, this.bgImg.width, this.bgImg.height);
    }

    move() {
        this.x -= this.vx;

        if (this.x + this.width <= 0){
            this.x = 0;
        }
    }
}