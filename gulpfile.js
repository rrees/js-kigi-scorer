var gulp = require('gulp');
var gulpPlugins = require('auto-plug')('gulp');
var jade = require('jade');

gulp.task('default', ['deploy']);

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

gulp.task('js', ['ts', 'jsx', 'bundle']);

gulp.task('ts', function() {
    return gulp.src('src/*.ts')
        .pipe(gulpPlugins.typescript({
            declarationFiles: true,
            noExternalResolve: true,
            module: 'commonjs'
        }))
        .pipe(gulp.dest('lib'))
});

gulp.task('jsx', function() {
    return gulp.src('src/*.jsx')
        .pipe(gulpPlugins.react())
        .pipe(gulp.dest('lib'))
})

gulp.task('bundle', function() {
    return gulp.src('lib/app.js')
        .pipe(gulpPlugins.browserify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('deploy', ['build'], function() {
    return gulpPlugins.run('surge build rrees-kigi-scorer.surge.sh').exec();
});
