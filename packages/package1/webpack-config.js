var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ],
        query: {
          presets: ['es2015', 'stage-0'],
        }
      }
    ]
  },
  resolve: {
    // alias: {
    //   '@joachim/package': path.join(__dirname, '../package/dist/bundle.js')
    // }
  }
}
