var gulp = require('gulp'),
	less = require('gulp-less');
	
	gulp.task('mytask', function() {
    console.log('перевірка');
});

	gulp.task('less', function () {
  return gulp.src('app/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('app/css'));
});