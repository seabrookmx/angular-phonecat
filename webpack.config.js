module.exports = {
    // Should make another "prod" config that swaps these
    mode: 'development',
    devtool: 'inline-source-map',
    //
    entry: "./app/app.js",
    output: {
        path: __dirname + "/app/dist",
        filename: "./bundle.js"
    },
    resolve: {
        extensions: [".js"]
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]   //  <=  Order is very important
          },
          // for bootstrap font support:
          {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
          {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
          {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
          {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" }
        ]
    }
};