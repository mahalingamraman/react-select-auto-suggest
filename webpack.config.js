var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: { path: __dirname+'/build/', filename: 'bundle.js' },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development')
        }
      })
    ],
    module: {
        loaders: [
              {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['es2015', 'react']
                }
            },
            {
              test: /\.scss$/,
              use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
              ]
            }
        ]
    }
};
