
class Background {

    constructor(ctx){

    this.ctx = ctx;

    this.x = 0;
    this.y = 335;

    this.vx = 0.2;

    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;
    

    this.bgImg = new Image();
    this.bgImg.src = 'assets/img/volcano.png';
    this.bgImg.width = this.width;
    this.bgImg.height = this.height;

    this.footerImg = new Image();
    this.footerImg.src = 'assets/img/game-bg-footer.jpg';
    this.footerImg.width = this.width;
    this.footerImg.height = 64;

    }

    draw() {
        this.ctx.drawImage(this.bgImg, this.x, 0, this.bgImg.width, this.bgImg.height);
        this.ctx.drawImage(this.bgImg, this.x + this.width, 0, this.bgImg.width, this.bgImg.height);
        this.ctx.drawImage(this.footerImg, this.x, this.y, this.footerImg.width, this.footerImg.height);
        this.ctx.drawImage(this.footerImg, this.x + this.footerImg.width, this.y, this.footerImg.width, this.footerImg.height);
        

    }

    move() {
        this.x -= this.vx;

        if (this.x + this.width <= 0){
            this.x = 0;
        }
    }
}