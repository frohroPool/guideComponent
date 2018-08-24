const gulp = require('gulp'),
	pug = require('gulp-pug'),
	styl = require('gulp-stylus'),
	babelify = require('babelify'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	// util = require('gulp-util'),
	// cleanCss = require('gulp-clean-css'),
	glob = require('glob');
	//notify = require('gulp-notify');

var env = process.env.SITE_NAME;

gulp.task('es6', function(){
	var destDir = './'+env+'/dest/js';
	var bundleThis = function(srcArray) {
		srcArray.forEach(function(sourcePath) {
				var bundle =	browserify([sourcePath])
											.transform(babelify)
											.bundle();
				var fileName = sourcePath.slice(sourcePath.lastIndexOf('/')+1);
				bundle.pipe(source('bundle-' + fileName ))
							.pipe(buffer())
							// .pipe(uglify())
<<<<<<< HEAD
							//.pipe(notify('ES6 to JS ('+ fileName +') in ('+env+') -> OK'))
=======
							// .pipe(notify('ES6 to JS ('+ fileName +') in ('+env+') -> OK'))
>>>>>>> 687f3eb2eb6899aa56a98b10a02b18a21ef68b87
							.pipe(gulp.dest(destDir));
		});
	};
	glob('./'+env+'/dev/js/product/*.js',function(er,files){
		bundleThis(files);
	});
});

gulp.task('pug', () =>
	gulp.src('./'+env+'/dev/views/product/*.pug')
		.pipe(pug({
			pretty:true
		}))
<<<<<<< HEAD
		//.pipe(notify('PUG to HTML ('+env+') -> OK'))
=======
		// .pipe(notify('PUG to HTML ('+env+') -> OK'))
>>>>>>> 687f3eb2eb6899aa56a98b10a02b18a21ef68b87
		.pipe(gulp.dest('./'+env+'/dest/views/'))
);

gulp.task('styl', () =>
	gulp.src('./'+env+'/dev/styles/product/*.styl')
		// .pipe(styl())
		.pipe(styl({ 
			compress : true 
		}))
<<<<<<< HEAD
		//.pipe(notify('STYL to CSS ('+env+') -> OK'))
=======
		// .pipe(notify('STYL to CSS ('+env+') -> OK'))
>>>>>>> 687f3eb2eb6899aa56a98b10a02b18a21ef68b87
		// .pipe(cleanCss({compatibility: 'ie8'}))
		.pipe(gulp.dest('./'+env+'/dest/css/'))
);

gulp.task('fonts', () =>
	gulp.src('./'+env+'/dev/fonts/*.styl')
		.pipe(styl({ 
			compress : true 
		}))
		.pipe(gulp.dest('./'+env+'/dest/fonts/'))
);

//	All ===============================================================
gulp.task('all', () => {
		gulp.watch('./'+env+'/dev/**/*.*',['pug','styl','es6']);
	}
);
//  HTML ================================================================
gulp.task('html', () => {
		var checkTask = function(srcArray) {
			if(srcArray.length > 0){
				gulp.watch(src,['pug']);
			}else{
				console.log('No existe el sitio ...')
				process.exit(0);
			}
		};
		var src = './'+env+'/dev/views/**/*.pug';
		glob(src,function(er,files){
			checkTask(files);
		});
	}
);
//  CSS ================================================================
gulp.task('css', () => {
		var checkTask = function(srcArray) {
			if(srcArray.length > 0){
				gulp.watch(src,['styl','fonts']);
			}else{
				console.log('No existe el sitio ...')
				process.exit(0);
			}
		};
		var src = './'+env+'/dev/styles/**/*.styl';
		glob(src,function(er,files){
			checkTask(files);
		});
	}
);
//  JS ================================================================
gulp.task('js', () => {
		var checkTask = function(srcArray) {
			if(srcArray.length > 0){
				gulp.watch(src,['es6']);
			}else{
				console.log('No existe el sitio ...')
				process.exit(0);
			}
		};
		var src = './'+env+'/dev/js/**/*.js';
		glob(src,function(er,files){
			checkTask(files);
		});
	}
);