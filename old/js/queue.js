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
				//Write queue to file
				$.ajax({
					type: 'POST',
					url: "writeToFile.php",//url of receiver file on server
					data: {"dataString": newLink}, //your data
					success: updateQueue(), //callback when ajax request finishes
					dataType: "json" //text/json...
				});
			};
		});
	}
	function updateQueue() {
		console.log("Update Queue");
	}
});