'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');

gulp.task('scripts', function() {
  gulp.src('src/index.js')
    .pipe(concat('ParallaxComponent.min.js'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', function () {
  gulp.watch(['src/**/*.js'], ['scripts']);

});
