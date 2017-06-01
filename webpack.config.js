var path = require('path');


module.exports = {
  devtool: 'inline-sourcemap',
  entry: [
    './index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            // {
            //   loader: 'react-hot-loader'
            // },
            {
              loader: 'babel-loader'
            }
          ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
                includePaths: ['./scss/main.scss'],
                sourceMap: true
            }
          }
        ]
      }
    ]
  }
};
