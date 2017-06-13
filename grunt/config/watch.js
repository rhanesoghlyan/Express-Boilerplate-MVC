'use strict';

module.exports = {
    express: {
        files: [
            '<%= project.app %>/**/*.js',
            '<%= project.app %>/node_modules/**/*.js',
            '<%= project.views.src %>/**/*.ejs'
        ],
        tasks: ['express:dev'],
        options: {
            spawn: false
        }
    }
};