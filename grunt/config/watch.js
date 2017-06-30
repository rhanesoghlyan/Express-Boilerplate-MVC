'use strict';

module.exports = {
    options: {
        livereload: true
    },
    express: {
        options: {
            spawn: false,
        },
        files: [
            '<%= project.styles.src %>/**/*.css',
            '<%= project.script.src %>/**/*.js',
            '<%= project.views.src %>/**/*.ejs',
            '<%= project.app %>/**/*.js',
            '<%= project.app %>/**/*.ejs',
            '<%= project.app %>/**/*.css'
        ],
        tasks: ['jshint'],
    },
    sass: {
        files: ['<%= project.styles.src %>/sass/*.scss'],
        tasks: ['sass'],
    },
};
