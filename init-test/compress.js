/** 引入模块 **/
const fs   = require('fs')
const path = require('path')

/** 定义路径 **/
let root            = path.resolve(__dirname, '../')
let path_font       = root + '/public/index/font-icon'
let path_font_index = path_font + '/index'

/** 压缩font.css **/
let index_font = readFile(path_font_index + '/font.css')
index_font     = compress(index_font)
writeFile(path_font_index + '/font.min.css', index_font)

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
        .split(/\s*[\n\r]+\s*/).join('')
        .split(/\s*\{\s*/).join('{')
        .split(/\s*\}\s*/).join('}')
        .split(/\s*\:\s*/).join(':')
        .split(/\s*\;\s*/).join(';')
        .split(/\s*\,\s*/).join(',')
        .split(/\/\*.*\*\//).join('')
}