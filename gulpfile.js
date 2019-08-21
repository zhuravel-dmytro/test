var gulp = require('gulp'),
	path = require('path'),
  less = require('gulp-less'),
  watch = require('gulp-watch');
 
	
	gulp.task('test', function() {

console.log('працює');

});

	gulp.task('less', function () {
  return gulp.src('app/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function () {
  // Endless stream mode
  return watch('app/less/**/*.less', { ignoreInitial: false })
      .pipe(gulp.dest('build'));
});