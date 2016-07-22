var fs = require('fs')

module.exports = function readFile (filepath) {
  return {
    filename: filepath,
    content: fs.readFileSync(filepath, 'utf8', function (err, data) {
      if (err) console.log(err)
      return data
    })
  }
}
