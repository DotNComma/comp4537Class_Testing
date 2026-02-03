const http = require('http');
const port = process.env.PORT || 8000;

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": "*"})
    res.end('Hello <b>World</b>')
}).listen(port);

const xhttp = new XMLHttpRequest();
xhttp.open("GET", "http://apiz.ca/readystatechange", true);
xhttp.send();
xhttp.onreadystatechange = function () {
    console.log("hello")
}

console.log('Server is running and listening to 8888')