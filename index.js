const through = require('through2'),
      gutil = require('gulp-util'),
      zip = require('node-zip'),
      PluginError = gutil.PluginError,
      PLUGIN_NAME = 'gulp-sketch2scss';

function processSketchFile(fileContents) {
    let data = zip(fileContents, {base64: false, checkCRC32: true});

    let filenames = [];

    for(let k in data.files) {
        filenames.push(k);
    }

    console.log(filenames);

    // var stream = through();

    // stream.write(prefixText);

    // return stream;
}

module.exports => () {
    return through.obj(function(file, enc, cb) {
        if (file.isNull()) {
            throw new PluginError(PLUGIN_NAME, 'Invalid file passed through.');
        }

        let data = processSketchFile(file.contents);

        cb(null, data);
    });
};