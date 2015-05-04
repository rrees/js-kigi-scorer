var gulp = require('gulp');
var gulpPlugins = require('auto-plug')('gulp');
var jade = require('jade');

gulp.task('default', ['build']);

gulp.task('build', ['jade', 'sass', 'js']);

gulp.task('jade', function() {
    return gulp
        .src('templates/**/*.jade')
        .pipe(gulpPlugins.jade({
            jade: jade,
            pretty: true
            }))
        .pipe(gulp.dest('build/'))
});

gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(gulpPlugins.sass())
        .pipe(gulp.dest('build/css'));
});

gulp.task('js', function() {
    return gulp.src('src/*.js')
        .pipe(gulp.dest('build/js'))
})

gulp.task('deploy', ['build'], function() {
    return gulpPlugins.run('surge build static-angular-template.surge.sh').exec();
});
