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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reset_styl__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reset_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__reset_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_styl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__public_styl__);



/***/ }),

/***/ 1:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

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

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__include_script_index__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__include_script_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__include_script_index__);


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(5);
module.exports = __webpack_require__(4);


/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_styl__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_include_style_common_header_styl__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_include_style_common_header_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_include_style_common_header_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__include_style_book_detial_styl__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__include_style_book_detial_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__include_style_book_detial_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__include_style_folder_styl__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__include_style_folder_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__include_style_folder_styl__);




// import './include/style/hot-free.styl'
// import './include/style/recommend.styl'
// import './include/style/female.styl'
// import './include/style/male.styl'
// import './include/style/free.styl'



/***/ })

/******/ });