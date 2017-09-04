const gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourceMaps = require('gulp-sourcemaps'),
	autoPrefixer = require('gulp-autoprefixer'),
	cssMin = require('gulp-cssmin')

	// js required 
	uglify = require('gulp-uglify');

	//CSS task
	gulp.task('css', () => {
		return gulp.src(['sass/style.scss'])
		.pipe(sourceMaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(cssMin())
		.pipe(autoPrefixer())
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('./css'));
	});

	// JS task
	gulp.task('js', () => {
		return gulp.src([
			'./node_modules/jquery/dist/jquery.min.js',
			'./src/js/admin.js',
			'./src/js/magic.js'
		])
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
	});

	// watch task
	gulp.task('watch', () => {
		gulp.watch(['./src/sass/*.scss'], ['css']);
		gulp.watch(['./src/js/*.js'], ['js']);
	});

	// Default task
	gulp.task('default', ['css', 'js', 'watch']);