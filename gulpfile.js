const
    gulp = require('gulp'), 
    stylus = require('gulp-stylus'),
    autoprefixer = require('gulp-autoprefixer'),
    
    src = {
        stylus: './css/**/*.styl',
        css_input: './css/style.styl',
        css_output: './public',
        prefix: ['last 2 versions', 'Firefox > 20', '> 5%']
    };

gulp.task('stylus', function () {
  return gulp.src([src.css_input])
    .pipe(stylus({
      compress: true
    }))
    .pipe(autoprefixer({
        browsers: src.prefix,   
        cascade: false
    }))
    .pipe(gulp.dest(src.css_output));
});

gulp.task('watch', function() {
	gulp.watch([src.stylus], ['default']);
});

gulp.task('default', ['stylus']);
