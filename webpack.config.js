const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env, argv) => ({
    entry: ['babel-polyfill', './frontend/js/index.jsx'],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env'] },
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
                    'css-loader',
                ],
            },
        ],
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'public/'),
        publicPath: '/dist/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'frontend/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({ filename: 'bundle.css' }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        // new BundleAnalyzerPlugin()
    ],
    optimization: {
        minimize: argv.mode === 'production',
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
});
