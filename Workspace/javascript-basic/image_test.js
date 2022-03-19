var http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = '3001';

var app = http.createServer(function(request, response) {
    console.log(request.url);

    if(request.url ==='/') {
        response.writeHead(200);
        response.end(fs.readFileSync(__dirname + '/html/image_test.html'));
    } 
    if(request.url==='/images'){
        fs.readFile('./images/rock_img_1.png', function(err, data){
          console.log('image loading...');
          response.writeHead(200);
          response.write(data);
          response.end();
        });
    }
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});