(function (App) {
	if (kik.message != null)
	{
		try {
			App.restore();
		} catch (err) {
			App.load('home');
		}
		App.load('definition', kik.message);
		return;
	}
	try {
		App.restore();
	} catch (err) {
		App.load('home');
	}
})(App);
