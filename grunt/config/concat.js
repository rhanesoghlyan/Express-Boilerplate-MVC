'use strict';

module.exports = {
    script: {
        src: ['<%= project.script.src %>/**/*.js'],
        dest: '<%= project.temp %>/js/script.js'
    },
    css: {
        src: ['<%= project.styles.src %>/**/*.css'],
        dest: '<%= project.temp %>/css/styles.css'
    }
};
