(function (App) {
	if (kik.message != null)
	{
		try {
			App.restore();
		} catch (err) {
			App.load('home');
		}
		App.load('definition', {def: kik.message, frommessage: true});
		return;
	}
	try {
		App.restore();
	} catch (err) {
		App.load('home');
	}
})(App);
