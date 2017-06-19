'use strict';

module.exports = {
    all: {
        files: [
            {
                expand: true,
                cwd: '.tmp/css/',
                src: ['**/*.css'],
                dest: 'dist/css/'
            },
            {
                expand: true,
                cwd: '.tmp/js/',
                src: ['**/*.js'],
                dest: 'dist/js/'
            },
            {
                expand: true,
                cwd: '.tmp/img/',
                src: ['**/*.{png,jpg,gif,svg}'],
                dest: 'dist/img/'
            },
            {
                expand: true,
                cwd: '<%= project.views.src %>',
                src: ['**/*.ejs'],
                dest: 'dist/views/'
            }
        ],
    }
};
