const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require ('uglifyjs-webpack-plugin')
OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development': 'production',
    entry:'./src/index.jsx',
    output: {
        filename: './app.js',
        path: __dirname + '/public'        
    },
    devServer: {
        contentBase: './public',
        port: 9000
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            modules: path.resolve(__dirname, './node_modules/'),
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
        }
    },
    optimization: {
        minimizer:[
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
              },
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader, /**Adiciona um arquivo CSS na pasta public */
                    //'style-loader', /**Adiciona CSS a DOM injetando a tag <style> */
                    'css-loader', /**Interpreta @import, url().. */
                    'sass-loader'
                ]
            },{
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },{
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
              }
        ]
    }
 }

 