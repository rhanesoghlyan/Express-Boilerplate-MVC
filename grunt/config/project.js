'use strict';

const appPath = ('../../package.json').appPath || 'public';
const path = require('path');

module.exports = {
    app: appPath,
    styles: {
        src: path.join(appPath, 'styles/css')
    },
    dist: 'dist',
    script: {
        src: path.join(appPath, 'js')
    },
    views: {
        src: 'views'
    },
    temp: {
        src: '.tmp'
    }
};