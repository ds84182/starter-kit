App.controller('home', function (page) {
	// put stuff here
	$(page).find("#search-button").on("click", function () {
		console.log("clicked");
		$.ajax({
			url: "http://urbanscraper.herokuapp.com/search/"+$(page).find("#search-bar").val().replace(" ","+")+"?callback=null",
			// the name of the callback parameter, as specified by the YQL service
			jsonp: "callback",

			// tell jQuery we're expecting JSONP
			dataType: "jsonp",
			success: function (data)
			{
				data = data[0];
				if (data != null)
				{
					data.term = data.term.replace("+"," ");
					console.log(data);
					App.load('definition', {def: data, frommessage: false});
				}
				else
				{
					App.dialog({
					  title        : 'Term not found!',
					  text         : 'Looks like the term "'+$(page).find("#search-bar").val()+'" was not found. Sorry about that.',
					  okButton 	: 'Ok'
					});
				}
			}
		});
	});
});
