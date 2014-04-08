$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE

  var balls = new Array();

  var b0 = {x: 300, y: 300, radius: 30, vx: 5, vy: 5}

  var b1 = {x: 50, y: 50, radius: 40, vx: 5, vy: 5}
  
  var b2 = {x: 200, y: 100, radius: 50, vx: 5, vy: 5}


  balls.push(b0);
  balls.push(b1);
  balls.push(b2);

  // Run an interation of the game
  var updateGame = function() {
    for (var i = 0; i < balls.length; i++) {
      balls[i].x = balls[i].x + balls[i].vx;
      balls[i].y = balls[i].y + balls[i].vy;
      if (balls[i].x === width) {
        balls[i].vx = -5;
      }
      if (balls[i].y === height) {
        balls[i].vy = -5;
      }
      if (balls[i].x === 0) {
        balls[i].vx = 5;
      }
      if (balls[i].y === 0) {
        balls[i].vy = 5;
      }
    }
    context.fillStyle='pink';
    context.fillRect(0, 0, 800, 800);
    for (var i = 0; i < balls.length; i++) {
      context.beginPath();
      context.fillStyle='red';
      context.arc(balls[i].x, balls[i].y, balls[i].radius,0,2*Math.PI);
      context.closePath();
      context.stroke();
      context.fill();
    };
    setTimeout(updateGame, 10);
  };

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
  });

  updateGame();
});
