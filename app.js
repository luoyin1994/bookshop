/** 引用模块 **/
const express = require('express')

/** 创建实例 **/
const app   = express()
const admin = express()

/** 声明变量 **/
const port = 5000

/** 设定视图模板引擎 **/
app.set('view engine', 'jade')
app.set('views', __dirname + '/dev/pages')

/** 定义静态文件目录 **/
app.use(express.static(__dirname + '/public', {
    maxAge: 0
}))

/** 定义主应用路由 **/
// index页
// 静态资源目录下的index.html默认具有优先级，index下的渲染失效
app.get('/', (req, res) => {
    res.set({
        'Cache-Control': 'no-cache'
    })
        .render('index/index', {
            title: '首页',
            max  : {
                item: 5,
                tag : 3
            },
            data : service.get_index_data()
        })

})
// reader页
// api页
const service = require(__dirname + '/service/bookShopService')
app.get('/api', (req, res) => {
    res.set({
        'Cache-Control': 'no-cache'
    })
        .render('api/api', {
            data: service.get_test_data()
        })
})
// 异步书籍详情页
app.get('/ajax/book', (req, res) => {
    let params = req.query()
    let id     = params.id
    res.set({
        'Cache-Control': 'no-cache'
    })
        .render('ajax/book/book', {
            data: service.get_book_data(id)
        })

})
// 异步首页
app.get('/ajax/index', (req, res) => {
    res.set({
        'Cache-Control': 'no-cache'
    })
        .render('ajax/index/index', {
            data: service.get_index_data().item
        })
})
// 异步search页
app.get('/ajax/search', (req, res) => {
    let params  = req.query
    let start   = params.start
    let end     = params.end
    let keyword = params.keyword
    service.get_search_data(start, end, keyword)((data) => {
        res.set({
            'Cache-Control': 'no-cache'
        })
            .render('ajax/search/search', {
                data: data
            })
    })

})

// /** 定义子应用路由 **/
// // admin
// app.use('/admin', admin)
// admin
//     .get('/', (req, res) => {
//         res.send('Admin HomePage')
//     })

/** 定义监听端口 **/
app.listen(port)
console.log(`server is started on http://localhost:${port}!`)