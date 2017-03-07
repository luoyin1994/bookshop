const fs        = require('fs')
const path      = require('path')
const http      = require('http')
const path_mock = path.resolve(__dirname, '../mock')
/**
 * 获得测试数据接口
 */
module.exports.get_test_data = () => {
    let content = readeFile(path_mock + '/test.json')
    return JSON.parse(content)
}

/**
 * 获得图书页数据接口
 * @param id
 */
module.exports.get_book_data = (id) => {
    if (!id) id = "1"
    let content = readeFile(path_mock + `/book/${id}.json`)
    return JSON.parse(content)
}

/**
 * 获得首页数据接口
 */
module.exports.get_index_data = () => {
    let content = readeFile(path_mock + '/index.json')
    content     = JSON.parse(content).items
    let data    = {}
    content.forEach((item) => {
        switch (item.ad_name.trim().split(' ').join('')) {
            case '顶部轮播图' :
                data.top = item.data
                break
            case '本周最火' :
                data.hot = item.data
                break
            case '重磅推荐' :
                data.recommend = item.data
                break
            case '女生最爱' :
                data.female = item.data
                break
            case '男生最爱' :
                data.male = item.data
                break
            case '限时免费' :
                data.free = item.data
                break
            case '精选专题' :
                data.special = item.data
                break
        }
    })
    return data
}
/**
 * 获得搜索数据接口
 * @param start
 * @param end
 * @param keyword
 * @returns {function(*=)}
 */
module.exports.get_search_data = (start, end, keyword) => {
    return (cb) => {
        const qs         = require('querystring')
        let data         = {
            keyword: keyword,
            start  : start,
            end    : end
        }
        let content      = qs.stringify(data)
        //进行http请求
        let http_request = {
            //主机地址
            hostname: 'dushu.xiaomi.com',
            port    : 80,
            path    : '/store/v0/lib/query/onebox?' + content
        }
        let req_obj      = http.request(http_request, (res) => {
            let content = ''
            res.setEncoding('utf8')
            res.on('data', (chunk) => {
                content += chunk
            })
            res.on('end', () => {
                cb(JSON.parse(content))
            })
        })
        req_obj.on('error', () => {

        })
        req_obj.end()
    }
}

/**
 * 同步读取文件
 * @param dirname
 */
function readeFile(dirname) {
    return fs.readFileSync(dirname, 'utf-8')
}