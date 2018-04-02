var gulp      = require('gulp');
var postcss   = require('gulp-postcss');
var stylelint = require('stylelint');
var reporter  = require('postcss-reporter');
var config    = require('../../config').stylesLint;

gulp.task('styles-lint', function() {
  return gulp.src(config.src)
  .pipe(postcss([
    stylelint(config.options.stylelint),
    reporter(config.options.reporter)
  ]));
});
