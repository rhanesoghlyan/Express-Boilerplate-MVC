const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const configs = require('./config/env');
const express = require('express');
const path = require('path');
const app = express();

app.engine('.html', require('ejs').__express);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, configs.front.viewPath, 'post'));

app.use(cookieParser);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

require(configs.front.router)(app);

app.listen(configs.port, () => {
    console.log('Express server listening on port ', configs.port);
});
