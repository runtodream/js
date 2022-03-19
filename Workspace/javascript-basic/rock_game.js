const http = require('http');
var fs = require('fs');
 
const hostname = '127.0.0.1';
const port = '3001';

http.createServer(function (req, res) {
    fs.readFile('./html/rock_game.html', 'utf8', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});