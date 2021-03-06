var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry:  "./client/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        port: 8012
    }
};
