alert('Check out my cool shit'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
 alert('Hello world!') // WRITE CODE HERE
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
  $('#houdini_text').hide();
});

$('#reappear').click(function() {
  $('#houdini_text').show();
});


// Problem 3 (Tickle Me Pink) -----------------------------------------------
$('#pink').click(function() {
  $('#tickled_text').css('color', 'pink');
});
// WRITE CODE HERE


// Problem 4 (Greet Me) -----------------------------------------------------
$('#greet').click(function() {
  $('#my_name').val(function(n,c) {
  	return 'Hi ' + c
  })
});
// WRITE CODE HERE
