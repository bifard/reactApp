const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {DefinePlugin} = require('webpack')
/* const {CleanWebpackPlugin} = require('clean-webpack-plugin') */

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;
/* const DEV_PLUGINS = [] */
/* const COMMON_PLUGINS = [new DefinePlugin({'process.env.CLIENT_ID' : "'atrPvb5a7ujy5s8xNpAB0w'"})] */

function setupDevtool() {
  if(IS_DEV) return 'eval';
  if(IS_PROD) return false;
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  }, 
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', {
            loader:  'css-loader',
            options: {
              modules: {
                mode: 'local', 
                localIdentName: '[name]__[local]--[hash:base64:5]',
              }
            }
          }
        ],
        exclude: GLOBAL_CSS_REGEXP
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'index.html')}),
    new DefinePlugin({'process.env.CLIENT_ID' : `'${process.env.CLIETN_ID}'`} )
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: IS_DEV
  },
  devtool: setupDevtool()
}