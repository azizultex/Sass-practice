const gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourceMaps = require('gulp-sourcemaps'),
	autoPrefixer = require('gulp-autoprefixer'),
	cssMin = require('gulp-cssmin');

gulp.task('css', () => {
	gulp.src('sass/style.scss')
	.pipe(sourceMaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(cssMin())
	.pipe(autoPrefixer())
	.pipe(sourceMaps.write())
	.pipe(gulp.dest('./css'));
});

gulp.task('default', () => {
	console.log('Let\'s process CSS styles')
});