var events = require('./events');
var Game   = require('./game');
var games  = {};
//var fps    = (1000/30); //30fps
var fps    = (1000/1000);
var timer  = null;

var websocket = require('../websocket/websocket');

games.activeGames = [];

games.startLoop = function () {
    if ( ! timer) timer = setInterval(function () { games.loop(); }, fps);
};

games.stopLoop = function () {
    clearInterval(timer);
};

games.loop = function () {
    console.log('websockets');
    console.log('----------');
    console.log(websocket.sockets);
    console.log('----------');
    games.activeGames.forEach(function (game) {
        games.fireEvents(game);
    });
};

games.fireEvents = function (game) {
    events.forEach(function (event) {
        event(game);
    });
};

games.startGame = function () {
    games.activeGames.push(new Game);
};

games.stopGame = function (gameRoomIndex) {
    games.activeGames.splice(gameRoomIndex, 1);
};

module.exports = games;
