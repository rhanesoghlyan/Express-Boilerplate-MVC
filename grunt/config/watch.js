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
            '<%= project.app %>/js/*.js',
            '<%= project.views.src %>/**/*.ejs',
            '<%= project.styles.css %>/*.css'
        ],
        tasks: ['jshint'],
    },
    sass: {
        files: ['<%= project.app %>/styles/sass/*.scss'],
        tasks: ['sass'],
    },
};
