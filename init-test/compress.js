/** 引入模块 **/
const fs   = require('fs')
const path = require('path')

/** 定义路径 **/
let root                = path.resolve(__dirname, '../')
let path_public         = root + '/public'
let path_font_index     = path_public + '/index/font-icon'
let path_font_ajaxIndex = path_public + '/ajaxIndex/font-icon'
let path_font_book      = path_public + '/book/font-icon'
let path_font_ajaxBook  = path_public + '/ajaxBook/font-icon'
let path_font_reader    = path_public + '/reader/font-icon'

/** 压缩index font.css **/
let index_font = readFile(path_font_index + '/style.css')
index_font     = compress(index_font)
writeFile(path_font_index + '/font.min.css', index_font)

/** 压缩book font.css **/
let book_font = readFile(path_font_book + '/style.css')
book_font     = compress(book_font)
writeFile(path_font_book + '/font.min.css', book_font)

/** 压缩ajaxIndex font.css **/
let ajaxIndex_font = readFile(path_font_ajaxBook + '/style.css')
ajaxIndex_font     = compress(ajaxIndex_font)
writeFile(path_font_ajaxBook + '/font.min.css', ajaxIndex_font)

/** 压缩ajaxBook font.css **/
let ajaxBook_font = readFile(path_font_ajaxIndex + '/style.css')
ajaxBook_font     = compress(ajaxBook_font)
writeFile(path_font_ajaxIndex + '/font.min.css', ajaxBook_font)

/** 压缩reader font.css **/
let reader_font = readFile(path_font_reader + '/style.css')
reader_font     = compress(reader_font)
writeFile(path_font_reader + '/font.min.css', reader_font)

/**
 * 读取文件
 * @param pathName
 */
function readFile(pathName) {
    return fs.readFileSync(pathName, 'utf8')
}
/**
 * 重写文件
 * @param pathName
 * @param data
 */
function writeFile(pathName, data) {
    fs.writeFileSync(pathName, data, 'utf8')
    console.log(`文件"${formateWinPath(pathName)}"已经到位了！请查看！`)
    return true
}
/**
 * 格式化 windows 路径
 * @param pathName
 * @returns {string}
 */
function formateWinPath(pathName) {
    return pathName.split("/").join('\\')
}
/**
 * 压缩文件 (css,json)
 * @param fileContent
 * @returns {string}
 */
function compress(fileContent) {
    return fileContent.split(/\/\/.*/).join('')
    style.split(/\/\*.*\*\//).join('') //注释在去掉换行符之前处理比较好
        .split(/\s*[\n\r]+\s*/).join('')
        .split(/\s*\{\s*/).join('{')
        .split(/\s*\}\s*/).join('}')
        .split(/\s*\:\s*/).join(':')
        .split(/\s*\;\s*/).join(';')
        .split(/\s*\,\s*/).join(',')

}