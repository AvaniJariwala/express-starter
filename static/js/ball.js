$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  //PUT STUFF HERE

  //run an iteration of the game
  var ball = {x: 30, y: 10, radius: 30}

  var x = 30;
  var y = 10;

  var updateGame = function() {
    context.fillStyle='pink';
    context.fillRect(0, 0, 800, 800);
    context.beginPath();
    context.fillStyle='red';
    context.arc(ball.x, ball.y, ball.radius,0,2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();
    ball.x = ball.x + 5;
    ball.y = ball.y + 5;
    setTimeout(updateGame, 10);
  };

  updateGame();
});