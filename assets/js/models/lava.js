class Lava {
    constructor(ctx) {

        this.ctx = ctx;
        this.x = 0;
        this.y = 250;

        this.height = 180;



        this.lavaImg = new Image();
        this.lavaImg.src = 'assets/img/lava.png';
        this.lavaImg.width = 20;
        this.lavaImg.height = 180;

        this.length = 5;
    }

    get width() {
        return this.x;
    }

    draw() {
        for (let i = 0; i < Math.round(this.x / this.lavaImg.width); i++) {
            this.ctx.drawImage(this.lavaImg, i * this.lavaImg.width, this.y, this.lavaImg.width, this.lavaImg.height);
        }
    }

    
}