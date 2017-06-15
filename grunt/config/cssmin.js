'use strict';

module.exports = {
    dist: {
        src: ['.<%= project.temp.src %>/css/styles.css'],
        dest: '<%= project.temp.src %>/css/styles.min.css'
    }
};
