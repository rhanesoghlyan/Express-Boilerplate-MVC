const routes=require('./routes');

module.exports=function (router) {
    routes.forEach(function (r) {
        router[r.method](r.url,require(r.handler));
    });

    router.use(require('../router/handlers/404/index'));
};
