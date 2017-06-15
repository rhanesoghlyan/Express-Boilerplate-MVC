'use strict';

module.exports = {
    script: {
        src: ['<%= project.app %>/js/*.js'],
        dest: '<%= project.temp.src %>/js/script.js'
    },
    css: {
        src: ['<%= project.app %>/styles/css/*.css'],
        dest: '<%= project.temp.src %>/css/styles.css'
    }
};
