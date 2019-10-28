const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: './main.js',
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true,
  },

  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      constants: path.resolve(__dirname, 'src/constants/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      actions: path.resolve(__dirname, 'src/actions/'),
      selectors: path.resolve(__dirname, 'src/selectors/'),
      api: path.resolve(__dirname, 'src/api/'),
      sagas: path.resolve(__dirname, 'src/sagas/'),
      reducers: path.resolve(__dirname, 'src/reducers/'),
      error: path.resolve(__dirname, 'src/error/')
    }
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
