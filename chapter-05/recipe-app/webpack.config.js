var webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: "dist/assets",
        filename: "bundle.js",
        sourceMapFilename: 'bundle.map'
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader','autoprefixer-loader']
            }
        ]
    },
    plugins: [

        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),

        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: false
        })
    ]
}
