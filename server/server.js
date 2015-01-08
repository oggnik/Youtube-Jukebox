var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

// Route for the player
app.get('/player', function(req, res) {
	res.sendFile(__dirname + '/public/player.html');
});

app.get('/submit', function(req, res) {
	res.sendFile(__dirname + '/public/test.html');
});

// Serve the files in the /public folder
app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Youtube Jukebox listening at http://%s:%s', host, port);

});