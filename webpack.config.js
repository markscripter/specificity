const path = require('path')

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'specificity.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
}
