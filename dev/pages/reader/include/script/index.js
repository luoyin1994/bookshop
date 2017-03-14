new Vue({
    el          : '#app',
    data        : {
        fictionData    : '',
        topBottomFlag  : false,
        hidepannel     : true,
        FontPannelFlag : false,
        bgColor        : '#ffffe9',
        passageFontSize: '15px',
        nightFlag      : false,
        alertFlag      : false,
        chapterId      : 0,
        chapterTotal   : 1
    },
    beforeCreate: function () {
        //获取浏览器页面可见高度和宽度
        var _PageHeight  = document.documentElement.clientHeight,
            _PageWidth   = document.documentElement.clientWidth;
        //计算loading框距离顶部和左部的距离（loading框的宽度为215px，高度为61px）
        var _LoadingTop  = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,
            _LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;
        //在页面未加载完毕之前显示的loading Html自定义内容
        var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#f3f8ff;opacity:1;filter:alpha(opacity=80);z-index:10000;"><div style="position: absolute; cursor1: wait; left: ' + _LoadingLeft + 'px; top:' + _LoadingTop + 'px; width: auto; height: 57px; line-height: 57px; padding-left: 50px; padding-right: 5px; background: #ffffff url(Image/loading.gif) no-repeat scroll 5px 10px; border: 2px solid #95b8e7; color: #696969; font-family:\'Microsoft YaHei\';">页面加载中，请等待...</div></div>';
        //呈现loading效果
        document.write(_LoadingHtml);
    },
    mounted     : function () {
        var _this = this
        this.$nextTick(function () {
            this.ReaderModel()
            this.Util()
            this.getStorage()
            this.ReaderModel.init(function (data) {
                _this.fictionData = data
                _this.completeLoading()
            })
        })

    },
    methods     : {
        completeLoading : function () {
            var loadingMask = document.getElementById('loadingDiv');
            loadingMask.parentNode.removeChild(loadingMask);
        },
        getStorage      : function () {
            this.bgColor         = this.Util.StorageGetter('last_bgColor') ? this.Util.StorageGetter('last_bgColor') : '#ffffe9'
            this.passageFontSize = this.Util.StorageGetter('last_passageFontSize') ? this.Util.StorageGetter('last_passageFontSize') : '15px'
            this.chapterId       = this.Util.StorageGetter('last_chapterId') ? this.Util.StorageGetter('last_chapterId') : 0
            this.nightFlag       = (this.Util.StorageGetter('last_nightFlag') === 'true') ? true : false
        },
        toggleTopBottom : function () {
            this.topBottomFlag = !this.topBottomFlag
        },
        toggleFontPannel: function () {
            //如果要实现有动画效果的出现，不能用v-show和v-if,v-if是直接渲染或不渲染到dom里，v-show是通过display:block/none来实现显示隐藏，都会生硬的输出。
            //需要动画效果可以使用绑定一个class，通过绑定的class的移除和加入，在结合原本样式上设置的transition属性来实现
            //dispaly属性具有优先级，如果设置了none，再出现的时候直接忽略transition属性
            this.hidepannel = !this.hidepannel
        },
        changeBgColor   : function (e) {
            var target   = e.currentTarget
            this.bgColor = getComputedStyle(target, null).getPropertyValue('background-color')
            this.Util.StorageSetter('last_bgColor', this.bgColor)
        },
        enlargeFontSize : function (flag) {
            var rate            = 1
            var max             = 25
            var min             = 10
            var passageFontSize = parseInt(this.passageFontSize)
            if (typeof flag == 'undefined' || flag > 0) {
                if (passageFontSize >= max) return
                this.passageFontSize = passageFontSize + rate + 'px'
            } else if (flag < 0) {
                if (passageFontSize <= min) return
                this.passageFontSize = passageFontSize - rate + 'px'
            } else {
                this.passageFontSize = '15px'
            }
            this.Util.StorageSetter('last_passageFontSize', this.passageFontSize)
        },
        toggleDayNight  : function () {
            this.nightFlag = !this.nightFlag
            this.Util.StorageSetter('last_nightFlag', this.nightFlag)
        },
        prevChapter     : function (e) {
            var _this = this
            this.stopBubble(e)
            this.ReaderModel.prevChapter(function (data) {
                _this.fictionData = data
            })
            console.log(this.chapterId)
        },
        nextChapter     : function (e) {
            var _this = this
            this.stopBubble(e)
            this.ReaderModel.nextChapter(function (data) {
                _this.fictionData = data
            })
            console.log(this.chapterId)
        },
        stopBubble      : function (e) {
            if (e && e.stopPropagation) e.stopPropagation()
            else window.event.cancelBubble = true
        },
        Util            : function () {
            this.Util = (function () {
                // todo 本地存储
                //防止域名重复，导致覆盖
                var prefix        = 'html5_reader_'
                var StorageGetter = function (key) {
                    return localStorage.getItem(prefix + key)
                }
                var StorageSetter = function (key, val) {
                    return localStorage.setItem(prefix + key, val)
                }
                var getBSONP      = function (url, callback) {
                    return $.jsonp({
                        url     : url,
                        cache   : true,
                        callback: 'duokan_fiction_chapter',
                        success : function (result) {
                            //base64解密返回的数据回去json
                            var data     = $.base64.decode(result)
                            var json     = decodeURIComponent(escape(data))
                            var jsonData = JSON.parse(json)
                            callback(jsonData)
                        }
                    })
                }
                //暴露方法
                return {
                    StorageGetter: StorageGetter,
                    StorageSetter: StorageSetter,
                    getBSONP     : getBSONP
                }
            })()
        },
        ReaderModel     : function () {
            var _this        = this
            this.ReaderModel = (function () {
                'use strict'
                //    todo 实现和阅读器相关数据交互的方法
                var init                 = function (UIcallback) {
                    getFictionInfo().then(function () {
                        return getCurChapterContent()
                    }).then(function (data) {
                        UIcallback && UIcallback(data)
                    })
                }
                var getFictionInfo       = function () {
                    return new Promise(function (res, err) {
                        $.get('/data/chapterLength', function (data) {
                            if (data.result == 0) {
                                //    todo 获取章节信息后的回调
                                _this.chapterTotal = data.chapters.length
                                res(data)
                            } else {
                                err({msg: 'fail'})
                            }
                        }, 'json')
                    })
                }
                var getCurChapterContent = function () {//外边加一层function，return内容，需要的时候才创建
                    return new Promise(function (res, err) {
                        $.get('/data/chapterUrl?chapter_id=' + _this.chapterId, function (data) {
                            if (data.result == 0) {
                                var url = data.url
                                _this.Util.getBSONP(url, function (data) {
                                    res(data)
                                })
                            } else {
                                err({msg: 'fail'})
                            }
                        }, 'json')
                    })
                }

                var prevChapter = function (UIcallback) {
                    _this.chapterId = parseInt(_this.chapterId, 10)
                    _this.chapterId -= 1
                    if (_this.chapterId < 0) {
                        _this.alertFlag = true
                        _this.chapterId = 0
                        return
                    }
                    getCurChapterContent().then(function (data) {
                        UIcallback && UIcallback(data)
                    })
                    _this.Util.StorageSetter('last_chapterId', _this.chapterId)
                }
                var nextChapter = function (UIcallback) {
                    _this.chapterId = parseInt(_this.chapterId, 10)
                    _this.chapterId += 1
                    if (_this.chapterId > _this.chapterTotal - 1) {
                        _this.alertFlag = true
                        _this.chapterId = _this.chapterTotal - 1
                        return
                    }
                    getCurChapterContent().then(function (data) {
                        UIcallback && UIcallback(data)
                    })
                    _this.Util.StorageSetter('last_chapterId', _this.chapterId)
                }
                return {
                    init       : init,
                    prevChapter: prevChapter,
                    nextChapter: nextChapter
                }
            })()
        },
    }
})