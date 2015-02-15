var r = require('rethinkdb');

var rdb = function () {};

rdb.connection = null;

rdb.prototype.connect = function (ip) { return r.connect(ip); }

rdb.prototype.disconnect = function () { return rdb.connection.close(); }

module.exports = rdb();
