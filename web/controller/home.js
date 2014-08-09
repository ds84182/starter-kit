App.controller('home', function (page) {
	// put stuff here
	$(page).find("#search-button").on("click", function () {
		console.log("clicked");
		/*App.dialog({
		  title        : 'Network Error',
		  text         : 'Looks like the connection is flaky. Try again in a bit',
		  okButton     : 'Try Again',
		  cancelButton : 'Cancel'
		}, function (tryAgain) {
		  if (tryAgain) {
			// try again
		  }
		});*/
		$.ajax({
			url: "http://urbanscraper.herokuapp.com/define/"+$(page).find("#search-bar").val()+"?callback=null",
			// the name of the callback parameter, as specified by the YQL service
			jsonp: "callback",

			// tell jQuery we're expecting JSONP
			dataType: "jsonp",
			success: function (data)
			{
				console.log(data);
				App.load('definition', data);
			}
		});
	});
});
