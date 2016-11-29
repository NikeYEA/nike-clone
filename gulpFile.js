var gulp = require('gulp');
var concat = require("gulp-concat");
var annotate = require("gulp-ng-annotate");
var css = require("gulp-css");
var nodemon = require('gulp-nodemon');

var paths = {
    jsSource: ['public/app/**/*.js'],
    cssSource: ['public/app/**/*.css'],
    server: ["./server/index.js"]
};

// gulp.task('serve', function() {
//     nodemon({
//         'script': paths.server
//     });
// });

gulp.task('css', function() {
    gulp.src(paths.cssSource)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('js', function() {
    gulp.src(paths.jsSource)
        .pipe(annotate())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('watch', function() {
    gulp.watch(paths.jsSource, ['js']);
    gulp.watch(paths.cssSource, ['css']);
});

gulp.task('default', ['js', 'css', 'watch']);
