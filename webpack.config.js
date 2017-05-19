const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: {
    bundle: './client/src/render.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './public/dist'),
  },

  devtool: '#inline-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [[
            'env', {
              targets: {
                browsers: ['last 2 versions', '> 10%', 'ie 9'],
                modules: false,
              },
            },
          ],
            'react',
          ],
        },
      },
    ],
  },

  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
        /*
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false,
                        unused: true
                    }
                }),
        */
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),

  ],
};

process.noDeprecation = true;
