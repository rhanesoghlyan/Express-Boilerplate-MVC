'use strict';

module.exports = {
    target: {
        files: [{
            expand: true,
            cwd: '<%= project.temp.src %>/css',
            src: ['*.css', '!*.min.css'],
            dest: '<%= project.temp.src %>/css',
            ext: '.min.css'
        }]
    }
};