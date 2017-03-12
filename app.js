/** 引用模块 **/
const express = require('express')

/** 创建实例 **/
const app   = express()
const ajaxApp = express()
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

/** 定义ajaxApp路由 **/
app.use('/ajax', ajaxApp)
// 异步首页
ajaxApp.get('/', (req, res) => {
    res.set({
        'Cache-Control': 'no-cache'
    })
        .render('ajaxIndex/index')
})
// 异步search页
ajaxApp.get('/search', (req, res) => {
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
app.use('/data',ajaxDataApp)

ajaxDataApp.get('/index',function (req, res) {
    res.set({
        'Cache-Control': 'no-cache'
    })
        .send(service.get_index_data())
})



/** 定义监听端口 **/
app.listen(port)
console.log(`server is started on http://localhost:${port}!`)