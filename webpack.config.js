const path            = require('path')
let path_dev          = __dirname + '/dev'
let path_dev_pages    = __dirname + '/dev/pages'
let path_out          = __dirname + '/public'
let ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports        = {
    entry  : {
        index    : [path_dev + '/style/pack_style.js', path_dev_pages + '/index/pack_style.js', path_dev_pages + '/index/pack_js.js'],
        book     : [path_dev + '/style/pack_style.js', path_dev_pages + '/book/pack_style.js', path_dev_pages + '/book/pack_js.js'],
        reader   : [path_dev + '/style/pack_style.js', path_dev_pages + '/reader/pack_style.js', path_dev_pages + '/reader/pack_js.js'],
    },
    output : {
        filename: '/[name]/bundle.min.js',
        path    : path_out
    },
    module : {
        rules: [
            {
                test: /\.js$/,
                loader : 'babel-loader',
                exclude:['./node_modules/','./.idea'],
                include:['./dev/'],
                query:{
                    presets:['es2015']
                }
            }, {
                test: /\.styl$/,
                exclude:['./node_modules/','./.idea'],
                use : ExtractTextPlugin.extract({
                    use: 'css-loader!postcss-loader!stylus-loader'
                })
            },
            {
                test: /\.css$/,
                exclude:['./node_modules/','./.idea'],
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