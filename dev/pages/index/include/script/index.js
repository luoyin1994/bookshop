
new Vue({
    el     : '#app',
    data   : {
        a: ''
    },
    mounted: function () {

            this.b()
        this.$nextTick(function () {
        })
    },
    methods: {
        b: function () {
            var that = this
             axios.get('/ajax/search?s=3&start=1&end=2').then(function (res) {
                var data = res.data
                that.a = data.items[0].intro
                console.log(data.items)
            })
        }
    }
})