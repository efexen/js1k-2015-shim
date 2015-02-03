module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      default: {
        files: {
          'temp/demo.min.js': ['src/demo.js']
        }
      }
    },
    includereplace: {
      default: {
        src: 'src/shim.html',
        dest: 'out/index.html'
      }
    },
    clean: ["temp", "out"],
    jscrush: {
      default: {
        files: {
          'temp/demo.crush.min.js': ['temp/demo.min.js']
        }
      }
    },
    micro: {
      options: {
        limit: 1024,
        gzip: false
      },
      src: 'temp/demo.crush.min.js'
    },
    open: {
      default: {
        path: 'out/index.html'
      }
    },
    watch: {
      files: ['src/demo.js', 'src/shim.html'],
      tasks: ['build']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jscrush');
  grunt.loadNpmTasks('grunt-micro');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('build', ['clean', 'uglify', 'jscrush', 'micro', 'includereplace']);
  grunt.registerTask('default', ['build', 'open', 'watch']);
};
