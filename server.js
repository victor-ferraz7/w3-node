 var http = require ('http')
 
 http.createServer(function (req, res){
     res.write('Teste');
     res.end();
 }).listen(process.env.PORT, process.env.IP) 