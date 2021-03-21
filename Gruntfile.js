module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/js/main.js',
                dest: 'mjt/js/main-min.js'
            }
        }
    });
    // 加载uglify的任务插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // 默认被执行的任务列表
    grunt.registerTask('default',['uglify'])
}