const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const stylesHandler = 'style-loader';

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html')
    }),
    new Dotenv()
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  resolve: {
    alias: {
      '@Component': path.resolve(__dirname, 'src/component'),
      '@Hooks': path.resolve(__dirname, 'src/hooks'),
      '@Redux': path.resolve(__dirname, 'src/redux'),
      '@Services': path.resolve(__dirname, 'src/services'),
      '@Const': path.resolve(__dirname, 'src/const'),
      '@Utils': path.resolve(__dirname, 'src/utils'),
      '@Assets': path.resolve(__dirname, 'src/assets'),
      '@Pages': path.resolve(__dirname, 'src/pages'),
    },
    "extensions": ['.js', '.jsx', '.json']
  },
};
