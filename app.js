const http = require('http');

http.createServer(function(request, response) {
  response.writeHead(404, {'Content-Type': 'text/html'});
  response.end('<!DOCTYPE html><html><head><title>Mis insectos</title></head><body><h1>404</h1><p>El sitio no se encuentra disponible</p><p>Mientras tanto te dejo una mosca muerta</p><img src="/public/mosca.jpg"></body></html>');
}).listen(process.env.PORT);

console.log('App is running...');
