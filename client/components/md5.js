'use strict';

angular
    .module('app')
    .factory('md5', md5);

md5.$inject = [];

function md5() {
    var md5 = require('crypto-js/md5');
    var service = {
        hash: hash
    };
    return service;

    ////////////

    function hash(string) {
        return md5(string).toString();
    };
};
