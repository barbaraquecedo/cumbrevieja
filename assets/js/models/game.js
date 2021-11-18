class Game {
    constructor() {

        this.canvas = document.getElementById("canvas-game");
        this.ctx = this.canvas.getContext("2d");
        this.ctx.font = "30px Arial";
        this.ctx.strokeText("Welcome to Cumbrevieja", 10, 50);

        this.drawIntervalId = undefined;
        this.fps = 1000 / 60;

        this.background = new Background(this.ctx);
        this.player = new Player(this.ctx, 150, 260);
        this.banana = new Banana(this.ctx, 50, 100);
        this.pet = new Pet(this.ctx, 50, 100);
        this.lava = new Lava(this.ctx);

        this.lavaIncrease = 0;
    }




    start() {
        if (!this.drawIntervalId) {
            this.drawIntervalId = setInterval(() => {
                this.clear();
                this.draw();
                this.move();
                const lavaFactor = this.player.isMovingToRight > 0 ? 400 : 30;
                if (this.lavaIncrease % lavaFactor === 0) {
                    this.lavaIncrease = 0;
                    this.lava.x += 10;
                }
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
        this.banana.draw();
        this.pet.draw();
        this.lava.draw();
        this.lavaIncrease++;
    }

    move() {
        this.background.move();
        this.player.move();
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    onKeyDown(code) {
        this.player.onKeyDown(code);
    }

    onKeyUp(code) {
        this.player.onKeyUp(code);
    }
}