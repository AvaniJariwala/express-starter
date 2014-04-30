var express = require("express");
var ejs = require("ejs");
var app = express();


///////////////////////////////////////////////////////////////////////////////
// APP CONFIGURATION                                                         //
///////////////////////////////////////////////////////////////////////////////
//configure logging
app.use(express.logger());
//make files in static folder publicly accessible
app.use('/static', express.static(__dirname + '/static'));
//use ejs for html templates
app.engine('html', ejs.renderFile);

var array = ['green is my favorite color', 'giraffes are very tall', 'goat cheese is gross', 'uc berkeley is the best'];
var blah = array[Math.floor(Math.random()*3)];
var facts = ['pasta is a carb', 'tomatoes are vegetables', 'avacados are the best'];


///////////////////////////////////////////////////////////////////////////////
// APP ROUTES                                                                //
///////////////////////////////////////////////////////////////////////////////
//default route
app.get('/', function(req, res) {
  res.render('index.html', { });
});

app.get('/stuff', function(req, res) {
  res.render('stuff.html', { });
});

app.get('/calc', function(req, res) {
  res.render('calc.html', { });
});

app.get('/imgrr', function(req, res) {
  res.render('imgrr.html', { });
});

app.get('/canvas', function(req, res) {
  res.render('canvas.html', { });
});

app.get('/funcs', function(req, res) {
	res.render('funcs.html', { });
});

app.get('/ball', function(req, res) {
	res.render('ball.html', { });
});

app.get('/chain_reaction', function(req, res) {
	res.render('chain_reaction.html', { });
});

app.get('/fact', function(req, res) {
  var templateData = {
    name: 'Avani',
    adjective: 'cool',
    fact: blah
  };
	res.render('fact.html', templateData);
});

app.get('/facts', function(req, res) {
  var templateData1 = {
    facts: facts
  };
  res.render('facts.html', templateData1);
});

app.get('/submit_fact', function(req, res) {
  var newFact = req.query['fact'];
  facts.push(newFact);
  res.redirect('/facts');
});

///////////////////////////////////////////////////////////////////////////////
// RUN CONFIGURATION                                                         //
///////////////////////////////////////////////////////////////////////////////
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});
