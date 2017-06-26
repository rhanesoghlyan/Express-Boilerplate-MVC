const meta = require('../../../meta');
const _ = require('lodash');

module.exports = function (req, res) {
    res.render('home', _.assign({}, {
        title: 'Welcome at Home :)',
        meta: meta.home
    }))
};
