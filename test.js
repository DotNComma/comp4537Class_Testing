const http = require('http');
const port = process.env.PORT || 8000

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": "*"})
    res.end('Hello <b>World</b>')
}).listen(port);

console.log('Server is running and listening to 8888')