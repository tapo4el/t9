const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    return {
        entry: "./frontend/js/index.jsx",
        mode: "development",
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: "babel-loader",
                    options: { presets: ["@babel/env"] }
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: argv.mode === 'development',
                            },
                        },
                        "css-loader"
                    ]
                }
            ]
        },
        resolve: { extensions: ["*", ".js", ".jsx"] },
        output: {
            path: path.resolve(__dirname, "public/"),
            publicPath: "/dist/",
            filename: "bundle.js"
        },
        devServer: {
            contentBase: path.join(__dirname, "frontend/"),
            port: 3000,
            publicPath: "http://localhost:3000/dist/",
            hotOnly: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new MiniCssExtractPlugin({filename: 'bundle.css'})
        ]
    }
};
