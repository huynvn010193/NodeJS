let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// Include body-parser
app.use(bodyParser.json({
	type: 'application/json'
}));

let MovieStore = require('./moviestore');
let movieStore = new MovieStore();

app.get('/movies',(req,res) => {
	return res.send(movieStore.all());
});

// redirect trang index
app.get('/', (req,res) => {
	return res.redirect('/movies');
});

app.get('/movies/:title', (req,res) => {
	let foundMovies = movieStore.find(req.params.title);
	if(foundMovies.length < 1) {
		res.statusCode = 404;
		return res.send({
			message: 'movie not found'
		})
	}
	return res.send({
		message: 'found movie',
		payload: foundMovies.pop()
	});
});

app.post('/movies',(req,res) => {
	if(!req.body.Title || req.body.Title.trim().length < 1) {
		res.statusCode = 400;
		return res.send({
			message: 'missing or invalid title'
		});
	}
	console.log("TCL: movieStore.has(req.body.Title)", movieStore.has(req.body.Title));
	if(movieStore.has(req.body.Title)) {
		res.statusCode = 400;
		return res.send({
			message: 'movie already existed'
		});
	}
	movieStore.add(req.body);
	return res.send({
		message: "movie added successfully"
	});
});

app.listen(8080,() => {
	console.log('server started at: 127.0.0.1:8080');
});
