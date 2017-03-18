new Vue({
    el          : '#app',
    data        : {
        data: {},
    },
    beforeCreate: function () {
        //在页面未加载完毕之前显示的loading Html自定义内容
        var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;right:0;top:0;bottom:0;background:#f6faff;opacity:1;filter:alpha(opacity=80);z-index:10000;"><div style="position:relative;top:50%;transform:translateY(-140%);font:22px / 57px \'Microsoft YaHei\'; padding-left: 25px; border-radius:5px ;padding-right: 25px;  color: #aba5ff;text-align:center;">页面加载中，请等待...</div></div>';
        //呈现loading效果
        document.write(_LoadingHtml);
    },
    mounted     : function () {
        this.$nextTick(function () {
            this.searchData(288143, () => {
                this.completeLoading()
            })

        })
    },
    methods     : {
        completeLoading: function () {
            var loadingMask = document.getElementById('loadingDiv');
            loadingMask.parentNode.removeChild(loadingMask);
        },
        searchData     : function (id, cb) {
            axios.get(`/data/book?id=${id}`)
                .then((res) => {
                    this.data = res.data.item
                    cb && cb()
                })
                .catch((err) => {
                    throw err
                })
        },
        readBook       : function () {
            location.href = '/reader'
        },
        backUrl        : function () {
            history.back()
        }
    }
})