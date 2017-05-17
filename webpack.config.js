const webpack = require('webpack');

module.exports = {
    
    entry: {
        bundle: './client/src/index.js'
    },

    output: {
        filename: '[name].js',
        path: __dirname + '/public/dist'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                unused: true
            }
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),

    ]
};

process.noDeprecation = true;