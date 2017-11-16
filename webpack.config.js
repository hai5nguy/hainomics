module.exports = {
    entry: './index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/build/static',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader'
            }
        ]
    }
}