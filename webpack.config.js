const path = require('path');
const webpack = require('webpack')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

const ENV = process.env.ENV || 'development'
const baseUrl = './src'
const outputPath = 'build'

module.exports = {
  mode: ENV,

  entry: {
    app: [`${baseUrl}/index.tsx`]
  },
  
  output: {
    path: path.resolve(__dirname, outputPath),
    // publicPath: '/assets/',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: path.join(__dirname, outputPath),
    compress: true,
    port: 9000,
    hot: true,
    open: true,
  },

  devtool: ENV === 'development' ? 'source-map' : undefined,

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.json', 'css'],
    modules: [path.join(__dirname, 'node_modules')],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
        baseUrl,
      }),
    ],
  },

  plugins: [
    new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),

    // Webpack plugin that runs TypeScript type checker on a separate process.
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: './server' },
      ],
    }),
  ],
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-modules-typescript-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]--[hash:base64:5]',
                },
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
};