const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('build-img', () => {
  gulp.src('src/img/**/*').pipe(imagemin()).pipe(gulp.dest('src/img'));
});
