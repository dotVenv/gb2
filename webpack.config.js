const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = MiniCssExtractPlugin.loader;



module.exports = {
    mode: 'development',
    entry:{home:'./gb2/gb/static/gb/static/reactjs/pages/index.js',},
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './gb2/gb/static/gb/static/css'),
        },

    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [    
        new MiniCssExtractPlugin(),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
          
          }),

    ],

    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-react'],
                },
              },
            },
            {
              test: /\.(png|jpg|jpeg|gif|svg)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'images/', // Adjust the output path as needed
                  },
                },
              ],
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
            },
          ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
      },
    optimization: {
        usedExports: false,
      },
    
};