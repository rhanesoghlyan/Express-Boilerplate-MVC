'use strict';

module.exports = {
    dist: {
        options: {
            style: 'expanded',
            sourcemap: 'none'
        },
        files: {
            '<%= project.styles.src %>/css/main.css': '<%= project.styles.src %>/sass/main.scss',
        }
    }
};
