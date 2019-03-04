const fs = require('fs');
const url = require('url');

function showHTML(path,res) {
	fs.readFile(path, (err, data) => {
		if (err){
			res.writeHead(404);
			res.write('File not found');
		}else{
			res.write(data);
		}
		res.end();
	});
}

function render404(res){
	// res.writeHead(404);
	// res.write('File not found!');
	// res.end();
}

module.exports = {
	onRequest: function onRequest(req,res){
		const path = url.parse(req.url).pathname;
		let urlRedirec = '';
		switch(path) {
			case '/':
				urlRedirec = 'home.html';
				break;
			case '/about':
				urlRedirec = 'about.html';
				break;
			default:			
				//render404(res)
				break;
		}
	
		showHTML(`./views/${urlRedirec}`,res);
	},
}