'use strict';

module.exports = {
    dist: {
        files: {
            src: [
                '<%= project.temp.src %>',
                '<%= project.dist %>'
            ]
        }
    }
};
