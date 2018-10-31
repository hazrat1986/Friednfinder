
module.exports = (app) => {

	app.get('/', (req, res) => {
		// res.sendFile(path.join(__dirname, 'home.html'));
		res.sendFile('home.html', { root: './app/public' });
	});

	app.get('/survey', (req,res) => {
		// res.sendFile(path.join(__dirname, 'survey.html'));
		res.sendFile('question.html', { root: './app/public' });
	})

	app.get('/main.js', (req,res) => {
		// res.sendFile(path.join(__dirname, 'survey.html'));
		res.sendFile('main.js', { root: './' });
	})
};

