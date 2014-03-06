$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  $('#p1').click(function() {
  	context.strokeRect(12,24,100,200);
  });

  $('#p2').click(function() {
  	context.strokeRect(30,5,90,90);
  });

  $('#p3').click(function() {
  	context.beginPath();
  	context.arc(300,100,50,0,Math.PI);
  	context.closePath();
  	context.stroke();
  });

  $('#p4').click(function() {
   	context.beginPath();
   	context.arc(100,100,100,0,2*Math.PI);
   	context.closePath();
   	context.stroke();
  });

  $('#p5').click(function() {
  	context.beginPath();
  	context.moveTo(275,100);
  	context.lineTo(275,200);
  	context.stroke();
  });

  //

});
