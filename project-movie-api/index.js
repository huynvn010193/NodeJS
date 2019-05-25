let express = require('express');
let app = express();

let MovieStore = require('./moviestore');
let movieStore = new MovieStore();

let indexHandler = (req,res) => {
	return res.send(movieStore.all());
}

app.get('/movies',indexHandler);

app.get('/bye',(req,res) => {
	return res.send('bye bye, see you again');
})

app.listen(8080,() => {
	console.log('server started at: 127.0.0.1:8080');
});
