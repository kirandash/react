const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Regexp for All js and jsx files
                exclude: /(node_modules)/,
                loader: 'babel-loader', // A loader transforms modules during bundling eg babel-loader to transpile ES6 and JSX
                options: { presets: ["@babel/env"] }
            }, // First rule is to apply babel-loader for all js and jsx files
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"] // A loader transforms modules during bundling eg css-loader
            } // This rule is to apply style-loader and css-loader to all css files
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] }, // File types to resolve
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()] // A plugin transforms output after bundling in bundled files: viz index.html
};