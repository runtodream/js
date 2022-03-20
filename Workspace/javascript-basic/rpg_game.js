const http = require('http');
var fs = require('fs');
 
const hostname = '127.0.0.1';
const port = '3001';

http.createServer(function (req, res) {
    if(req.url==='/'){
        fs.readFile(__dirname + '/html/rpg_game_login.html', 'utf8', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }

    if(req.url==='/image_1'){
        fs.readFile(__dirname + '/images/fish_1.png', function(err, data){
          res.writeHead(200);
          res.write(data);
          res.end();
        });
    } else if(req.url==='/image_2'){
        fs.readFile(__dirname + '/images/fish_2.png', function(err, data){
          res.writeHead(200);
          res.write(data);
          res.end();
        });
    } else if(req.url==='/image_3'){
        fs.readFile(__dirname + '/images/fish_3.png', function(err, data){
          res.writeHead(200);
          res.write(data);
          res.end();
        });
    } else if(req.url==='/image_4'){
        fs.readFile(__dirname + '/images/fish_4.png', function(err, data){
          res.writeHead(200);
          res.write(data);
          res.end();
        });
    } else if(req.url==='/image_5'){
        fs.readFile(__dirname + '/images/fish_5.png', function(err, data){
          res.writeHead(200);
          res.write(data);
          res.end();
        });
    } else if(req.url==='/image_6'){
        fs.readFile(__dirname + '/images/fish_6.png', function(err, data){
          res.writeHead(200);
          res.write(data);
          res.end();
        });
    } else if(req.url==='/image_7'){
        fs.readFile(__dirname + '/images/fish_7.png', function(err, data){
          res.writeHead(200);
          res.write(data);
          res.end();
        });
    } else if(req.url==='/image_8'){
        fs.readFile(__dirname + '/images/fish_8.png', function(err, data){
          res.writeHead(200);
          res.write(data);
          res.end();
        });
    } else if(req.url==='/image_9'){
        fs.readFile(__dirname + '/images/fish_9.png', function(err, data){
          res.writeHead(200);
          res.write(data);
          res.end();
        });
    } else if(req.url==='/image_10'){
        fs.readFile(__dirname + '/images/fish_10.png', function(err, data){
          res.writeHead(200);
          res.write(data);
          res.end();
        });
    } else if(req.url==='/image_11'){
        fs.readFile(__dirname + '/images/fish_11.png', function(err, data){
          res.writeHead(200);
          res.write(data);
          res.end();
        });
    } else if(req.url==='/image_12'){
        fs.readFile(__dirname + '/images/fish_12.png', function(err, data){
          res.writeHead(200);
          res.write(data);
          res.end();
        });
    } else if(req.url==='/image_13'){
        fs.readFile(__dirname + '/images/fish_13.png', function(err, data){
          res.writeHead(200);
          res.write(data);
          res.end();
        });
    } else if(req.url==='/image_14'){
        fs.readFile(__dirname + '/images/fish_14.png', function(err, data){
          res.writeHead(200);
          res.write(data);
          res.end();
        });
    } else if(req.url==='/image_15'){
        fs.readFile(__dirname + '/images/fish_15.png', function(err, data){
          res.writeHead(200);
          res.write(data);
          res.end();
        });
    }

}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});