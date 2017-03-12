/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__include_script_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__include_script_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__include_script_index__);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_styl__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__include_style_header_styl__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__include_style_header_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__include_style_header_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__include_style_top_styl__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__include_style_top_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__include_style_top_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__include_style_special_styl__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__include_style_special_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__include_style_special_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__include_style_hot_free_styl__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__include_style_hot_free_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__include_style_hot_free_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__include_style_recommend_styl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__include_style_recommend_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__include_style_recommend_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__include_style_female_styl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__include_style_female_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__include_style_female_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__include_style_male_styl__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__include_style_male_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__include_style_male_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__include_style_free_styl__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__include_style_free_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__include_style_free_styl__);












/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reset_styl__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reset_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__reset_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_styl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__public_styl__);



/***/ }),
/* 3 */
/***/ (function(module, exports) {

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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(1);
module.exports = __webpack_require__(0);


/***/ })
/******/ ]);