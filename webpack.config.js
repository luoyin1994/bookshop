const path            = require('path')
let path_dev          = __dirname + '/dev'
let path_dev_pages    = __dirname + '/dev/pages'
let path_out          = __dirname + '/public'
let ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports        = {
    entry  : {
        index: [path_dev + '/style/pack_style.js', path_dev_pages + '/index/pack_style.js',path_dev_pages+'/index/pack_js.js'],
        ajaxIndex: [path_dev + '/style/pack_style.js', path_dev_pages + '/ajaxIndex/pack_style.js',path_dev_pages+'/ajaxIndex/pack_js.js'],
        book: [path_dev + '/style/pack_style.js', path_dev_pages + '/book/pack_style.js',path_dev_pages+'/book/pack_js.js'],
        ajaxBook: [path_dev + '/style/pack_style.js', path_dev_pages + '/ajaxBook/pack_style.js',path_dev_pages+'/ajaxBook/pack_js.js'],
        reader: [path_dev + '/style/pack_style.js', path_dev_pages + '/reader/pack_style.js',path_dev_pages+'/reader/pack_js.js'],
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
            },
            {
                test: /\.css$/,
                use : ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('/[name]/main.min.css'),
    ]

}