'use strict';

module.exports = {
    all:{
        options: {
            progressive: true,
            optimizationLevel: 3,
            svgoPlugins: [{removeViewBox: false}],
        },
        files: [{
            expand: true,
            cwd: '<%= project.app %>/img',
            src: ['**/*.{png,jpg,gif,svg}'],
            dest: '<%= project.temp.src %>/img/'
        }]
    }
};
