'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefix = require('gulp-autoprefixer');
let rename = require('gulp-rename');
let sourcemaps = require('gulp-sourcemaps');
let browsersync = require('browser-sync').create();


function style(done) {
	gulp.src('./sass/*.sass')
		.pipe(sass({
			errorLogToConsole: true
		}))
		.on('error', console.error.bind(console))
		.pipe(autoprefix({
			cascade: true
		}))
		.pipe(gulp.dest('./css'))
		.pipe(browsersync.stream());
	done();
}

function browserSync(done) {
	browsersync.init({
		server: {
			baseDir: './'
		},
		port: 3000
	});
	done();
}

function browserReload(done) {
	browsersync.reload();
	done();
}

function watch(){
	gulp.watch('./**/*.sass', style);
	gulp.watch('./**/*.sass', browserReload);
	gulp.watch('./**/*.html', browserReload);
	gulp.watch('./**/*.js', browserReload);
}

gulp.task('default', gulp.parallel(browserSync, watch));