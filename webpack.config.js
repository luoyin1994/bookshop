const path            = require('path')
let path_dev          = __dirname + '/dev'
let path_dev_pages    = __dirname + '/dev/pages'
let path_out          = __dirname + '/public'
let ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports        = {
    entry  : {
        index : [path_dev + '/style/pack_style.js', path_dev_pages + '/index/pack_style.js', path_dev_pages + '/index/pack_js.js'],
        book  : [path_dev + '/style/pack_style.js', path_dev_pages + '/book/pack_style.js', path_dev_pages + '/book/pack_js.js'],
        reader: [path_dev + '/style/pack_style.js', path_dev_pages + '/reader/pack_style.js', path_dev_pages + '/reader/pack_js.js'],
        channel_module1  : [
            path_dev + '/style/pack_style.js',
            path_dev_pages + '/channel/module1/pack_style.js',
            path_dev_pages + '/channel/module1/pack_js.js',
            path_dev + '/common-include/pack_style.js',
        ],
        channel_catalog  : [
            path_dev + '/style/pack_style.js',
            path_dev_pages + '/channel/catalog/pack_style.js',
            path_dev_pages + '/channel/catalog/pack_js.js',
            path_dev + '/common-include/pack_style.js',
        ],
    },
    output : {
        filename: '/[name]/bundle.min.js',
        path    : path_out
    },
    module : {
        rules: [
            {
                test  : /\.js$/,
                loader: 'babel-loader',
                query : {
                    presets: ['es2015']
                }
            }, {
                test: /\.styl$/,
                use : ExtractTextPlugin.extract({
                    use: 'css-loader!postcss-loader!stylus-loader'
                })
            },
            {
                test: /\.css$/,
                use : ExtractTextPlugin.extract({
                    use: 'css-loader!postcss-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('/[name]/main.min.css'),
    ]

}