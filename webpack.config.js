const path = require('path');
const webpack = require('webpack');

module.exports = {
    externals: {
        stompjs: '@stomp/stompjs',
        sockjs: 'sockjs-client',
        bootstrap: 'bootstrap',
        jquery: 'jquery'
    },
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'result/'),
    },

    optimization: {
        minimize: false
    },
    plugins: [
        new webpack.DefinePlugin({
            ENVIRONMENT: JSON.stringify(process.env.NODE_ENV),
            ANOTHER_VARIABLE: JSON.stringify("another variable value"),
        })
    ]
};