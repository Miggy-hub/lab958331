let http = require('http');

http.createServer(function (req, res) {
    res.writieHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World');
}).listen(9000);