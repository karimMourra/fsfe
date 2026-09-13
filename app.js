const http = require('http');

http.createServer(function(req, resp) {
	resp.write("Bonjour Monde!! \n Hola Mundo!! \n Bonjou Monde!! \n Oi Mundo!! \n Hello World!!"); 
	resp.end();
}).listen(3000);

console.log('Server started on port 3000, hardcoded :(');
