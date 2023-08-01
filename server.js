var http = require('http');
var fs = require('fs'); // Add the fs module for file operations

var server = http.createServer(function(req, res) {
  fs.readFile('index.html', function(error, content) {
    if (error) {
      res.writeHead(500);
      res.end('Error loading index.html'); // Handle error if the file cannot be read
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content); // Send the content of index.html as the response
    }
  });
});

server.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
