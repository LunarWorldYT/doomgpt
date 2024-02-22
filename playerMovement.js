// Basic canvas setup
var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

// Player setup
var player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  speed: 4,
};

// Event listeners for keydown and keyup events
window.addEventListener('keydown', keyDownHandler, false);
window.addEventListener('keyup', keyUpHandler, false);

// Variables to track which keys are being pressed
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

// Keydown handler
function keyDownHandler(event) {
  switch(event.keyCode) {
    case 39:
      rightPressed = true;
      break;
    case 37:
      leftPressed = true;
      break;
    case 38:
      upPressed = true;
      break;
    case 40:
      downPressed = true;
      break;
  }
}

// Keyup handler
function keyUpHandler(event) {
  switch(event.keyCode) {
    case 39:
      rightPressed = false;
      break;
    case 37:
      leftPressed = false;
      break;
    case 38:
      upPressed = false;
      break;
    case 40:
      downPressed = false;
      break;
  }
}

// Function to update player position based on keys pressed
function movePlayer() {
  if(rightPressed) {
    player.x += player.speed;
  }

  if(leftPressed) {
    player.x -= player.speed;
  }

  if(upPressed) {
    player.y -= player.speed;
  }

  if(downPressed) {
    player.y += player.speed;
  }
}

// Function to render the player on the canvas
function drawPlayer() {
  ctx.fillStyle = '#000';
  ctx.fillRect(player.x, player.y, 50, 50);
}

// Game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  movePlayer();
  requestAnimationFrame(gameLoop);
}

gameLoop();
