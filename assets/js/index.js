window.addEventListener('load', () => {
    const game = new Game("canvas-game");
    game.start();
    // iteration - 1: create & start the game
    // iteration - 2: add key listeners to the game
  });

  const canvas = document.getElementById("canvas-game");
const ctx = canvas.getContext("2d");

ctx.strokeText("Welcome to Cumbrevieja", 10, 50);