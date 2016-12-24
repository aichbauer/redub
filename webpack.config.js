module.exports = {
	entry: './src/js/app.js',
  output: {

      path: './dist/js',
			filename: 'app.bundle.js'

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
				loader: ['style-loader', 'css-loader', 'sass-loader']

			}
    ]
  }
};