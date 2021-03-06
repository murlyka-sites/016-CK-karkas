var gulp				= require('gulp'),
svgSprite				= require('gulp-svg-sprite'),

// More complex configuration example
config					= {
	shape				: {
		dimension		: {			// Set maximum dimensions
			maxWidth	: 32,
			maxHeight	: 32
		},
		spacing			: {			// Add padding
			padding		: 10
		},
		dest			: 'images/sprite/intermediate-svg'	// Keep the intermediate files
	},
	mode				: {
		view			: {			// Activate the «view» mode
			bust		: false,
			render		: {
				scss	: true		// Activate Sass output (with default options)
			}
		},
		symbol			: true		// Activate the «symbol» mode
	}
};
// gulp.task('default', function() {
  return gulp.src('images/sprite/source/*.*', {cwd: 'h/to/assets'})
  	.pipe(svgSprite(config))
  	.pipe(gulp.dest('images/sprite'));
// });
