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
        tasks: ['concat', 'uglify', 'cssmin', 'jshint'],
    }
};
