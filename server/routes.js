var controllers = require('./controllers');

module.exports = function (app) {
    app.route('/').get(controllers.base.index);
};
