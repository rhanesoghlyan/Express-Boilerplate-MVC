const express=require('express');
const path=require('path');

module.exports={
    appStart:function (app) {
        app.set('view engine', 'ejs');
        app.set('views',path.join(__dirname,'public/front/src/views/'));

        app.get('/', function(req, res){

            res.render('home', {
                title: 'Express',
            });
        });
        app.listen(8080,function () {
            console.log('Express server listening on port 8080')
        });
    }
}