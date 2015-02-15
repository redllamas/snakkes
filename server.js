var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var config = require('./app/config/config.js')(process);
var websocket = require('./app/components/websocket')(io);

//config
app.set('config', config);

//load pre-route middleware
// var beforeMiddleware = require('./middleware/before.js')(app);

//static assets
app.use(express.static(__dirname + '/public'));

//load routes
app.get('/', function (req, res, next) {
    next();
});

//load post-route middleware
// var afterMiddleware = require('/.middleware/after.js')(app);

server.listen(app.get('config').express.port, function(){
  console.log('listening on *:' + app.get('config').express.port);
});
