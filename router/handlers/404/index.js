const _=require('lodash');

module.exports = function (req, res) {
    res.render('404', _.assign({},{title: 'Page Not Found :('
        })
    )
};
