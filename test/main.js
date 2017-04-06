var should = require('should'),
    sketch2scss = require('../'),
    fs = require('fs'),
    File = require('vinyl');

describe('gulp-sketch2scss', function() {
    describe('colour extraction', function() {
        it('should extract colours', function() {
            var file = new File({
                path: 'test/fixtures/test.sketch',
                cwd: 'test/',
                base: 'test/fixtures',
                contents: fs.readFileSync('test/fixtures/test.sketch')
            });

            var stream = sketch2scss();

            stream.on('data', function(data) {
                // should.exist(newFile);
                // should.exist(newFile.contents);

                String(data.read().toString()).should.equal(fs.readFileSync('test/expected/sketch.scss', 'utf8'));
            });

            stream.write(file);
            stream.end();
        });
    });
});