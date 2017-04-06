# @johnhoulder/gulp-sketch2scss

[![NPM version](https://img.shields.io/npm/v/@johnhoulder/gulp-sketch2scss.svg)](https://www.npmjs.com/package/@johnhoulder/gulp-sketch2scss)
[![Travis build](https://api.travis-ci.org/johnhoulder/gulp-sketch2scss.svg?branch=master)](https://travis-ci.org/johnhoulder/gulp-sketch2scss/builds)
[![Dependencies](https://david-dm.org/johnhoulder/gulp-sketch2scss/status.svg)](https://david-dm.org/johnhoulder/gulp-sketch2scss)
[![Dev dependencies](https://david-dm.org/johnhoulder/gulp-sketch2scss/dev-status.svg)](https://david-dm.org/johnhoulder/gulp-sketch2scss?type=dev)

>Converts Sketch files to SCSS variables and saves to the specified file.


## Usage
First, install `gulp-sketch2scss` as a dev dependency:
`npm install --save-dev gulp-sketch2scss`

Then simply add the following to your gulpfile.

`gulpfile.js`:

```javascript
var gulp        = require('gulp'),
    sketch2scss     = require('gulp-sketch2scss'),

gulp.task("sketch", function() {
    gulp.src('design/design.sketch')
        .pipe(sketch2scss())
        .pipe(gulp.dest("dist/js"));
});

gulp.task("default", "sketch");
```

## License
See the [license](https://github.com/johnhoulder/gulp-sketch2scss/blob/master/license).