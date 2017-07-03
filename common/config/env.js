try {
    const devConfig = require('./dev');
    module.exports = Object.assign(require('./prod'), devConfig);
} catch (e) {
    module.exports = require('./prod');
}
