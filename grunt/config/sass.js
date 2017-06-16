module.exports = {
    dist: {
        options: {
            style: 'expanded',
            sourcemap: 'none'
        },
        files: {
            '<%= project.app %>/styles/css/main.css': '<%= project.app %>/styles/sass/style.scss'
        }
    }
};
