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
                test: /src\/index.js$/,
                use: [{
                    loader: 'webpack-rollup-loader',
                    options: {
                        external: [/* modules that shouldn't be rollup'd */]
                    },
                }]
            },
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