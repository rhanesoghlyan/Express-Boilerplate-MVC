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
            '<%= project.app %>/**/*.js',
            '<%= project.views.src %>/**/*.ejs',
            '<%= project.styles.css %>/*.css'
        ]
    }
};
