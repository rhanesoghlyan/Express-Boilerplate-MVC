'use strict';

const appPath = ('../../package.json').appPath || 'server/public';
const path = require('path');

module.exports = {
    app: appPath,
    temp: '.tmp',
    dist: 'dist',
    styles: {
        src: path.join(appPath, 'front', 'styles')
    },
    script: {
        src: path.join(appPath, 'front', 'js'),
    },
    views: {
        src: path.join(appPath, 'front', 'views'),
    },
    img: {
        src: path.join(appPath, 'front', 'img')
    }
};
