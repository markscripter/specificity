var path = require('path')
var cssStats = require('cssstats')
var readFile = require('./util/read-file')
var writeFile = require('./util/write-file')

/**
 * specificity
 *
 * @param FileArray (array) - An array of the file(s) that need to be reviewed
 * @param Options (object) - An object of different settings for the file(s)
 * @returns Stats (object) - An object of the stats found from the file(s)
 */
module.exports = function specificity (FileArray, Options) {
  FileArray = FileArray || []
  Options = Options || {}

  FileArray
    .map(file => readFile(file))
    .map(fileObject => {
      return {
        filename: fileObject.filename,
        cssStatsObject: cssStats(fileObject.content)
      }
    })
    .map(cssInfoObject => {
      writeFile(path.parse(cssInfoObject.filename).name + '.json', cssInfoObject.cssStatsObject)
    })
}
