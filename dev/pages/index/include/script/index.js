new Vue({
    el     : '#app',
    data   : {
        data            : {},
        bookLimitNum    : 5,
        bookLimitNum2   : 6,
        bookTagLimitNum : 3,
        shelfPosition   : '100%',
        storePosition   : '0',
        shelfDuration   : '0.5s',
        /** header **/
        // headerDuration  : '0.5s',
        // headerPosition  : '100%',
        headerCheckFlag : false,
        // bookShelfTagFlag: false,
        // bookStoreTagFlag: true,
        selectBookShelfFlag:false,
        itemLineDuration: '1s',
        itemLinePosition: '227px',
    },
    mounted: function () {
        this.$nextTick(function () {
            this.getData()
        })
    },
    methods: {
        getData       : function () {
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
        trim          : function (str) {
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
        headerTabSwitch     : function (index) {
            if(index==0){
                this.selectBookShelfFlag = false
                this.shelfPosition = '100%'
                this.storePosition = '0'
            }
            if(index==1){
                this.selectBookShelfFlag = true
                this.shelfPosition = '0'
                this.storePosition = '-100%'
            }
        }
    }
})