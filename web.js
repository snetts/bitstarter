var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

fs.readFile("index.html", function(err, html) {
	if(err) {
		throw err;
	}
	app.get('/', function(request, response) {
	
	response.writeHeader(200, {"Content-Type": "text/html"});
	response.write(html);
	response.end();
});
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
