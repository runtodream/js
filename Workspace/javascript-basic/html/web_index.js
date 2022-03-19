const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');

var app = http.createServer(function(req,res){
  var url = req.url;
    if(req.url == '/'){
      url = '/index.html';
    }
    if(req.url == '/favicon.ico'){
      return res.writeHead(404);
    }
    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + url));
 
});

// listen 함수로 3000 포트에 서버를 실행
app.listen(3000, function(){
  console.log("server is running.")
});


