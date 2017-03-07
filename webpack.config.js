const path            = require('path')
let path_dev          = __dirname + '/dev'
let path_dev_pages    = __dirname + '/dev/pages'
let path_out          = __dirname + '/public'
let ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports        = {
    entry  : {
        index: [path_dev + '/style/pack.js', path_dev_pages + '/index/pack.js',],
    },
    output : {
        filename: '/[name]/bundle.js',
        path    : path_out
    },
    module : {
        rules: [
            {
                test: /\.styl$/,
                use : ExtractTextPlugin.extract({
                    use: 'css-loader!stylus-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('/[name]/main.min.css'),
    ]
}