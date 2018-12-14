var http = require ('http');
var url = require ('url');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    var x = url.parse(req.url, true).query;
    var info = x.nome+" "+x.sobrenome;
    res.end(info);
}).listen(process.env.PORT, process.env.IP);