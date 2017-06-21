const configs = require('./common/config/env');
const express = require('express');
const path = require('path');
const app = express();

app.engine('.html', require('ejs').__express);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, configs.front.viewPath,'post'));

app.get('/',  (req, res) =>{
    res.render('create', {
        title: 'Express',
    });
});

app.listen(configs.port, () => {
    console.log('Express server listening on port ', configs.port);
});
