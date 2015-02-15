//the store implementation should return promises
var store = require('./rethinkdb');

module.exports = function (app) {
    var config = app.get('config');

    return {
        connection: function () {
            return store.connection;
        },
        connect: function (req, res, next) {
            store.connect(config.store.ip)
                .then(function (connection) {
                    store.connection = connection;
                })
                .error(function (error) {
                    return next(new Error('Error connecting to store!'));
                })
                .finally(next);
        },
        disconnect: function (req, res, next) {
            store.disconnect()
                .error(function (error) {
                    return next(new Error('Error while disconnecting'));
                })
                .finally(next);
        }
    };
};
