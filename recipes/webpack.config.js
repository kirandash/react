const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'), // Defines the root of the project - which is src
    entry: './index.js', // starting point of app (src/index.js)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    }, // output path and file name after processing entry file with loader and plugins (dist/bundle.js)
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader', // A loader transforms modules during bundling eg babel
                query: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src') + '/index.html',
            inject: 'body'
        })
    ] // A plugin transforms output eg htmlwebpackplugin for creating bundle.js and index.html files
}