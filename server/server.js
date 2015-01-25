var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Links are stored in linkQueue until the player requests them
var linkQueue = [];

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

// Route for the player
app.get('/player', function(req, res) {
	res.sendFile(__dirname + '/public/player.html');
});

// Route for the submissions
app.get('/submit', function(req, res) {
	res.sendFile(__dirname + '/public/submit.html');
});

/*
	Post for submit
	This is used to submit youtube links
*/
app.post('/link', function(req, res) {
	var link = req.body.link;
	console.log('Submit: %s', link);
	linkQueue.push(link);
	res.end("done");
});

/*
	Get for links
	This is used to retrieve links
*/
app.get('/link', function(req, res) {
	var link = linkQueue.shift();
	console.log('Play: %s', link);

	res.json({link: link});
});

/*
	Get the entire queue
*/
app.get('/queue', function(req, res) {
	console.log('Request Queue');
	res.json({queue: linkQueue});
});

// Serve the files in the /public folder
app.use(express.static(__dirname + '/public'));

var server = app.listen(3205, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Youtube Jukebox listening at http://%s:%s', host, port);

});