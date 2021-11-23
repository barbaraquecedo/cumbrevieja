class DodoLives {
    constructor (ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
       
        this.y = y;
        

        this.width= 60;
        this.height = 20;


        this.img = new Image();
        this.img.frames = 3;
        this.img.frameIndex = 0;
        this.img.src = 'assets/img/dodo-lives.png';
    }

    draw () {
        this.img, 
            (this.img.width * this.img.frameIndex)/ this.img.frames,
            0,
            this.img.width / this.img.frames,
            this.img.height,
            this.x, 
            this.y, 
            this.width, 
            this.height 
    }
}