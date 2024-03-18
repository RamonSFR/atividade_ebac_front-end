// Executar a compilação do LESS;
// Executar a compressão de código JavaScript;


module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less'])
    grunt.registerTask('build', [
        ''
    ])
}