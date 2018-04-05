var gulp = require('gulp');
var changed = require('gulp-changed');
var browserSync = require('browser-sync');

var config = require('../../config').scripts;

gulp.task('scripts', function(){
  browserSync.notify('正在更新 JavaScript');

  return gulp.src(config.src)
    .pipe(changed(config.dest))  // 忽略未变化的文件
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.stream());
});
