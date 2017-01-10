var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {

  devServer: {

    inline: true,
    contentBase: './dist',
    port: 3000

  },
  entry: './src/js/app.js',
  output: {

    path: './dist',
    filename: 'js/app.bundle.js'

  },
  module: {

    loaders: [

      {

        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']

      },
      {

        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']

      }

    ]

  },
  plugins: [

    new CopyWebpackPlugin([

      {

        from: 'src/index.html'

      }

    ])

  ]

};