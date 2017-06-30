'use strict';

module.exports = {
    files: [
        '*.js', 'grunt/config/*.js',
        '<%= project.app %>/**/*.js',
        'endpoints/**/*.js',
        'core/**/*.js',
        'config/**/*.js'
    ],
    options: {
        jshintrc: '.jshintrc'
    }
};
