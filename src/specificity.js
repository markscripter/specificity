var path = require('path')
var cssStats = require('cssstats')
var readFile = require('./util/read-file')
var writeFile = require('./util/write-file')

module.exports = function specificity (FileArray, Options) {
  FileArray = FileArray || []
  Options = Options || {
    dir: false
  }

  FileArray
    .map(file => readFile(file))
    .map(fileObject => Object.create({
      filename: fileObject.filename,
      cssStatsObject: cssStats(fileObject.content)
    }))
    .map(cssInfoObject => writeFile(path.join(Options.dir, path.parse(cssInfoObject.filename).name + '.json'), cssInfoObject.cssStatsObject))
}
