'use strict';

angular
    .module('app.game-controller', [])
    .controller('GameController', GameController);

GameController.$inject = [];

function GameController() {
    var vm = this;

    vm.lobby = {};

    activate();

    ////////////

    function activate() {
        //
    };

};
