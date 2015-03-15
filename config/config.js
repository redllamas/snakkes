module.exports = function (process) {
    return {
        express: {
            ip: "0.0.0.0",
            port: (process && process.env.PORT || 3000)
        },
        websocket: {
            host: "http://192.168.1.6:3000"
        },
        store: {
            ip: "192.168.100.111"
        }
    };
};
