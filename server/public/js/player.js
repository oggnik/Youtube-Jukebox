function onYouTubeIframeAPIReady() {
	nextSong();
}

var player;

function nextSong() {
	$.get("/link", function(data) {
		if (data.link) {
			link = data.link;
			console.log(data.link);

			// Remove the previous player and add a new one.
			player = new YT.Player('player', {
				height: '390',
				width: '640',
				videoId: link,
				events: {
					'onReady': onPlayerReady,
					'onStateChange': onPlayerStateChange
				}
			});
		}
	});
}

function onPlayerReady(event) {
	event.target.playVideo();
}

function onPlayerStateChange(event) {
	if(event.data === 0) {          
		alert('done');
	}
}