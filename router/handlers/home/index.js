const meta = require ('../../../meta');

module.exports=function (req,res) {
    res.render('home',{
        title:'Welcome at Home :)',
        meta: meta.home
    })
};
