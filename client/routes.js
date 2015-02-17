'use strict';

angular
    .module('app', dependencies())
    .config(configure);

    function dependencies() {
        return [
            'ngRoute',
            'app.game-controller',
            'app.lobby-controller'
        ];
    };

    configure.$inject = ['$routeProvider'];

    function configure($routeProvider) {
        $routeProvider
            .when('/lobby', {
                templateUrl: '/views/lobby.html',
                controller: 'LobbyController',
                controllerAs: 'vm'
            })
            .when('/game', {
                templateUrl: '/views/game.html',
                controller: 'GameController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/lobby'
            });
    };
