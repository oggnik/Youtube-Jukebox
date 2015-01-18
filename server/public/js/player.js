function onYouTubeIframeAPIReady() {
	nextSong();
}

var player = null;

function nextSong() {
	$.get("/link", function(data) {
		if (data.link) {
			link = data.link;
			console.log(data.link);

			// If the player exists, load the new video
			// Otherwise create the player
			if (player) {
				player.loadVideoById(link);
			} else {
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
		} else {
			// We did not get a link, so recall nextSong in 5 seconds
			setInterval(nextSong, 5000);
		}
	});
}

function onPlayerReady(event) {
	event.target.playVideo();
}

function onPlayerStateChange(event) {
	if(event.data === 0) {
		console.log("done playing");
		nextSong();
	}
}