let http = require('http'),
  port = process.env.PORT || process.argv[2] || 4080;
// let server = http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('hello heroku!', 'utf-8');
//   res.end();
// });
// server.listen(port, function () {
//   console.log('app up on port: ' + port);
// });


var express = require('express');
var app = express();
// app.use(express.static(__dirname));
app.use(express.static('./dist/winner-reward'));
app.get('/*',  (req, res) => {
  res.sendFile('index.html', {root: 'dist/winner-reward/'});
});

app.listen(port);
console.log('working on ' + port);
