new Vue({
    el          : '#app',
    data        : {
        data               : {},
        bookLimitNum       : 5,
        bookLimitNum2      : 6,
        bookTagLimitNum    : 3,
        shelfPosition      : '100%',
        storePosition      : '0',
        shelfDuration      : '0.5s',
        /** header **/
        // headerDuration  : '0.5s',
        // headerPosition  : '100%',
        headerCheckFlag    : false,
        // bookShelfTagFlag: false,
        // bookStoreTagFlag: true,
        selectBookShelfFlag: false,
        itemLineDuration   : '1s',
        itemLinePosition   : '227px',
        /** recommend **/
        recommentData      : {},
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
        this.$nextTick(function () {
            this.getData(() => {
                this.completeLoading()
                this.changeChannel(1)
            })

        })
    },
    methods     : {
        completeLoading: function () {
            var loadingMask = document.getElementById('loadingDiv');
            loadingMask.parentNode.removeChild(loadingMask);
        },
        getData        : function (cb) {
            axios.get('/data/index')
                .then((res) => {
                    this.data = res.data
                    console.log('获取数据成功：')
                    console.log(this.data)
                    cb && cb()
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        trim           : function (str) {
            return str.trim()
        },
        /** header **/
        // checked: function (checkFlag) {
        //     this.headerCheckFlag = true
        // },
        // toggle: function (flag) {
        //     this[flag] = !this[flag]
        // },
        // indexFlag     : function (tagsFlag, index) {
        //     return this[tagsFlag][index]
        // },
        headerTabSwitch: function (index) {
            if (index == 0) {
                this.selectBookShelfFlag = false
                this.shelfPosition       = '100%'
                this.storePosition       = '0'
            }
            if (index == 1) {
                this.selectBookShelfFlag = true
                this.shelfPosition       = '0'
                this.storePosition       = '-100%'
            }
        },
        /** recommend **/
        changeChannel  : function (channelFlag) {
            let data = this.data.recommend.data
            seprateData(data, 0, (maleData, femaleData) => {
                if (channelFlag == 1) {
                    this.recommentData = maleData
                } else if (channelFlag == 2) {
                    this.recommentData = femaleData
                }
            })
            /**
             * 分离重磅推荐中的female和male数据
             * @param data
             * @param start
             * @param cb
             */
            function seprateData(data, start, cb) {
                let maleData   = {channel: 'male', data: []}
                let femaleData = {channel: 'female', data: []}
                findMale(data, start, cb)
                /**
                 * 递归查找female和male数据
                 * @param data
                 * @param start
                 * @param cb
                 * @returns {*}
                 */
                function findMale(data, start, cb) {
                    if (typeof data[start] == 'undefined') return cb && cb(maleData, femaleData)
                    let channel = data[start]['channel']
                    // console.log(start)
                    if (typeof channel.length == 'undefined' || channel.length == 0) {
                        console.log('该数据不属于任何频道!')
                    } else if (channel.length == 1) {
                        if (parseInt(channel[0]) == 1) {
                            maleData.data.push(data[start])
                        }
                        if (parseInt(channel[0]) == 2) {
                            femaleData.data.push(data[start])
                        }
                    } else if (channel.length > 1) {
                        channel.forEach(function (item, index) {
                            if (parseInt(item) == 1 && maleData.data[maleData.data.length - 1]['title'] != data[start]['title']) {
                                maleData.data.push(data[start])
                            }
                            if (parseInt(item) == 2 && femaleData.data[femaleData.data.length - 1]['title'] != data[start]['title']) {
                                femaleData.data.push(data[start])
                            }
                        })
                    }
                    start = start + 1
                    findMale(data, start, cb)
                }
            }
        }
    }
})
