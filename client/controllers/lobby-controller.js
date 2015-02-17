'use strict';

angular
    .module('app.lobby-controller', [])
    .controller('LobbyController', LobbyController);

LobbyController.$inject = [];

function LobbyController() {
    var vm = this;

    vm.lobby = {};

    activate();

    ////////////

    function activate() {
        //
    };

};
