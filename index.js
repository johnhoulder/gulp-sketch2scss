var through = require('through2');
var gutil = require('gulp-util');
var zip = require('node-zip');
var PluginError = gutil.PluginError;

// Consts
const PLUGIN_NAME = 'gulp-sketch2scss';

function processSketchFile(fileContents) {
    var data = zip(fileContents, {base64: false, checkCRC32: true});

    var filenames = [];
    for(var k in data.files) {
        filenames.push(k);
    }

    console.log(filenames);

    // var stream = through();

    // stream.write(prefixText);

    // return stream;
}

function sketch2scss() {
    return through.obj(function(file, enc, cb) {
        if (file.isNull()) {
            throw new PluginError(PLUGIN_NAME, 'Invalid file passed through.');
        }

        var data = processSketchFile(file.contents);

        cb(null, data);
    });
}

module.exports = sketch2scss;