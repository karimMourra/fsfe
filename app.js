const http = require('http');

http.createServer(function(req, resp) {
	resp.write("El shooting guard del reggaeton, nadie tira mejor que yo!"); 
	resp.end();
}).listen(3000);

console.log('Server started on port 3000, hardcoded :(');
