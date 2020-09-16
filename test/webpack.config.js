const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const { mode } = argv;
  const isDevelopment = !mode || mode === 'development';

  return {
    mode,
    entry: path.join(__dirname, 'src/index.tsx'),
    output: {
      chunkFilename: isDevelopment
        ? '[name].chunk.js'
        : '[name].[contenthash:4].chunk.js',
      filename: isDevelopment ? '[name].js' : '[name].[contenthash:4].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    devtool: isDevelopment && 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          loader: ['babel-loader', 'eslint-loader'],
        },
        {
          test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf)$/i,
          exclude: [/\.(js|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
          loader: 'file-loader',
          options: {
            name: isDevelopment
              ? '[name].[ext]'
              : '[name].[contenthash:4].[ext]',
          },
        },
      ],
    },
    optimization: {
      minimize: !isDevelopment,
      splitChunks: {
        chunks: 'all',
        name: false,
      },
      runtimeChunk: true,
    },
    resolve: {
      alias: {
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@api': path.resolve(__dirname, 'src/api'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@interfaces': path.resolve(__dirname, 'src/interfaces'),
        '@types': path.resolve(__dirname, 'src/types'),
        'react': path.resolve(__dirname, 'node_modules/react'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
      }),
    ],
    devServer: {
      compress: true,
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      host: 'localhost',
      hot: true,
      open: true,
      progress: true,
      port: '3000',
    },
  };
};
