/**
 * Update Queue
 */

function updateQueue() {
	console.log("Updating Queue");
	$.get("/queue", function(data) {
		if (data.queue) {
			var queue = data.queue;
			console.log(data.queue);

			$('.queue_list').empty();
			queue.forEach(function(currentVal, index, array) {
				var link = 'https://www.youtube.com/watch?v=' + currentVal;
				$('.queue_list').append('<div class="queue_element"><p>' + (index + 1) + ') <a href="' + link + '" class="queue_link">' + link + '</a></p></div>');
			});
		}
	});
}