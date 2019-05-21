let express = require('express');
let app = express();

let indexHandler = (req,res) => {
	return res.send('hello world');
}

app.get('/',indexHandler);

app.get('/bye',(req,res) => {
	return res.send('bye bye, see you again');
})

app.listen(8080,() => {
	console.log('server started at: 127.0.0.1:8080');
});
