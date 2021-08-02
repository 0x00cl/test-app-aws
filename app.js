const http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<!DOCTYPE html><html><head><title>Mis insectos</title></head><body style="background-color:green"><h1 style="color:red">Mi super sitio de insectos ta re loco</h1></body></html>');
}).listen(process.env.PORT);

console.log('App is running...');
