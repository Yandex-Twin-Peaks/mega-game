const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const hotMiddlewareScript = '@gatsbyjs/webpack-hot-middleware/client?path=/__webpack_hmr';

const isDev = process.env.NODE_ENV === 'development';
const assetsDir = path.join(__dirname, '../dist/assets');

const config = {
  mode: !isDev ? 'production' : 'development',
  entry: [
    isDev && hotMiddlewareScript, './src/index.tsx'
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  output: {
    path: assetsDir,
    filename: 'main.bundle.js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {presets: ['@babel/env', '@babel/preset-react', '@babel/preset-typescript'], plugins: [isDev && 'react-refresh/babel'].filter(Boolean)}
        },
      },
      {
        test: /\.(pcss|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          {
            loader: 'file-loader?limit=10000',
            options: { name: assetsDir + '/img/[name].[ext]' }
          }
        ]
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: assetsDir + '/svg/[name].[ext]' }
          }
        ]
      },
      {
        test: /\.woff(2)?$/,
        use: {
          loader: 'file-loader',
          options: { name: assetsDir + '/fonts/[name].[ext]' }
        }
      }
    ],
  },
  plugins: [
     isDev && new HotModuleReplacementPlugin(),
     isDev && new ReactRefreshPlugin({overlay: {
       sockIntegration: 'whm',
     }}),
    new MiniCssExtractPlugin()
  ].filter(Boolean)
};

module.exports = config
