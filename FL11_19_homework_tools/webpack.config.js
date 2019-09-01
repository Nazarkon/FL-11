const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry :{
        app:'./src/js/app.js'
    },
    output:{
        filename:'app.js',
        path:path.resolve(__dirname,'./dist/js'),
        publicPath: './dist'
    },
    devServer:{
        overlay:true
    },
    module:{
        rules:[{
            test:/\.js$/,
            loader:'babel-loader',
            exclude:'/node_modules'
        },{
            test:/\.(png|jpg|gif|svg)$/,
            loader:'file-loader',
            options:{
                name:'[name].[ext]'
            }
        },{
            test:/\.scss$/,
            use:[
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader:'css-loader',
                    options: {sourceMap:true}
                },{
                    loader:'postcss-loader',
                    options: {sourceMap:true, config:{path: 'src/js/postcss.config.js'}}
                },
                {
                    loader:'sass-loader',
                    options: {sourceMap:true}
                }
            ]
        },{
            test:/\.css$/,
            use:[
                {
                    loader:'postcss-loader',
                    options: {sourceMap:true, config:{path: 'src/js/postcss.config.js'}}
                }
            ] 
        }]
    },
    devServer:{
        overlay:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            hash:true,
            template:'./src/index.html',
            filename: '../index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'../css/main.css'
        }),
        new CopyWebpackPlugin([
            {
                from: './src/img', to:'../img'
            }
        ])
    ],
}