App.controller('definition', function (page, def) {
	var definition = def.def;
	var frommessage = def.frommessage;
	console.log(definition);
	if (frommessage)
	{
		this.restorable = false;
	}
	$(page).find(".app-title").html("Definition: "+definition.term);
	var deftext = "<b>"+definition.term+"</b><br><p>"+definition.definition+"</p><br><i>Example: </i><p>"+definition.example+"</p><br><a href=\""+definition.url+"\">Link to UrbanDictionary.com</a>";
	$(page).find("#definition-section").html(deftext);
	$(page).find("#share-button").on("click", function () {
		kik.send({
			title     : definition.term,
			text      : definition.definition,
			data      : definition
		});
	});
});
