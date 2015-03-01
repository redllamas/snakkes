var express    = require('express');
var app        = express();
var server     = require('http').Server(app);
var io         = require('socket.io')(server);
var config     = require('./server/config/config')(process);
var websocket  = require('./server/components/websocket/websocket').init(io);
var routes     = require('./server/routes');
var middleware = require('./server/middleware');

//config
app.set('config', config);

//static assets
app.use(express.static(__dirname + '/public'));

//pre-route middleware
middleware.before(app);

//register routes
routes(app);

//post-route middleware
middleware.after(app);

//start server
server.listen(app.get('config').express.port, function(){
    console.log('listening on *:' + app.get('config').express.port);
});
