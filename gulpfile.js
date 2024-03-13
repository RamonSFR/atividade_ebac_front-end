const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

function compilaSass() {
    return gulp.src('./src/styles/main.scss')
     .pipe(sourcemaps.init())
     .pipe(sass({
         outputStyle: 'compressed'
     }))
     .pipe(sourcemaps.write())
     .pipe(gulp.dest('./build/styles'));
}

function dizOi() {
    console.log('oi')
}

function comprimeJavascript() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}

function comprimeImagens() {
    return gulp.src('./src/images/**')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}




exports.default = function () {
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavascript));
    gulp.watch('./src/images/**', {ignoreInitial: false}, gulp.series(comprimeImagens));
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
}