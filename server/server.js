var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.json());

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
app.post('/submit', function(req, res) {
	console.log(req.body);
	console.log(req.body.link);
	res.end("done");
})

// Serve the files in the /public folder
app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Youtube Jukebox listening at http://%s:%s', host, port);

});