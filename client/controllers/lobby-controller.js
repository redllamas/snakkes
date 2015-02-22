'use strict';

angular
    .module('app.lobby-controller', [])
    .controller('LobbyController', LobbyController);

LobbyController.$inject = ['$scope', 'socket', 'md5'];

function LobbyController($scope, socket, md5) {
    var vm = this;

    vm.lobby = {};
    vm.player = {};
    vm.players = [];
    vm.md5 = md5;
    vm.updateInfo = updateInfo;
    vm.acceptChallenge = acceptChallenge;

    activate();

    ////////////

    function activate() {
        socket.connect(function () {
            console.log('connected');
            vm.player.id = this.io.engine.id;
            $scope.$apply();
        });

        socket.players(function (players) {
            players.forEach(function (player) {
                if(player.id === vm.player.id) vm.player = player;
            });
            vm.players = players;
            $scope.$apply();
        });
    };

    function updateInfo() {
        console.log('update info');
        socket.emit('updatePlayer', vm.player);
    };

    function acceptChallenge() {
        console.log('click click');
        socket.emit('acceptChallenge', 'hi there');
    };

    function hashUri() {
        vm.gravatarHash = CryptoJS.MD5(vm.gravatar).toString();
    };

};
