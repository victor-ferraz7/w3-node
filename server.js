 var http = require ('http')
 
 http.createServer(function (req, res){
     res.writeHead(200, {'Content-Type':'text/html'});
     res.write('Teste');
     res.end();
 }).listen(process.env.PORT, process.env.IP) 