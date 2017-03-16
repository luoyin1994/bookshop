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
// banner跳转频道页
app.get('/subchannel/banner', (req, res) => {
    let params = req.query
    let id     = params.id
    service.get_subChannel_data(id)((data) => {
        let navTitle = data.label
        if (typeof navTitle !== 'undefined') {
            if (navTitle.length > 8) navTitle = navTitle.slice(0, 7).concat('...')
            data.label = navTitle
        }
        res.set({
            'Cache-control': 'no-cache'
        })
            .render('channel/module1/index_banner', {
                data: data
            })
    })
})
//免费频道页
app.get('/channel/free', (req, res) => {
    res.set({
        'Cache-Control': 'no-cache'
    }).render('channel/module1/index_free', {
        title  : '免费频道',
        channel: 'free',
        data   : service.get_channel_data('free'),
        max    : {
            item: 5,
            tag : 3,
        }
    })
})
//女生频道页
app.get('/channel/female', (req, res) => {
    res.set({
        'Cache-Control': 'no-cache'
    }).render('channel/module1/index', {
        title  : '女生频道',
        channel: 'female',
        data   : service.get_channel_data('female'),
        max    : {
            item: 5,
            tag : 3,
        }
    })
})
//男生频道页
app.get('/channel/male', (req, res) => {
    res.set({
        'Cache-Control': 'no-cache'
    }).render('channel/module1/index', {
        title  : '男生频道',
        channel: 'male',
        data   : service.get_channel_data('male'),
        max    : {
            item: 5,
            tag : 3,
        }
    })
})
//本周最火页
app.get('/channel/hot', (req, res) => {
    res.set({
        'Cache-Control': 'no-cache'
    }).render('channel/module1/index_sub', {
        title  : '本周最火',
        channel: 'hot',
        data   : service.get_channel_data('hot'),
        max    : {
            item: 10,
            tag : 3,
        }
    })

})
//次级免费频道页
app.get('/subchannel/free', (req, res) => {
    let params = req.query
    let id     = params.id
    let label  = params.label
    let items  = service.get_channel_data('free').items[id].data.data
    res.set({
        'Cache-Control': 'no-cache'
    }).render('channel/module1/index_sub', {
        params: params,
        data  : {
            items: items,
            label: label
        },
        max   : {
            item: 15,
            tag : 3,
        }
    })

})
// 书籍详情页
app.get('/book', (req, res) => {
    let params = req.query
    let id     = params.id
    service.get_book_data(id)((data) => {
        let navTitle = data.item.title
        if (navTitle.length > 8) navTitle = navTitle.slice(0, 7).concat('...')
        data.item.title = navTitle
        res.set({
            'Cache-control': 'no-cache'
        })
            .render('book/book', {
                title: '书籍详情页',
                datas: data
            })
    })

})
// 二级频道页
app.get('/subchannel', (req, res) => {
    let params = req.query
    let id     = params.id
    service.get_subChannel_data(id)((data) => {
        let navTitle = data.label
        if (typeof navTitle !== 'undefined') {
            if (navTitle.length > 4) navTitle = navTitle.slice(0, 3).concat('...')
            data.label = navTitle
        }
        res.set({
            'Cache-control': 'no-cache'
        })
            .render('channel/module1/index_sub', {
                params: params,
                data  : data
            })
    })
})
// reader页
app.get('/reader', (req, res) => {
    let params = req.query
    let id     = params.id
    res.set({
        'Cache-Control': 'no-cache'
    })
        .render('reader/reader', {
            title: 'reader',
            chapterId   : id,
        })
})
// reader目录页
app.get('/reader/catalog', (req, res) => {
    let params = req.query
    let id     = params.id
    let data   = service.get_chapterList_data()
    res.set({
        'Cache-Control': 'no-cache'
    })
        .render('channel/catalog/catalog', {
            title: '目录',
            data : {
                catalog: data.item.toc,
                id     : id,
            }

        })
})

/** 获取数据路由 **/
app.use('/data', dataApp)
//获取首页的数据
dataApp.get('/index', (req, res) => {
    res.set({
        'Cache-Control': 'no-cache'
    })
        .send(service.get_index_data())
})
//获取免费频道数据
dataApp.get('/free', (req, res) => {
    res.set({
        'Cache-Control': 'no-cache'
    })
        .send(service.get_channel_data('free'))
})
//获取女生频道数据
dataApp.get('/female', (req, res) => {
    res.set({
        'Cache-Control': 'no-cache'
    })
        .send(service.get_channel_data('female'))
})
//获取男生频道数据
dataApp.get('/male', (req, res) => {
    res.set({
        'Cache-Control': 'no-cache'
    })
        .send(service.get_channel_data('male'))
})
//获取本周最火数据
dataApp.get('/hot', (req, res) => {
    res.set({
        'Cache-Control': 'no-cache'
    })
        .send(service.get_channel_data('hot'))

})
//获取籍详情页的数据
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
//获取二级频道页的数据
dataApp.get('/subchannel', (req, res) => {
    let params = req.query
    let id     = params.id
    service.get_subChannel_data(id)((data) => {
        res.set({
            'Cache-Control': 'no-cache'
        })
            .send(data)
    })
})
//获取章节数的数据
dataApp.get('/chapterList', (req, res) => {
    res.set({
        'Cache-Control': 'no-cache'
    })
        .send(service.get_chapterList_data())
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


