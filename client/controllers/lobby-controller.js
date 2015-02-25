'use strict';

angular
    .module('app.lobby-controller', [])
    .controller('LobbyController', LobbyController);

LobbyController.$inject = ['$scope', '$location', 'socket', 'md5', 'players'];

function LobbyController($scope, $location, socket, md5, players) {
    var vm = this;

    vm.player = {};
    vm.players = [];
    vm.opponent = {};
    vm.player = players.player;
    vm.players = players.players;
    vm.opponent = players.opponent;
    vm.md5 = md5;
    vm.updateInfo = updateInfo;
    vm.challenge = challenge;
    vm.declineChallenge = declineChallenge;
    vm.acceptChallenge = acceptChallenge;

    activate();

    ////////////

    function activate() {
        socket.connect(function () {
            console.log('connecting lobby controller...');
            vm.player.id = this.io.engine.id;
            $scope.$apply();
        });

        // socket.on('disconnect', function () {
        //     console.log('disconnecting..');
        //     declineChallenge();
        // });

        socket.on('acceptChallenge', function () {
            // console.log('accept challenge');
            // console.log(players.player);
            // console.log(players.players);
            // console.log(players.opponent);
            // console.log('-----');
            $location.path('/game');
        });

        socket.players(function (playerz) {
            //vm.players = players;
            vm.players.splice(0, vm.players.length);
            playerz.forEach(function (player) {
                vm.players.push(player);
                if (vm.player.id === player.id) {
                    for (var key in player) vm.player[key] = player[key]
                }
            });
            $scope.$apply();
            // console.log('socket players');
            // console.log(players.player);
            // console.log(players.players);
            // console.log(players.opponent);
            // console.log('-----');
        });

        socket.on('challenge', function (opponentId) {
            vm.players.forEach(function (player) {
                if(player.id === opponentId) {
                    //vm.opponent = player;
                    for (var key in player) vm.opponent[key] = player[key]
                }
            });
        });

        socket.on('declineChallenge', function (data) {
            console.log('declineChallenge');
            console.log(data);
        });
    };

    function updateInfo() {
        socket.emit('updatePlayer', vm.player);
    };

    function challenge(playerId) {
        socket.emit('challenge', playerId);
    };

    function declineChallenge() {
        socket.emit('declineChallenge', vm.opponent.id);
    };

    function acceptChallenge() {
        socket.emit('acceptChallenge', vm.opponent.id);
    };

    function hashUri() {
        vm.gravatarHash = CryptoJS.MD5(vm.gravatar).toString();
    };

};
