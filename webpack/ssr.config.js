const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const configSSR = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/App.tsx',
  target: 'node',
  resolve: { extensions: ['.js', '.ts', '.tsx'], },
  output: {
    filename: 'ssr.bundle.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/preset-react', '@babel/preset-typescript'],
          }
        },
      },
      {
        test: /\.(pcss|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { postcssOptions: { plugins: [['autoprefixer', ], ], }, },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          {
            loader: 'file-loader?limit=10000',
            options: { name: 'assets/img/[name].[ext]' }
          }
        ]
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/svg/[name].[ext]' }
          }
        ]
      },
      {
        test: /\.woff(2)?$/,
        use: {
          loader: 'file-loader-loader',
          options: { name: 'assets/fonts/[name].[ext]' }
        }
      }
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  externals:
[nodeExternals()],
};

module.exports = configSSR;
