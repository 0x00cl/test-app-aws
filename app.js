let http = require('http');
let fs = require('fs');

http.createServer(function(request, response) {
    if (request.url == '/index.html' || request.url == '/') {
      response.writeHead(200, {
          'Content-Type': 'text/html'
      });
      fs.readFile('./public/index.html', null, function (error, data) {
          if (error) {
              response.writeHead(404);
              respone.write('Whoops! File not found!');
          } else {
              response.write(data);
          }
          response.end();
      });
    } else if (request.url == '/mosca.jpg') {
      response.writeHead(200, {
          'Content-Type': 'image/jpeg'
      });
      fs.readFile('./public/mosca.jpg', null, function (error, data) {
          if (error) {
              response.writeHead(404);
              respone.write('Whoops! File not found!');
          } else {
              response.write(data);
          }
          response.end();
      });
    } else {
      response.writeHead(404, {
          'Content-Type': 'text/html'
      });
      fs.readFile('./public/404.html', null, function (error, data) {
          if (error) {
              response.writeHead(404, {
                  'Content-Type': 'text/plain'
              });
              respone.write('404\nSitio en construccion');
          } else {
              response.write(data);
          }
          response.end();
      });
    }
}).listen(process.env.PORT);
