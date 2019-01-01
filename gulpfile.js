var gulp        = require('gulp');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var sourcemaps  = require('gulp-sourcemaps');
var livereload  = require('gulp-livereload');

gulp.task('build', function () {
    return browserify({entries: './src/index.js', debug: true})
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(livereload());
});

gulp.task('watch', ['build'], function () {
    livereload.listen({port:8080});
    gulp.watch('./src/*.js', ['build']);
});

gulp.task('default', ['watch']);