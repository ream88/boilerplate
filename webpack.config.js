const path = require('path')

module.exports = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  context: path.resolve(__dirname, 'src'),
  entry: {
    'index': './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-preset-env')(),
                require('postcss-nested')
                // require('cssnano')
              ]
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      }
    ]
  },
  serve: {
    hotClient: {
      allEntries: true
    }
  }
}
