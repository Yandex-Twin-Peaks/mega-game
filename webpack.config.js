const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const config = {
  entry: './src/index.tsx',
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {presets: ['@babel/env', '@babel/preset-react', '@babel/preset-typescript']}
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
            options: {name: 'assets/img/[name].[ext]'}
          }
        ]
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {name: 'assets/svg/[name].[ext]'}
          }
        ]
      },
      {
        test: /\.woff(2)?$/,
        use: {
          loader: 'file-loader-loader',
          options: {name: 'assets/fonts/[name].[ext]'}
        }
      }
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './src/index.html'
    // }),
     new MiniCssExtractPlugin()
  ],
  optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new CssMinimizerPlugin(),
  //     new TerserPlugin({
  //       terserOptions: {
  //         mangle: true,
  //         compress: true,
  //       },
  //       extractComments: false,
  //     })],
  //   splitChunks: {
  //     chunks: 'all',
  //   },
   },
  // devServer: {
  //   hot: true,
  //   compress: true,
  //   allowedHosts: 'all',
  //   static: {
  //     directory: path.join(__dirname, 'dist'),
  //   },
  //   port: 8000,
  //   historyApiFallback: true,
  // },
  performance: {
    hints: false,
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'eval-source-map';
    config.output = {
      path: path.join(__dirname, "/dist"),
      filename: "[name].js"
    }
  }

  if (argv.mode === 'production') {
    config.devtool = false;
    config.output = {
      path: path.join(__dirname, "/public"),
      filename: "main.bundle.js"
    }
  }

  return config;
};
