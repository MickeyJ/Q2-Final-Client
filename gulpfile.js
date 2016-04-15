var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    streamify = require('gulp-streamify'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    sass    = require('gulp-sass');

// gulp.task('connect', function() {
//   connect.server({
//     root: 'public/',
//     port: 8080,
//     livereload: true,
//     fallback: 'public/index.html'
//   });
// });
//
// gulp.task('html', function () {
//   gulp.src('./public/**/*.html')
//     .pipe(connect.reload());
// });

// //          JS/ES2015
// // ***********************
// gulp.task('scripts', () =>{
//   browserify({
//     entries: 'src/js/',
//     extensions: ['.js'],
//     debug: true
//   })
//     .transform(babelify, { presets: ['es2015'] })
//     .bundle()
//     .pipe(source('scrip.js'))
//     .pipe(streamify(uglify()))
//     .pipe(gulp.dest('public/javascripts'));
// });

gulp.task('sass', () =>{
  gulp.src('src/scss/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('watch', () =>{
  // gulp.watch('public/**/*.html', ['html']);
  // gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);