/** 引入模块 **/
const path = require('path')
const packcompressto = require('packcompressto')

/** 定义路径 **/
let root                = path.resolve(__dirname, '../../../')
let path_public         = root + '/public'
let path_font_index     = path_public + '/index/font-icon'
let path_font_ajaxIndex = path_public + '/ajaxIndex/font-icon'
let path_font_book      = path_public + '/book/font-icon'
let path_font_ajaxBook  = path_public + '/ajaxBook/font-icon'
let path_font_reader    = path_public + '/reader/font-icon'

/** 压缩打包 index font-icon/style.css **/
packcompressto.packTo_font(path_font_index, path_font_index)
/** 压缩打包 book font-icon/style.css **/
packcompressto.packTo_font(path_font_book, path_font_book)
/** 压缩打包 reader font-icon/style.css **/
packcompressto.packTo_font(path_font_reader, path_font_reader)
