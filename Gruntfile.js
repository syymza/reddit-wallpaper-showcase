module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jscs: {
      app: "app/lib/**/*.js",
      tests: "tests/**/*.js",
      options: {
        config: "./.jscsrc",
        esnext: true
      }
    },

    watch: {
      files: ['app/lib/**/*.js', 'tests/**/*.js'],
      tasks: ['jscs'],
      options: {
        spawn: false
      }
    }

  });

  grunt.loadNpmTasks("grunt-jscs");
  grunt.loadNpmTasks('grunt-contrib-watch');
};