var fs = require('fs')

module.exports = function writeFile (filepath, data) {
  return fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf-8', function (err, data) {
    if (err) console.log(err)
    return data
  })
}
