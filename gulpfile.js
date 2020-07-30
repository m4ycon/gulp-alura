const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');
const htmlReplace = require('gulp-html-replace');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('clean', () => {
  return gulp.src('src').pipe(clean());
});

gulp.task(
  'copy',
  gulp.series('clean', () => {
    return gulp.src('dist/**/*').pipe(gulp.dest('src'));
  })
);

gulp.task('build-img', () => {
  return gulp.src('src/img/**/*').pipe(imagemin()).pipe(gulp.dest('src/img'));
});

gulp.task('concat-js', () => {
  return gulp
    .src(['dist/js/jquery.js', 'dist/js/**/!(jquery)*.js'])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/js'));
});

gulp.task('replace-html', () => {
  return gulp
    .src('dist/**/*.html ')
    .pipe(htmlReplace({ js: 'js/all.js' }))
    .pipe(gulp.dest('src'));
});

gulp.task(
  'default',
  gulp.series('copy', gulp.parallel('build-img', 'concat-js', 'replace-html'))
);
