class Game {
    constructor() {

        this.canvas = document.getElementById("canvas-game");
        this.ctx = this.canvas.getContext("2d");
        this.ctx.font = "30px Arial";
        this.ctx.strokeText("Welcome to Cumbrevieja", 10, 50);

        this.drawIntervalId = undefined;
        this.fps = 1000 / 60;

        this.bananaDrawCount = 0;
        this.bananaDrawInterval = 700;

        this.asteroidDrawCount = 0;
        this.asteroidDrawInterval = 350;
        this.gameOverDiv = document.querySelector('.game-over');
        this.gamePoints = document.querySelector('#score');
        
        this.background = new Background(this.ctx);
        this.player = new Player(this.ctx, 150, 260);
        this.lava = new Lava(this.ctx);
        this.dodoLives = new DodoLives(this.ctx, 30, 40);


        this.bananas = [];
        this.asteroids = [];

        this.livesCount = 3;

        this.scoreIntervalId = undefined;

        this.lavaIncrease = 0;

        this.score = 0;
       
    }




    start() {
        if (!this.drawIntervalId) {
            this.drawIntervalId = setInterval(() => {
                this.clear();
                this.draw();
                this.move();
                const lavaFactor = (!this.player.isMovingToRight) ? 100 : 0;

                if (this.lavaIncrease % lavaFactor === 0) {
                    this.lavaIncrease = 0;
                    this.lava.x += 10;
                }


                if (this.bananaDrawCount % this.bananaDrawInterval === 0) {
                    const randomY =  Math.floor(Math.random() * (this.background.y - 30 + 1) + 30);
                    this.bananas.push(new Banana(this.ctx, this.ctx.canvas.width + 30, randomY));
                }

                if (this.asteroidDrawCount % this.asteroidDrawInterval === 0) {
                    const randomN = Math.random()
                    const randomWidth = Math.floor(randomN * (ROCK_WIDTH_MAX - ROCK_WIDTH_MIN + 1) + ROCK_WIDTH_MIN);
                    const randomHeight = Math.floor(randomN * (ROCK_HEIGHT_MAX - ROCK_HEIGHT_MIN + 1) + ROCK_HEIGHT_MIN);
                    const randomX = Math.floor(Math.random() * this.ctx.canvas.width);
                    
                    this.asteroids.push(new Rock(this.ctx, randomX, 0, randomWidth, randomHeight));
                }  
                this.checkCollisions();

            }, this.fps);
        }

        if (!this.scoreIntervalId) {
            this.scoreIntervalId = setInterval(() => {
               this.score += 50;
            }, 1000) 
    
        }
    }

    stop() {
        clearInterval(this.drawIntervalId);
        this.drawIntervalId = undefined;
        clearInterval(this.scoreIntervalId);
        this.scoreIntervalId = undefined;
    }

    gameOver() {
        this.stop();
        const gameOverPannel = document.querySelector('.game-over');
        gameOverPannel.style.display = 'flex';
        this.gamePoints.innerHTML = this.score;
        //this.ctx.fillText('Felicidades, has conseguido un montón de puntos', 10, 20);
        //this.ctx.restore();
    }

    draw() {
        this.background.draw();
        this.player.draw();
        this.lava.draw();
        this.lavaIncrease++;
        this.bananaDrawCount++;
        this.asteroidDrawCount++;

        this.bananas.forEach(banana => banana.draw());

        this.asteroids.forEach(asteroid => asteroid.draw());

        this.ctx.save();
        this.ctx.font = '30px FlappyFont';
        this.ctx.fillSytle = 'black';
        this.ctx.fillText(this.score, 10, 40);
        this.ctx.restore();

        this.dodoLives.draw();
        
        
    }

    move() {
        this.background.move();
        this.player.move();

        this.bananas.forEach(banana => banana.move());
       

        this.asteroids.forEach(asteroid => {
            asteroid.move();
        })
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

    checkCollisions() {
        const asteroidCollision = this.asteroids.find(asteroid => this.player.collides(asteroid));
        if (asteroidCollision) {
            this.livesCount--;
            this.asteroids = this.asteroids.filter(asteroid => {
                return asteroidCollision != asteroid; // distinto
            })
        }

        if (this.livesCount === 0) {
            this.gameOver();
        }

        const bananaCollision = this.bananas.find(banana => this.player.collides(banana));
        if (bananaCollision) {
            this.lava.x -= 10;
            this.bananas = this.bananas.filter(banana => {
                return bananaCollision != banana;
            })
        }

        const lavaCollision = this.player.collides(this.lava);
        
        if (lavaCollision) {
            this.gameOver();
        }

        
        


        
    }
}