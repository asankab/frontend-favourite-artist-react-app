const webpack = require('webpack');
const dotenv = require('dotenv');
// this will update the process.env with environment variables in .env file
dotenv.config();
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');

const currentTask = process.env.npm_lifecycle_event;

const config = {
  entry: './src/index.js',
  output: {
    filename: 'build.[fullhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
   })
  ],
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    port: 8080,
    // contentBase: path.resolve(__dirname, 'dist'),
    static: path.resolve(__dirname, 'dist'),
    hot: true
  },
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
      fs: false
    }
  },
  module: {
    rules: [
      {
        // test: /\.scss$/,
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
            loader: 'file-loader',
            options: {}
        }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', 
            { 'useBuiltIns': 'usage', 'corejs': 3, 'targets': 'defaults' }], '@babel/preset-react']
          }
        }
      }
    ]
  }
};

if (currentTask == 'build') {
  config.mode = 'production';
  config.module.rules[0].use[0] = MiniCssExtractPlugin.loader;
  config.plugins.push(
    new MiniCssExtractPlugin({ filename: 'main.[fullhash].css' }), 
    new CleanWebpackPlugin(), 
    new WebpackManifestPlugin());
}

module.exports = config;