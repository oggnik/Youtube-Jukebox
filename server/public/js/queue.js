$(document).ready(function() {
	addListeners();
	updateQueue();
	
	function addListeners() {
		console.log("Add Listeners");
		$("#addField").on("keydown", function(e) {
			//If the enter key is hit
			if (e.keyCode == 13) {
				var newLink = $(this).val();
				console.log(newLink);

				$.post("/submit", {link: newLink}, function(data) {
					if (data === 'done') {
						//Submit succeeded
						console.log('Submit succeeded');
					}
					updateQueue();
				});
			};
		});
	}
	function updateQueue() {
		console.log("Update Queue");
	}
});