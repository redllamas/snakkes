var games  = require('./games');
var events = require('./events');
//var fps       = (1000/30); //30fps
var fps         = (1000/0.5);
var timer       = null;

module.exports = function () {

    function init() {
        if ( ! timer) timer = setInterval(function () { loop() }, fps);
    };

    function term() {
        clearInterval(timer);
    };

    function loop() {
        games.activeGames().forEach(function (game) {
            fireEvents(game);
        });
    };

    function fireEvents(game) {
        events.forEach(function (event) {
            event(game);
        });
    };

    return {
        init: init,
        term: term,
    };

};
