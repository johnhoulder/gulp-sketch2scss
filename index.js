const through = require('through2'),
      gutil = require('gulp-util'),
      zip = require('node-zip'),
      PluginError = gutil.PluginError,
      PLUGIN_NAME = 'gulp-sketch2scss';

function processSketchFile(fileContents) {
    let data = zip(fileContents, {base64: false, checkCRC32: true});
    let newContents = '';

    for(let k in data.files) {
        if(k.indexOf('pages/') >= 0) {
            let page = JSON.parse(data.files[k]._data);

            if(page.name === 'Symbols') {
                page.layers.forEach((rootLayer) => {
                    if(rootLayer.name.indexOf('color/') >= 0) {
                        if(rootLayer.layers[0].style.fills !== undefined) {
                            let colors = rootLayer.layers[0].style.fills[0].color;

                            let r = colors.red.toFixed(2),
                                g = colors.green.toFixed(2),
                                b = colors.blue.toFixed(2),
                                a = colors.alpha.toFixed(2);

                            let fstring = '$' + rootLayer.name.replace(/\//g, '_') + ': rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ');';

                            newContents += fstring + '\n';
                        }
                    }
                });
            }
        }
    }

    let stream = through();

    stream.write(newContents);

    return stream;
}

module.exports = () => {
    return through.obj(function(file, enc, cb) {
        if (file.isNull()) {
            throw new PluginError(PLUGIN_NAME, 'Invalid file passed through.');
        }

        let data = processSketchFile(file.contents);

        cb(null, data);
    });
};