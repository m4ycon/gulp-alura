const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');
const htmlReplace = require('gulp-html-replace');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const usemin = require('gulp-usemin');
const cssmin = require('gulp-cssmin');

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

gulp.task('usemin', () => {
  return gulp
    .src('dist/**/*.html')
    .pipe(usemin({ js: [uglify], css: [cssmin] }))
    .pipe(gulp.dest('src'));
});

gulp.task('default', gulp.series('copy', gulp.parallel('build-img', 'usemin')));
