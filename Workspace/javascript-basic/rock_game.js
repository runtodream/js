const http = require('http');
var fs = require('fs');
 
const hostname = '127.0.0.1';
const port = '3001';

http.createServer(function (req, res) {
    if(req.url==='/'){
        fs.readFile(__dirname + '/html/rock_game.html', 'utf8', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }

    if(req.url==='/image_1'){
        fs.readFile(__dirname + '/images/rock_img_1.png', function(err, data){
          console.log(__dirname + '/images/rock_img_1.png loading...');
          res.writeHead(200);
          res.write(data);
          res.end();
        });
    }
    if(req.url==='/image_2'){
        fs.readFile(__dirname + '/images/rock_img_2.png', function(err, data){
          console.log(__dirname + '/images/rock_img_2.png loading...');
          res.writeHead(200);
          res.write(data);
          res.end();
        });
    }
    if(req.url==='/image_3'){
        fs.readFile(__dirname + '/images/rock_img_3.png', function(err, data){
          console.log(__dirname + '/images/rock_img_3.png loading...');
          res.writeHead(200);
          res.write(data);
          res.end();
        });
    }

}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});