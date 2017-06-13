'use strict';

const appPath = ('../../package.json').appPath || 'server';
const path = require('path');
const feAssets = path.join(appPath, 'public', 'front', 'src');

module.exports = {
    app: appPath,
    styles: {
        src: path.join(feAssets, 'styles/css')
    },
    script: {
        src: path.join(feAssets, 'js')
    },
    views: {
        src: path.join(feAssets, 'views')
    }
};
