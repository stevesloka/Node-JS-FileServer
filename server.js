// Taken from: http://stackoverflow.com/questions/6294186/express-js-any-way-to-display-a-file-dir-listing?lq=1

var express = require('express')
  , app = express.createServer();

app.configure(function() {
  var hourMs = 1000*60*60;
  app.use(express.static(__dirname + '/public', { maxAge: hourMs }));
  app.use(express.directory(__dirname + '/public'));
  app.use(express.errorHandler());
});

app.listen(8080);

console.log("Server started on port: 8080");