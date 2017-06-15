const express = require('express');
const path = require('path');
const app = express();

app.engine('.html', require('ejs').__express);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/post/'));

app.get('/', function (req, res) {
    res.render('create', {
        title: 'Express',
    });
});

app.listen(8080, () => {
    console.log('Express server listening on port 8080')
});



