new Vue({
    el     : '#app',
    data   : {
        data           : {},
        bookLimitNum   : 5,
        bookLimitNum2  : 6,
        bookTagLimitNum: 3,
        /** header **/
        headerCheckFlag: false,

    },
    mounted: function () {
        this.$nextTick(function () {
            this.getData()
        })
    },
    methods: {
        getData: function () {
            let _this = this
            axios.get('/data/index')
                .then((res) => {
                    this.data = res.data
                    console.log('获取数据成功：')
                    console.log(this.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        trim   : function (str) {
            return str.trim()
        },
        /** header **/
        // checked: function (checkFlag) {
        //     this.headerCheckFlag = true
        // },
        selectTagStyle:function () {
            
        }
    }
})