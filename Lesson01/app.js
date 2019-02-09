const http = require('http');

const moduleOne = require('./libs');

http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end('Hello NodeJS\n');
}).listen(moduleOne.port,moduleOne.hostname, () => {
	console.log(`Server running at http://${moduleOne.hostname}:${moduleOne.port}/`);
	moduleOne.show();
});

// server.listen(moduleOne.port,moduleOne.hostname, () => {
// 	console.log(`Server running at http://${moduleOne.hostname}:${moduleOne.port}/`);
// 	moduleOne.show();
// });
