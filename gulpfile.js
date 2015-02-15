var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('compile-sass', function() {
    return gulp.src('sass/main.scss')
        .pipe(sass({ bundleExec: true }))
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('public/styles'))
});

gulp.task('watch-sass', function () {
    gulp.watch('sass/**/*.scss', ['compile-sass']);
});

gulp.task('sass', ['compile-sass', 'watch-sass']);
