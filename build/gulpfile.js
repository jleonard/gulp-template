var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var recess = require('gulp-recess');
var less = require('gulp-less');

gulp.task('lint', function() {
  gulp.src('../src/js/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(stylish));
});

gulp.task('less', function() {
gulp.src('../src/less/main.less')
    .pipe(recess())
    .pipe(less())
    .pipe(gulp.dest('../dist'));
});

// The default task (called when you run `gulp`)
gulp.task('default', function() {
  gulp.run('lint','less');

  // Watch files and run tasks if they change
  gulp.watch('../src/js/**', function() {
    gulp.run('lint');
  });

  gulp.watch('../src/less/**', function() {
    gulp.run('less');
  });

});