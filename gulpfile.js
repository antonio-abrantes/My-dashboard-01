/**
 * Created by Antonio on 18/07/2018.
 */
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('serve', function () {

    browserSync.init({
        server: "./"
    });

    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
    gulp.watch("css/*.css").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);