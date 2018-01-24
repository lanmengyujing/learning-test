const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        'bundle': './src/index.js',
        'bundle.min': './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin({
            include: /\.min\.js$/,
            sourceMap: true
        })
    ]
};