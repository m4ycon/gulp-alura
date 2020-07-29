const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');

gulp.task('clean', () => {
  return gulp.src('src').pipe(clean());
});

gulp.task(
  'copy',
  gulp.series('clean', () => {
    return gulp.src('dist/**/*').pipe(gulp.dest('src'));
  })
);

gulp.task(
  'build-img',
  gulp.series('copy', () => {
    return gulp.src('src/img/**/*').pipe(imagemin()).pipe(gulp.dest('src/img'));
  })
);
