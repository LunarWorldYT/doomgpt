// Define the walls as an array of objects
var walls = [
    { x: 100, y: 100, width: 20, height: 300 },
    { x: 200, y: 200, width: 300, height: 20 },
    // Add more walls as desired...
  ];
  
  // Function to draw the walls
  function drawWalls() {
    ctx.fillStyle = '#999';
  
    for(var i = 0; i < walls.length; i++) {
      var wall = walls[i];
      ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    }
  }
  
  // Update the gameLoop function to include drawing the walls
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    drawPlayer();
    drawWalls(); // New
  
    movePlayer();
    requestAnimationFrame(gameLoop);
  }
  
  gameLoop();
  
  // Modify the movePlayer function to check for wall collisions
  function movePlayer() {
    var oldX = player.x;
    var oldY = player.y;
  
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
  
    // Check for wall collisions
    for(var i = 0; i < walls.length; i++) {
      var wall = walls[i];
  
      if(player.x < wall.x + wall.width &&
         player.x + 50 > wall.x && // Assume player width is 50
         player.y < wall.y + wall.height &&
         player.y + 50 > wall.y) { // Assume player height is 50
  
        // Collision detected, reset player position
        player.x = oldX;
        player.y = oldY;
      }
    }
  }
  