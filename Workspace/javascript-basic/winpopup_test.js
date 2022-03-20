var http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = '3001';

var app = http.createServer(function(request, response) {
    console.log(request.url);

    if(request.url ==='/') {
        response.writeHead(200);
        console.log(__dirname + '/html/winpopup.html');
        response.end(fs.readFileSync(__dirname + '/html/winpopup.html'));
    } 
    if(request.url==='/images'){
        console.log(__dirname + '/images/rock_img_1.png loading...');
        fs.readFile(__dirname + '/images/rock_img_1.png', function(err, data){
        response.writeHead(200);
        response.write(data);
        response.end();
      });
    }
    
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});