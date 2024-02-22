// Starting player's health
var health = 100;

// Elements setup for displaying the health bar
var healthBar = document.createElement('div');
healthBar.style.height = '20px';
healthBar.style.background = 'green';
document.body.appendChild(healthBar);

// Function to decrease health and update the health bar
function takeDamage(amount) {
    health -= amount;

    // health can't go beyond 0
    if(health < 0) {
        health = 0;
    }

    healthBar.style.width = health + "%";

    // health bar changes color depending on current health
    if(health <= 50 && health > 25) {
        healthBar.style.background = 'yellow';
    } else if(health <= 25) {
        healthBar.style.background = 'red';
    }
}

// add collision detection with walls to trigger damage
for(var i = 0; i < walls.length; i++) {
    var wall = walls[i];

    if(player.x < wall.x + wall.width &&
       player.x + 50 > wall.x && 
       player.y < wall.y + wall.height &&
       player.y + 50 > wall.y) { 
    // if collision detected, apply damage
    takeDamage(10);
    }
}
