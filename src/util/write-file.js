var fs = require('fs')
var path = require('path')
var mkdirp = require('mkdirp')

function validateDirectory (filepath) {
  return new Promise(function (resolve, reject) {
    mkdirp(path.parse(filepath).dir, function (err) {
      if (err) reject(err)
      resolve()
    })
  })
}

module.exports = function writeFile (filepath, data) {
  return validateDirectory(filepath)
  .then(function () {
    return fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf-8', function (err) {
      if (err) console.log(err)
      return {filepath: filepath, data: data}
    })
  })
  .catch(function (err) {
    console.log(err)
  })
}
