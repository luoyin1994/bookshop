/** 引用模块 **/
const express = require('express')
const service = require(__dirname + '/service/bookShopService')

/** 创建实例 **/
const app     = express()
const dataApp = express()

/** 声明变量 **/
const port = 5000

/** 设定视图模板引擎 **/
//app
app.set('view engine', 'jade')
app.set('views', __dirname + '/dev/pages')

/** 定义静态文件目录 **/
app.use(express.static(__dirname + '/public', {
    maxAge: 0
}))

/** 主要页面路由 **/
// 书城首页
app.get('/', (req, res) => {
    res.set({
        'Cache-Control': 'no-cache'
    })
        .render('index/index', {
            title: '书城首页',
        })
})
// 书籍详情页
app.get('/book', (req, res) => {
    res.set({
        'Cache-control': 'no-cache'
    })
        .render('book/book', {
            title: '书籍详情页',
        })
})
// reader页
app.get('/reader', (req, res) => {
    res.set({
        'Cache-Control': 'no-cache'
    })
        .render('reader/reader', {
            title: 'reader',
        })
})

/** 获取数据路由 **/
app.use('/data', dataApp)
//获取首页的数据
dataApp.get('/index', function (req, res) {
    res.set({
        'Cache-Control': 'no-cache'
    })
        .send(service.get_index_data())
})
//获取书籍详情页的数据
dataApp.get('/book', (req, res) => {
    let params = req.query
    let id     = params.id
    service.get_book_data(id)((data) => {
        res.set({
            'Cache-Control': 'no-cache'
        })
            .send(data)
    })
})
//获取章节数的数据
dataApp.get('/chapterLength', (req, res) => {
    res.set({
        'Cache-Control': 'no-cache'
    })
        .send(service.get_chapterLength_data())
})
//获取章节base64数据url的数据
dataApp.get('/chapterUrl', (req, res) => {
    let params    = req.query
    let chapterId = params.chapter_id
    res.set({
        'Cache-Control': 'no-cache',
    })
        .send(JSON.parse(service.get_chapterUrl_data(chapterId)))
})
/** 定义监听端口 **/
app.listen(port)
console.log(`server is started on http://localhost:${port}!`)