class Game {
    constructor() {

        this.canvas = document.getElementById("canvas-game");
        this.ctx = this.canvas.getContext("2d");
        this.ctx.font = "30px Arial";
        this.ctx.strokeText("Welcome to Cumbrevieja", 10, 50);
        
        this.drawIntervalId = undefined;
        this.fps = 1000/60;

        this.background = new Background(this.ctx);
        this.player = new Player(this.ctx, 90, 170);
    }




    start() {
    if (!this.drawIntervalId) {
        this.drawIntervalId = setInterval(() => {
            this.draw();
            this.move();
            }, this.fps);  
        }
    }

    stop() {
        clearInterval(this.IntervalId);
        this.IntervalId = undefined;
    }

    draw() {
        this.background.draw();
        this.player.draw();
    }

    move(){
        this.background.move();
        this.player.move();
        
    }
}