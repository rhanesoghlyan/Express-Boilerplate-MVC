'use strict';

module.exports = {
    html: ['<%= project.dist %>/**/*.ejs'],
    css: ['<%= project.dist %>/**/*.css'],
    options: {
        assetsDirs: ['<%= project.dist %>']
    }
};
