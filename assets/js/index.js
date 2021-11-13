window.addEventListener('load', () => {
    const game = new Game("canvas-game");

    // iteration - 1: create & start the game
    // iteration - 2: add key listeners to the game
  

  const startButton = document.querySelector('#button-start');
  const gameIntro = document.querySelector('.game-intro');

  document.addEventListener('keydown', (event) => {
    //ejecutar metodo onKeyDown del objeto game pasandole code
    game.onKeyDown(event.keyCode);
  })

  document.addEventListener('keyup', (event) => {
    game.onKeyUp(event.keyCode);
  })

  startButton.addEventListener('click', () => {
    game.start();
    gameIntro.remove();
  })

});
  