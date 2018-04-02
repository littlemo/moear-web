var gulp = require('gulp');
var changed = require('gulp-changed');
var browsersync = require('browser-sync');
var config = require('../../config').relyonJS;

/**
 * 拷贝变化的额外脚本依赖文件(相关库)到构建目录下
 */
gulp.task('relyon-js', function() {
  browsersync.notify('正在更新额外的JS依赖脚本');

  return gulp.src(config.src)
    .pipe(changed(config.dest))  // 忽略未变化的文件
    .pipe(gulp.dest(config.dest))
    .pipe(browsersync.stream());
});
