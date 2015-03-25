module.exports = function (process) {
    return {
        express: {
            ip: "0.0.0.0",
            port: (process && process.env.PORT || 3000)
        },
        websocket: {
            host: "https://obscure-sands-8453.herokuapp.com/"
        },
        store: {
            ip: "192.168.100.111"
        }
    };
};
