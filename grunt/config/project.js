'use strict';

const appPath = ('../../package.json').appPath || './index.js';
const path = require('path');
const feAssets = path.join(appPath, 'public');

module.exports = {
    app: appPath,
    styles: {
        src: path.join(feAssets, 'styles/css')
    },
    script: {
        src: path.join(feAssets, 'js')
    },
    views: {
        src: './views'
    }
};
