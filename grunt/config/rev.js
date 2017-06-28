'use strict';

module.exports = {
    dist: {
        files: {
            src: ['<%= project.dist %>/js/{,*/}*.js',
                '<%= project.dist %>/css/{,*/}*.css']
        }
    }
};
