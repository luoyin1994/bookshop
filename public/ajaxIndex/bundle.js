!function(t){function n(i){if(o[i])return o[i].exports;var e=o[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,n),e.l=!0,e.exports}var o={};n.m=t,n.c=o,n.i=function(t){return t},n.d=function(t,o,i){n.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=49)}([function(t,n,o){"use strict";o(2),o(1)},function(t,n){},function(t,n){},,,,function(t,n,o){"use strict";o(15)},function(t,n,o){"use strict";o(30),o(23),o(29),o(28),o(24),o(26),o(21),o(25),o(22),o(27)},,,,,,,,function(t,n,o){"use strict";new Vue({el:"#app",data:{data:{},bookLimitNum:5,bookLimitNum2:6,bookTagLimitNum:3,shelfPosition:"100%",storePosition:"0",shelfDuration:"0.5s",headerCheckFlag:!1,selectBookShelfFlag:!1,itemLineDuration:"1s",itemLinePosition:"227px"},mounted:function(){this.$nextTick(function(){this.getData()})},methods:{getData:function(){var t=this;axios.get("/data/index").then(function(n){t.data=n.data,console.log("获取数据成功："),console.log(t.data)}).catch(function(t){console.log(t)})},trim:function(t){return t.trim()},headerTabSwitch:function(t){0==t&&(this.selectBookShelfFlag=!1,this.shelfPosition="100%",this.storePosition="0"),1==t&&(this.selectBookShelfFlag=!0,this.shelfPosition="0",this.storePosition="-100%")}}})},,,,,,function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},,,,,,,,,,,,,,,,,,,function(t,n,o){o(0),o(7),t.exports=o(6)}]);