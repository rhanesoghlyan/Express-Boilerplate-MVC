'use strict';

module.exports = {
    target: {
        files: [{
            expand: true,
            cwd: '<%= project.temp %>/css',
            src: ['*.css', '!*.min.css'],
            dest: '<%= project.temp %>/css',
            ext: '.min.css'
        }]
    }
};
