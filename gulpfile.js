var gulp = require("gulp"),
    babelify = require('babelify'),
    browserify = require("browserify"),
    connect = require("gulp-connect"),
    source = require("vinyl-source-stream"),
    debug = require('gulp-debug'),
    gutil = require('gulp-util'),
    glob = require('glob');

/** Configuration **/
var files = glob.sync('./src/js/**/*.*');

gulp.task("build", function(){
    return browserify({
        entries: files,
        extensions: [".js", ".jsx"]
    })
    .transform(babelify.configure({
        presets : ["es2015", "react"]
    }))
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./build"))
    ;
});

gulp.task('watch', function(){
  gulp.watch(files, ["build"]);
});
