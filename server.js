var http = require ('http');
var fs = require ('fs');

http.createServer(function (req, res){
    fs.readFile('teste-fs.html', function (err, data){
       res.writeHead(200, {'Content-Type':'text/html'});
       res.write(data);
       res.end();
    });
}).listen(process.env.PORT, process.env.IP);