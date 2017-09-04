var http = require('http');
var data = require('./data');
//var $ = require('jQuery');
http.createServer(function(req, res) {
  console.log('Hier ist ein Request rein gekommen');
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  //var callData_1 = callData();
  //console.log(callData_1);
  var body = '<!DOCTYPE HTML>' +
    '<html>' +
    '<head>' +
    '<title>Hallo Welt</title>' +
    '</head>' +
    '<body>' +
    '<h1>' + data.training[0].title + '</h1>' +
    '<p>' + data.training[0].description + '</p>' +
    '<h1>' + data.training[10].title + '</h1>' +
    '<p>' + data.training[10].description + '</p>' +
    '<img' + ' src=' + '"' + data.training[10].image + '"' + ' alt="Mountain View" style="width:304px;height:228px;"></img>' +
    '</body>' +
    '</html>';
  res.end(body);
}).listen(1337);
