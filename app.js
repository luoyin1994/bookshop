/** 引用模块 **/
const express = require('express')
const service = require(__dirname + '/service/bookShopService')

/** 创建实例 **/
const app         = express()
const ajaxApp     = express()
const ajaxDataApp = express()

/** 声明变量 **/
const port = 5000

/** 设定视图模板引擎 **/
//app
app.set('view engine', 'jade')
app.set('views', __dirname + '/dev/pages')
//ajaxApp
ajaxApp.set('view engine', 'jade')
ajaxApp.set('views', __dirname + '/dev/pages')

/** 定义静态文件目录 **/
app.use(express.static(__dirname + '/public', {
    maxAge: 0
}))

/** 定义app路由 **/
// index页
// 静态资源目录下的index.html默认具有优先级，index下的渲染失效
// app.get('/', (req, res) => {
//     res.set({
//         'Cache-Control': 'no-cache'
//     })
//         .render('index/index', {
//             title: '首页',
//             max  : {
//                 item: 5,
//                 tag : 3
//             },
//             data : service.get_index_data()
//         })
//
// })
// // book页
// app.get('/book', (req, res) => {
//     res.set({
//         'Cache-control': 'no-cache'
//     })
//         .render('book/book', {
//             title: '书籍详情页',
//         })
// })
// // reader页
app.get('/reader', (req, res) => {
    res.set({
        'Cache-Control': 'no-cache'
    })
        .render('reader/reader')
})
// // api页
// app.get('/api', (req, res) => {
//     res.set({
//         'Cache-Control': 'no-cache'
//     })
//         .render('api/api', {
//             data: service.get_test_data()
//         })
// })

/** 定义ajaxApp路由 **/
app.use('/ajax', ajaxApp)
// 异步首页
app.get('/', (req, res) => {
    res.set({
        'Cache-Control': 'no-cache'
    })
        .render('ajaxIndex/index')
})
// 异步书籍详情页
app.get('/book', (req, res) => {
    res.set({
        'Cache-control': 'no-cache'
    })
        .render('ajaxBook/book', {
            title: '书籍详情页',
        })
})
// 异步search页
app.get('/search', (req, res) => {
    let params  = req.query
    let start   = params.start
    let end     = params.end
    let keyword = params.s
    service.get_search_data(start, end, keyword)((data) => {
        res.set({
            'Cache-Control': 'no-cache'
        })
            .send(data)
    })

})

/** 定义ajaxDataApp路由 **/
app.use('/data', ajaxDataApp)
//首页数据
ajaxDataApp.get('/index', function (req, res) {
    res.set({
        'Cache-Control': 'no-cache'
    })
        .send(service.get_index_data())
})
//书籍详情页数据
ajaxDataApp.get('/book', (req, res) => {
    let params = req.query
    let id     = params.id
    service.get_book_data(id)((data) => {
        res.set({
            'Cache-Control': 'no-cache'
        })
            .send(data)
    })
})
//
ajaxDataApp.get('/chapterLength', (req, res) => {
    res.set({
        'Cache-Control': 'no-cache'
    })
        .send(service.get_chapterLength_data())
})
ajaxDataApp.get('/chapterUrl', (req, res) => {
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