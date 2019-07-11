const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

const snippets = "src/snippets/";
const paths = {
  styles: {
    src:  ['src/scss/*.scss', snippets + '**/*.scss'],
    tmp:  'tmp/',
    dest: 'dist/css/'
  },
  js: {
    src:  ['src/js/*.js', snippets + '**/*.js'],
    tmp:  'tmp/',
    dest: 'dist/js/'
  }
}

const sources = paths.styles.src.concat(paths.js.src);

gulp.task('styles', () => {
  return gulp.src(paths.styles.src)
    .pipe(gulp.dest(paths.styles.tmp))
    .pipe(sourcemaps.init())
    .pipe(concat('site.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('js', () => {
  return gulp.src(paths.js.src)
    .pipe(gulp.dest(paths.js.tmp))
    .pipe(sourcemaps.init())
    .pipe(concat('site.js'))
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.js.dest));
});


gulp.task('clean', () => {
    return del([
      paths.styles.tmp, paths.styles.dest, paths.js.tmp, paths.js.dest
    ]);
});

gulp.task('default', gulp.series(['clean', 'js','styles']));

gulp.task('watch', () => {
  gulp.watch(sources, (done) => {
      gulp.series(['clean', 'js','styles'])(done);
  });
});