$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  //PUT STUFF HERE

  //run an iteration of the game
  var x = 20; 

  var updateGame = function() {
    context.fillStyle='pink';
    context.fillRect(0, 0, 800, 800);
    context.beginPath();
    context.fillStyle='red';
    context.arc(x, 20, 20,0,2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();
    x = x + 5;
    setTimeout(updateGame, 10);
  };

  updateGame();
});