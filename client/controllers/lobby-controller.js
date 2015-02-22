'use strict';

angular
    .module('app.lobby-controller', [])
    .controller('LobbyController', LobbyController);

LobbyController.$inject = ['$scope', 'socket', 'md5'];

function LobbyController($scope, socket, md5) {
    var vm = this;

    vm.player = {};
    vm.players = [];
    vm.opponent = {};
    vm.md5 = md5;
    vm.updateInfo = updateInfo;
    vm.challenge = challenge;
    vm.declineChallenge = declineChallenge;
    vm.acceptChallenge = acceptChallenge;

    activate();

    ////////////

    function activate() {
        socket.connect(function () {
            vm.player.id = this.io.engine.id;
            $scope.$apply();
        });

        socket.on('disconnect', function () {
            declineChallenge();
        });

        socket.players(function (players) {
            vm.players = players;
            vm.players.forEach(function (player) {
                if(player.id === vm.player.id) vm.player = player;
            });
            $scope.$apply();
        });

        socket.on('challenge', function (opponentId) {
            vm.players.forEach(function (player) {
                if(player.id === opponentId) {
                    vm.opponent = player;
                }
            });
        });

        socket.on('declineChallenge', function (data) {
            console.log(data)
        });
    };

    function updateInfo() {
        socket.emit('updatePlayer', vm.player);
    };

    function challenge(playerId) {
        socket.emit('challenge', playerId);
    };

    function declineChallenge() {
        //if (vm.opponent.id) socket.emit('declineChallenge', vm.opponent.id);
        socket.emit('declineChallenge', vm.opponent.id);
    };

    function acceptChallenge() {
        //socket.emit('acceptChallenge', 'hi there');
    };

    function hashUri() {
        vm.gravatarHash = CryptoJS.MD5(vm.gravatar).toString();
    };

};
