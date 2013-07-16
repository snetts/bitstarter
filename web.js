var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

/*app.get('/', function(request, response) {
  response.send('Hello World 2!');
});
*/

fs.writeFile('index.html', 'Okay Hello World from index.html', function (app) {
  if (app) throw app;
  console.log('The data was saved to file');
});
 

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
