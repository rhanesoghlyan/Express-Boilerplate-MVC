'use strict';

module.exports = {
    express: {
        files: [
            '<%= project.app %>/**/*.js',
            '<%= project.views.src %>/**/*.ejs',
            '<%= project.styles.css %>/*.css'
        ],
        tasks: ['express:dev'],
        options: {
            spawn: false
        }
    }
};
