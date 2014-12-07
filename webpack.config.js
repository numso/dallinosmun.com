var webpack = require('webpack');

module.exports = {

  plugins: [
    new webpack.NormalModuleReplacementPlugin(/^react$/, 'react/addons')
  ],

  entry: './client/app/index.jsx',

  output: {
    path: './client/build',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.es6.js', 'index.js', 'index.jsx', 'index.es6.js', '.css', '.styl']
  },

  module: {
    loaders: [
      { test: /\.jsx$/,     loader: '6to5'             },
      { test: /\.es6\.js$/, loader: '6to5'             },
      { test: /\.css$/,     loader: 'style!css'        },
      { test: /\.styl$/,    loader: 'style!css!stylus' }
    ]
  }
};
