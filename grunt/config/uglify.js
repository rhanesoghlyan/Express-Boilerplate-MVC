'use strict';

module.exports = {
    dist: {
        src: ['<%= project.temp.src %>/js/script.js'],
        dest: '<%= project.temp.src %>/js/script.min.js'
    }
};
