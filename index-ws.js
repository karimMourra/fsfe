const express = require('express');
const server = require('http').createServer();
const app = express();

app.get('/', function(req, resp) {
    resp.sendFile('index.html', { root: __dirname }); 
});

server.on('request', app);
server.listen(3000, function () {
    console.log('kmo express server started on port 3000 what up');
})