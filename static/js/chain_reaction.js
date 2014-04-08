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
      context.beginPath();
      context.fillStyle='red';
      context.arc(balls[i].x, balls[i].y, balls[i].radius,0,2*Math.PI);
      context.closePath();
      context.stroke();
      context.fill();
    };
    
    // PUT STUFF HERE
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
