new Vue({
    el     : '#app',
    data   : {
        data: {},
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
    mounted: function () {
        this.$nextTick(function () {
            this.getData(288143, () => {
                this.completeLoading()
            })

        })
    },
    methods: {
        completeLoading : function () {
            var loadingMask = document.getElementById('loadingDiv');
            loadingMask.parentNode.removeChild(loadingMask);
        },
        getData : function (id, cb) {
            axios.get(`/data/book?id=${id}`)
                .then((res) => {
                    console.log(res.data)
                    this.data = res.data.item
                    cb && cb()
                })
                .catch((err) => {
                    throw err
                })
        },
        readBook: function () {
            location.href = '/reader'
        }
    }
})