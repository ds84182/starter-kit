App.controller('page2', function (page) {
	// put stuff here
	this.restorable = false;
	kik.send({
		title     : 'Message title',
		text      : 'Message body',
		noForward : true, // optional
		data      : { some : 'json' }         // optional
	});
});
