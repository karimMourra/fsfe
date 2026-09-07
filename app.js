const http = require('http');

http.createServer(function(req, resp) {
	resp.write("Bonjour Monde!!"); 
	resp.end();
}).listen(3000);

console.log('Server started on port 3000, hardcoded :(');
