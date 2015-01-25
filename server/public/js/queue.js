$(document).ready(function() {
	addListeners();
	updateQueue();
	
	function addListeners() {
		console.log("Add Listeners");
		$("#addField").on("keydown", function(e) {
			//If the enter key is hit
			if (e.keyCode == 13) {
				var newLink = $(this).val();
				var loc = newLink.indexOf('v=');
				if (loc === -1) {
					// malformed url, alert user
					alert("URL malformed, is it a youtube link?");
					return;
				}
				newLink = newLink.substring(loc + 2);
				console.log(newLink);

				$.post("/link", {link: newLink}, function(data) {
					if (data === 'done') {
						//Submit succeeded
						console.log('Submit succeeded');
					}
					updateQueue();
				});
				$('#addField').val('');
			};
		});
	}
});