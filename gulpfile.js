'use strict';

//dependencies

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var changed = require('gulp-changed');

var Files = {

    html : './index.html',
    css_dest : './css/',
    scss : './sass/default.scss'

};



//compile SCSS
gulp.task('sass', function(){

    gulp.src(Files.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min'}))
        .pipe(changed(Files.css_dest))
        .pipe(gulp.dest(Files.css_dest));

});

//detect changes

gulp.task('watch_scss', function() {
    gulp.watch(Files.scss, ['sass']);
});

//run tasks

gulp.task('default', ['watch_scss']);
