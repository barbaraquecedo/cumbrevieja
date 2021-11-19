
class Rock {

    constructor(ctx,x, y, width, height) {

        this.ctx = ctx;

        this.x = x;
        this.y = y;
        this.vy = 0.6;

        this.width = width;
        this.height = height;

        this.img = new Image();
        this.img.src = 'assets/img/rock.png';
        
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    move() {
        this.y += this.vy;
    }
}