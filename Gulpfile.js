var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compile-sass', function() {
    gulp.src('static/**/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./frontend/web/css/'));
});

//Watch task
gulp.task('sass-watcher',function() {
    gulp.watch('static/**/sass/**/*.scss',['compile-sass']);
});