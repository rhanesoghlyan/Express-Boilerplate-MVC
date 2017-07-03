const routes = require('./routes');

module.exports = (router) => {
    routes.forEach((r) => {
        router[r.method](r.url, require(r.handler));
    });
};
