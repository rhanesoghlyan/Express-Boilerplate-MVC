const meta = require('../../../common/meta');
const _assign = require('lodash').assign;

module.exports = (req, res) => {
    res.render('home', _assign({
        title: 'Welcome Home :)',
        meta: meta.home
    }, req.locals));
};
