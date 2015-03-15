'use strict';

angular
    .module('app')
    .factory('chat', chat);

chat.$inject = [];

function chat() {
    var limit    = 2;
    var messages = [];
    var service  = {
        limit: limit,
        messages: messages,
        addMessage: addMessage
    };
    return service;

    ////////////

    function addMessage(message) {
        messages.splice(0, 0, message);
    };

};
