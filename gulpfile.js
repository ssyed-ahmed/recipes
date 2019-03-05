var gulp = require('gulp'),
	runSequence = require('run-sequence'),
	gulpLoadPlugins = require('gulp-load-plugins'),
	plugins = gulpLoadPlugins(),
	path = require('path'),
	fs = require('fs')

gulp.task('styles', function () {
	gulp.src('src/assets/sass/main.scss')
		.pipe(plugins.sass({ outputStyle: 'expanded'}).on('error', plugins.sass.logError))
		.pipe(plugins.rename(function(file) {
			file.dirname = file.dirname.replace(path.sep + 'sass', path.sep + 'css')
		}))
		.pipe(gulp.dest('src/assets/css'))
		.pipe(plugins.autoprefixer({ browsers: ['last 3 versions'] }))
		.pipe(plugins.rename('styles.dev.css'))
		.pipe(gulp.dest('src/assets/css'))
		.pipe(plugins.cssmin())
		.pipe(plugins.concat('styles.css'))
		.pipe(gulp.dest('src/assets/css'));
})
