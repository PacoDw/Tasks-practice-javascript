const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('es6', () =>
    gulp.src('./assets/js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./js'))
);

gulp.task('default', () => {
  gulp.watch('./assets/js/*.js', gulp.series('es6'));
});