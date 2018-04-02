var gulp = require('gulp');
var config = require('../../config').watch;

/**
 * 开启 browsersync 任务，监听文件变化
 */
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.html, ['html']);
});
