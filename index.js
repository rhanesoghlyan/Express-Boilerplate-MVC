const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const configs = require('./config/env');
const i18n= require('i18n-express');
const express = require('express');
const path = require('path');
const app = express();

app.engine('.html', require('ejs').__express);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, configs.front.viewPath, 'post'));

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use( i18n({
    translationsPath: path.join(__dirname, 'i18n', 'locales'),
    siteLangs: ['en'],
    browserEnable: false,
    defaultLang: process.env.LNG || 'en'
}) );

require(configs.front.router)(app);

app.listen(configs.port, () => {
    console.log('Express server listening on port ', configs.port);
});
