const http = require('http');
const configs = require('./mmodule/config');
const helper = require('./mmodule/helper');

http.createServer(helper.onRequest).listen(configs.port);
