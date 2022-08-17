import * as path from 'path';
import { HotModuleReplacementPlugin } from 'webpack';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  mode: 'development',
  entry: ['@gatsbyjs/webpack-hot-middleware/client?path=/__webpack_hmr', './src/components/index.tsx'],
  target: 'web',
  output: {
    filename: 'client.bundle.js',
    path: path.join(__dirname, '../dist/assets/'),
    publicPath: '/assets/'
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx'
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            plugins: ['react-refresh/babel']
          }
        }
      },
      {
        test: /\.(pcss|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { postcssOptions: { plugins: [['autoprefixer',],], }, },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          {
            loader: 'file-loader?limit=10000',
            options: { name: '/assets/img/[name].[ext]' }
          }
        ]
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '/assets/svg/[name].[ext]' }
          }
        ]
      },
      {
        test: /\.woff(2)?$/,
        use: {
          loader: 'file-loader',
          options: { name: '/assets/fonts/[name].[ext]' }
        }
      }
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshPlugin({ overlay: { sockIntegration: 'whm' } }),
    new MiniCssExtractPlugin({ filename: 'assets/main.css' })
  ]
};
