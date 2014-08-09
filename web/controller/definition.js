App.controller('definition', function (page, definition) {
	console.log(definition);
	var deftext = "<b>"+definition.term+"</b><br><p>"+definition.definition+"</p><br><i>Example: </i><p>"+definition.example+"</p>";
	$(page).find("#definition-section").html(deftext);
	$(page).find("#share-button").on("click", function () {
		kik.send({
			title     : definition.term,
			text      : definition.definition,
			data      : definition
		});
	});
});
