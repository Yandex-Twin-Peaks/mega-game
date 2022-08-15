import * as path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  mode: 'production',
  entry: './src/index.tsx',
  target: 'web',
  output: {
    filename: 'client.bundle.js',
    path: path.join(__dirname, '../build/assets/'),
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
            ]
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
            options: { name: '/img/[name].[ext]' }
          }
        ]
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '/svg/[name].[ext]' }
          }
        ]
      },
      {
        test: /\.woff(2)?$/,
        use: {
          loader: 'file-loader',
          options: { name: '/fonts/[name].[ext]' }
        }
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'main.css' })]
};
