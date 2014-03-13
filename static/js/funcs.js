$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    context.strokeStyle= color;
    context.strokeRect(x, y, sideLen, sideLen);
    context.strokeStyle='black';
  };

  var drawCircle = function(x, y, radius, color) {
    context.beginPath();
    context.arc(x, y, radius,0,2*Math.PI);
    context.closePath();
    context.strokeStyle= color;
    context.stroke();
  };

  // Write drawTriplet function here

  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  $('#p5').click(function() {
    drawSquare(300, 300, 100, 'red');
    drawCircle(350, 350, 25*(2^(.5)), 'blue');
    drawCircle(300, 350, 25*(2^(.5)), 'green');
    drawCircle(350, 400, 25*(2^(.5)), 'green');
    drawCircle(400, 350, 25*(2^(.5)), 'green');
    drawCircle(350, 300, 25*(2^(.5)), 'green');
  });

  //---------------------------------------------------------------------------
  //Write your code for p5-p11 here
  //

});
