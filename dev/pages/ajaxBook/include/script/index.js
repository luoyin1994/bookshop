new Vue({
    el     : '#app',
    data   : {
        data: {},
    },
    mounted: function () {
        this.$nextTick(function () {
            this.getData(22222)
        })
    },
    methods: {
        getData: function (id) {
            axios.get(`/data/book?id=${id}`)
                .then((res) => {
                    console.log(res.data)
                    this.data = res.data.item
                })
                .catch((err) => {
                    throw err
                })
        },
        readBook:function () {
            location.href = '/reader'
        }
    }
})