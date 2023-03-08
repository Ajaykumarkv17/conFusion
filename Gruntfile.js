'use strict';

module.exports = function (grunt) {
  // Define the configuration for all the tasks
  grunt.initConfig({
    copy: {
        html: {
            files: [
            {
                //for html
                expand: true,
                dot: true,
                cwd: './',
                src: ['*.html'],
                dest: 'dist'
            }]                
        },
        fonts: {
            files: [
            {
                //for font-awesome
                expand: true,
                dot: true,
                cwd: 'node_modules/font-awesome',
                src: ['fonts/*.*'],
                dest: 'dist'
            }]
        }
    },

    clean: {
        build: {
            src: [ 'dist']
        }
    },
    imagemin: {
        dynamic: {
            files: [{
                expand: true,                  // Enable dynamic expansion
                cwd: './',                   // Src matches are relative to this path
                src: ['img/*.{png,jpg,gif}'],   // Actual patterns to match
                dest: 'dist/'                  // Destination path prefix
            }]
        }
    }
  });
  grunt.registerTask('build',[
        'clean',
        'copy',
        'imagemin'
  ]);
};