var before = require('./before');
var after  = require('./after');

module.exports.before = function (app) {
    before(app);
};

module.exports.after = function (app) {
    after(app);
};
