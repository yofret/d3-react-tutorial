module.exports = {
  devtool: 'inline-sourcemap',
  entry: [
    './index.js',
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
  ],
  output: {
    path: '/public/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel',
          'babel-loader'
        ]
      },
      {
        loaders: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
        test: /\.scss$/
      }
    ]
  }
};
