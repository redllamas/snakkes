module.exports = function($){
'use strict';

angular
    .module('app')
    .factory('joystick', joystick);

joystick.$inject = ['$document', 'players', 'socket'];

function joystick($document, players, socket) {

    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: // left
                console.log('left');
                socket.gameEmit('direction', { direction: 'left', id: players.player.id });
                break;
            case 38: // up
                console.log('up');
                socket.gameEmit('direction', { direction: 'up', id: players.player.id });
                break;
            case 39: // right
                console.log('right');
                socket.gameEmit('direction', { direction: 'right', id: players.player.id });
                break;
            case 40: // down
                console.log('down');
                socket.gameEmit('direction', { direction: 'down', id: players.player.id });
                break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

    return {};

}
}
