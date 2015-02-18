'use strict';

angular
    .module('app.lobby-controller', [])
    .controller('LobbyController', LobbyController);

LobbyController.$inject = ['$scope', 'socket'];

function LobbyController($scope, socket) {
    var vm = this;

    vm.lobby = {};
    vm.players = [];
    vm.acceptChallenge = acceptChallenge;

    activate();

    ////////////

    function activate() {
        socket.players(function (players) {
            vm.players = players;
            $scope.$apply();
        });
    };

    function acceptChallenge() {
        console.log('click click');
        socket.emit('acceptChallenge', 'hi there');
    };

};
