(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "/I9Y");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "/I9Y":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html, body {\n  height: 100%;\n  font-size: 20px;\n}\n\nbody {\n  margin: 0;\n}\n\n.latte-item {\n  min-height: 400px;\n  font-size: 20px;\n}\n\n.latte-item * {\n  font-size: 20px;\n}\n\n.latte-content {\n  height: auto;\n}\n\n.latte-stage {\n  display: flex;\n  flex-direction: row;\n}\n\nbutton {\n  -webkit-appearance: none;\n  background: transparent;\n  border: 0;\n  outline: 0;\n}\n\n.paginate {\n  position: relative;\n  margin: 10px;\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  transform: translate3d(0, 0, 0);\n  -webkit-filter: drop-shadow(0 2px 0px rgba(0, 0, 0, 0.2));\n}\n\n.paginate i {\n  position: absolute;\n  top: 40%;\n  left: 0;\n  width: 50px;\n  height: 5px;\n  border-radius: 2.5px;\n  background: #fff;\n  transition: all 0.15s ease;\n}\n\n.paginate.left i {\n  transform-origin: 0% 50%;\n}\n\n.paginate.left i:first-child {\n  transform: translate(0, -1px) rotate(40deg);\n}\n\n.paginate.left i:last-child {\n  transform: translate(0, 1px) rotate(-40deg);\n}\n\n.paginate.left:hover i:first-child {\n  transform: translate(0, -1px) rotate(30deg);\n}\n\n.paginate.left:hover i:last-child {\n  transform: translate(0, 1px) rotate(-30deg);\n}\n\n.paginate.left:active i:first-child {\n  transform: translate(1px, -1px) rotate(25deg);\n}\n\n.paginate.left:active i:last-child {\n  transform: translate(1px, 1px) rotate(-25deg);\n}\n\n.paginate.left[disabled] i:first-child {\n  transform: translate(-5px, 0) rotate(0deg);\n}\n\n.paginate.left[disabled] i:last-child {\n  transform: translate(-5px, 0) rotate(0deg);\n}\n\n.paginate.left[disabled]:hover i:first-child {\n  transform: translate(-5px, 0) rotate(0deg);\n}\n\n.paginate.left[disabled]:hover i:last-child {\n  transform: translate(-5px, 0) rotate(0deg);\n}\n\n.paginate.right i {\n  transform-origin: 100% 50%;\n}\n\n.paginate.right i:first-child {\n  transform: translate(0, 1px) rotate(40deg);\n}\n\n.paginate.right i:last-child {\n  transform: translate(0, -1px) rotate(-40deg);\n}\n\n.paginate.right:hover i:first-child {\n  transform: translate(0, 1px) rotate(30deg);\n}\n\n.paginate.right:hover i:last-child {\n  transform: translate(0, -1px) rotate(-30deg);\n}\n\n.paginate.right:active i:first-child {\n  transform: translate(1px, 1px) rotate(25deg);\n}\n\n.paginate.right:active i:last-child {\n  transform: translate(1px, -1px) rotate(-25deg);\n}\n\n.paginate.right[disabled] i:first-child {\n  transform: translate(5px, 0) rotate(0deg);\n}\n\n.paginate.right[disabled] i:last-child {\n  transform: translate(5px, 0) rotate(0deg);\n}\n\n.paginate.right[disabled]:hover i:first-child {\n  transform: translate(5px, 0) rotate(0deg);\n}\n\n.paginate.right[disabled]:hover i:last-child {\n  transform: translate(5px, 0) rotate(0deg);\n}\n\n.paginate[disabled] {\n  opacity: 0.3;\n  cursor: default;\n}\n\n.pagination {\n  display: flex;\n  flex-direction: row;\n}\n\n.paginate-counter {\n  text-align: center;\n  width: 100%;\n  font-size: 20px;\n  color: #fff;\n}\n\n.mb-0 {\n  margin-bottom: 0px !important;\n}\n\n.mt-0 {\n  margin-top: 0px !important;\n}\n\n.ml-0 {\n  margin-left: 0px !important;\n}\n\n.mr-0 {\n  margin-right: 0px !important;\n}\n\n.mx-0 {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n\n.my-0 {\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\n.mb-5 {\n  margin-bottom: 5px !important;\n}\n\n.mt-5 {\n  margin-top: 5px !important;\n}\n\n.ml-5 {\n  margin-left: 5px !important;\n}\n\n.mr-5 {\n  margin-right: 5px !important;\n}\n\n.mx-5 {\n  margin-left: 5px !important;\n  margin-right: 5px !important;\n}\n\n.my-5 {\n  margin-top: 5px !important;\n  margin-bottom: 5px !important;\n}\n\n.mb-10 {\n  margin-bottom: 10px !important;\n}\n\n.mt-10 {\n  margin-top: 10px !important;\n}\n\n.ml-10 {\n  margin-left: 10px !important;\n}\n\n.mr-10 {\n  margin-right: 10px !important;\n}\n\n.mx-10 {\n  margin-left: 10px !important;\n  margin-right: 10px !important;\n}\n\n.my-10 {\n  margin-top: 10px !important;\n  margin-bottom: 10px !important;\n}\n\n.mb-15 {\n  margin-bottom: 15px !important;\n}\n\n.mt-15 {\n  margin-top: 15px !important;\n}\n\n.ml-15 {\n  margin-left: 15px !important;\n}\n\n.mr-15 {\n  margin-right: 15px !important;\n}\n\n.mx-15 {\n  margin-left: 15px !important;\n  margin-right: 15px !important;\n}\n\n.my-15 {\n  margin-top: 15px !important;\n  margin-bottom: 15px !important;\n}\n\n.mb-20 {\n  margin-bottom: 20px !important;\n}\n\n.mt-20 {\n  margin-top: 20px !important;\n}\n\n.ml-20 {\n  margin-left: 20px !important;\n}\n\n.mr-20 {\n  margin-right: 20px !important;\n}\n\n.mx-20 {\n  margin-left: 20px !important;\n  margin-right: 20px !important;\n}\n\n.my-20 {\n  margin-top: 20px !important;\n  margin-bottom: 20px !important;\n}\n\n.mb-25 {\n  margin-bottom: 25px !important;\n}\n\n.mt-25 {\n  margin-top: 25px !important;\n}\n\n.ml-25 {\n  margin-left: 25px !important;\n}\n\n.mr-25 {\n  margin-right: 25px !important;\n}\n\n.mx-25 {\n  margin-left: 25px !important;\n  margin-right: 25px !important;\n}\n\n.my-25 {\n  margin-top: 25px !important;\n  margin-bottom: 25px !important;\n}\n\n.mb-30 {\n  margin-bottom: 30px !important;\n}\n\n.mt-30 {\n  margin-top: 30px !important;\n}\n\n.ml-30 {\n  margin-left: 30px !important;\n}\n\n.mr-30 {\n  margin-right: 30px !important;\n}\n\n.mx-30 {\n  margin-left: 30px !important;\n  margin-right: 30px !important;\n}\n\n.my-30 {\n  margin-top: 30px !important;\n  margin-bottom: 30px !important;\n}\n\n.mb-35 {\n  margin-bottom: 35px !important;\n}\n\n.mt-35 {\n  margin-top: 35px !important;\n}\n\n.ml-35 {\n  margin-left: 35px !important;\n}\n\n.mr-35 {\n  margin-right: 35px !important;\n}\n\n.mx-35 {\n  margin-left: 35px !important;\n  margin-right: 35px !important;\n}\n\n.my-35 {\n  margin-top: 35px !important;\n  margin-bottom: 35px !important;\n}\n\n.mb-40 {\n  margin-bottom: 40px !important;\n}\n\n.mt-40 {\n  margin-top: 40px !important;\n}\n\n.ml-40 {\n  margin-left: 40px !important;\n}\n\n.mr-40 {\n  margin-right: 40px !important;\n}\n\n.mx-40 {\n  margin-left: 40px !important;\n  margin-right: 40px !important;\n}\n\n.my-40 {\n  margin-top: 40px !important;\n  margin-bottom: 40px !important;\n}\n\n.mb-45 {\n  margin-bottom: 45px !important;\n}\n\n.mt-45 {\n  margin-top: 45px !important;\n}\n\n.ml-45 {\n  margin-left: 45px !important;\n}\n\n.mr-45 {\n  margin-right: 45px !important;\n}\n\n.mx-45 {\n  margin-left: 45px !important;\n  margin-right: 45px !important;\n}\n\n.my-45 {\n  margin-top: 45px !important;\n  margin-bottom: 45px !important;\n}\n\n.mb-50 {\n  margin-bottom: 50px !important;\n}\n\n.mt-50 {\n  margin-top: 50px !important;\n}\n\n.ml-50 {\n  margin-left: 50px !important;\n}\n\n.mr-50 {\n  margin-right: 50px !important;\n}\n\n.mx-50 {\n  margin-left: 50px !important;\n  margin-right: 50px !important;\n}\n\n.my-50 {\n  margin-top: 50px !important;\n  margin-bottom: 50px !important;\n}\n\n.mb-55 {\n  margin-bottom: 55px !important;\n}\n\n.mt-55 {\n  margin-top: 55px !important;\n}\n\n.ml-55 {\n  margin-left: 55px !important;\n}\n\n.mr-55 {\n  margin-right: 55px !important;\n}\n\n.mx-55 {\n  margin-left: 55px !important;\n  margin-right: 55px !important;\n}\n\n.my-55 {\n  margin-top: 55px !important;\n  margin-bottom: 55px !important;\n}\n\n.mb-60 {\n  margin-bottom: 60px !important;\n}\n\n.mt-60 {\n  margin-top: 60px !important;\n}\n\n.ml-60 {\n  margin-left: 60px !important;\n}\n\n.mr-60 {\n  margin-right: 60px !important;\n}\n\n.mx-60 {\n  margin-left: 60px !important;\n  margin-right: 60px !important;\n}\n\n.my-60 {\n  margin-top: 60px !important;\n  margin-bottom: 60px !important;\n}\n\n.mb-65 {\n  margin-bottom: 65px !important;\n}\n\n.mt-65 {\n  margin-top: 65px !important;\n}\n\n.ml-65 {\n  margin-left: 65px !important;\n}\n\n.mr-65 {\n  margin-right: 65px !important;\n}\n\n.mx-65 {\n  margin-left: 65px !important;\n  margin-right: 65px !important;\n}\n\n.my-65 {\n  margin-top: 65px !important;\n  margin-bottom: 65px !important;\n}\n\n.mb-70 {\n  margin-bottom: 70px !important;\n}\n\n.mt-70 {\n  margin-top: 70px !important;\n}\n\n.ml-70 {\n  margin-left: 70px !important;\n}\n\n.mr-70 {\n  margin-right: 70px !important;\n}\n\n.mx-70 {\n  margin-left: 70px !important;\n  margin-right: 70px !important;\n}\n\n.my-70 {\n  margin-top: 70px !important;\n  margin-bottom: 70px !important;\n}\n\n.mb-75 {\n  margin-bottom: 75px !important;\n}\n\n.mt-75 {\n  margin-top: 75px !important;\n}\n\n.ml-75 {\n  margin-left: 75px !important;\n}\n\n.mr-75 {\n  margin-right: 75px !important;\n}\n\n.mx-75 {\n  margin-left: 75px !important;\n  margin-right: 75px !important;\n}\n\n.my-75 {\n  margin-top: 75px !important;\n  margin-bottom: 75px !important;\n}\n\n.mb-80 {\n  margin-bottom: 80px !important;\n}\n\n.mt-80 {\n  margin-top: 80px !important;\n}\n\n.ml-80 {\n  margin-left: 80px !important;\n}\n\n.mr-80 {\n  margin-right: 80px !important;\n}\n\n.mx-80 {\n  margin-left: 80px !important;\n  margin-right: 80px !important;\n}\n\n.my-80 {\n  margin-top: 80px !important;\n  margin-bottom: 80px !important;\n}\n\n@keyframes pulse {\n  0%, 100% {\n    opacity: 0.2;\n    transform: translateY(-4px);\n    -moz-transform: translateY(-4px);\n    -o-transform: translateY(-4px);\n    -webkit-transform: translateY(-4px);\n  }\n  25% {\n    opacity: 0.8;\n  }\n  50% {\n    transform: translateY(4px);\n    -moz-transform: translateY(4px);\n    -o-transform: translateY(4px);\n    -webkit-transform: translateY(4px);\n  }\n}\n\nhtml, body {\n  font-size: 20px;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.relative {\n  position: relative;\n}\n\n.v-hidden {\n  visibility: hidden;\n}\n\n.flex-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.flex-column {\n  display: flex;\n  flex-direction: column;\n}\n\n.space-evenly {\n  justify-content: space-evenly;\n}\n\n.space-around {\n  justify-content: space-around;\n}\n\n.just-left {\n  justify-content: left;\n}\n\n.just-center {\n  justify-content: center;\n}\n\n.align-center {\n  align-items: center;\n}\n\n.accent {\n  color: #f5d500;\n}\n\n.accent-bg {\n  background: #f5d500;\n  color: #fff;\n}\n\n.progress {\n  cursor: progress !important;\n}\n\n.loading {\n  opacity: 0 !important;\n}\n\n.center {\n  text-align: center;\n}\n\n.jumbo {\n  font-size: 60px;\n}\n\n@media screen and (min-width: 400px) {\n  .jumbo {\n    font-size: calc(60px + 80 * ((100vw - 400px) / 800));\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .jumbo {\n    font-size: 140px;\n  }\n}\n\nh2, .h2 {\n  font-size: 60px;\n}\n\n.secondary {\n  opacity: 0.4;\n}\n\n.no-deco {\n  text-decoration: none;\n}\n\n.mid-size {\n  font-size: 100px;\n}\n\nbody {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 20px;\n  color: #fff;\n}\n\na {\n  color: #f5d500;\n}\n\na:hover {\n  text-decoration: none;\n}\n\na.no-style {\n  text-decoration: none;\n  color: inherit;\n}\n\n.app-row {\n  width: calc(100% - 10rem);\n  display: flex;\n  flex-direction: column;\n  margin: 5rem auto;\n}\n\n.app-row .text {\n  padding: 0 2.5rem;\n  width: 600px;\n  margin: 0 auto;\n}\n\n@media (max-width: 650px) {\n  .app-row {\n    width: 95%;\n  }\n  .app-row .text {\n    padding: 0 0;\n  }\n}\n\n.cdk-overlay-container:empty {\n  display: none;\n}\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000;\n}\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  z-index: 1000;\n}\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.mat-snack-bar-container {\n  border: 3px solid #f5d500;\n  color: #f5d500;\n}\n\n.mat-snack-bar-container .mat-simple-snackbar-action > button {\n  border: 1px solid #f5d500;\n  color: #f5d500;\n  box-shadow: 0 0 3px 0 #f5d500;\n}\n\n.mat-snack-bar-container .mat-simple-snackbar {\n  font-size: 14px;\n}\n", "",{"version":3,"sources":["webpack://src/styles.scss","webpack://src/styles/globals.scss","webpack://src/styles/components/carousel.scss","webpack://src/styles/components/flex-pagination.scss","webpack://src/styles/colors.scss","webpack://src/styles/generic/margins.scss","webpack://src/styles/mixins.scss","webpack://src/styles/generic/animations.scss","webpack://src/styles/generic.scss","webpack://src/styles/portfolio.scss","webpack://src/styles/snackbar.scss"],"names":[],"mappings":"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C;AL0T5C;;AKjVE;EACE,8BAAwC;ALoV5C;;AKjVE;EACE,2BAAqC;ALoVzC;;AKjVE;EACE,4BAAsC;ALoV1C;;AKjVE;EACE,6BAAuC;ALoV3C;;AKjVE;EACE,4BAAsC;EACtC,6BAAuC;ALoV3C;;AKjVE;EACE,2BAAqC;EACrC,8BAAwC;ALoV5C;;AK3WE;EACE,8BAAwC;AL8W5C;;AK3WE;EACE,2BAAqC;AL8WzC;;AK3WE;EACE,4BAAsC;AL8W1C;;AK3WE;EACE,6BAAuC;AL8W3C;;AK3WE;EACE,4BAAsC;EACtC,6BAAuC;AL8W3C;;AK3WE;EACE,2BAAqC;EACrC,8BAAwC;AL8W5C;;AKrYE;EACE,8BAAwC;ALwY5C;;AKrYE;EACE,2BAAqC;ALwYzC;;AKrYE;EACE,4BAAsC;ALwY1C;;AKrYE;EACE,6BAAuC;ALwY3C;;AKrYE;EACE,4BAAsC;EACtC,6BAAuC;ALwY3C;;AKrYE;EACE,2BAAqC;EACrC,8BAAwC;ALwY5C;;AK/ZE;EACE,8BAAwC;ALka5C;;AK/ZE;EACE,2BAAqC;ALkazC;;AK/ZE;EACE,4BAAsC;ALka1C;;AK/ZE;EACE,6BAAuC;ALka3C;;AK/ZE;EACE,4BAAsC;EACtC,6BAAuC;ALka3C;;AK/ZE;EACE,2BAAqC;EACrC,8BAAwC;ALka5C;;AKzbE;EACE,8BAAwC;AL4b5C;;AKzbE;EACE,2BAAqC;AL4bzC;;AKzbE;EACE,4BAAsC;AL4b1C;;AKzbE;EACE,6BAAuC;AL4b3C;;AKzbE;EACE,4BAAsC;EACtC,6BAAuC;AL4b3C;;AKzbE;EACE,2BAAqC;EACrC,8BAAwC;AL4b5C;;AKndE;EACE,8BAAwC;ALsd5C;;AKndE;EACE,2BAAqC;ALsdzC;;AKndE;EACE,4BAAsC;ALsd1C;;AKndE;EACE,6BAAuC;ALsd3C;;AKndE;EACE,4BAAsC;EACtC,6BAAuC;ALsd3C;;AKndE;EACE,2BAAqC;EACrC,8BAAwC;ALsd5C;;AK7eE;EACE,8BAAwC;ALgf5C;;AK7eE;EACE,2BAAqC;ALgfzC;;AK7eE;EACE,4BAAsC;ALgf1C;;AK7eE;EACE,6BAAuC;ALgf3C;;AK7eE;EACE,4BAAsC;EACtC,6BAAuC;ALgf3C;;AK7eE;EACE,2BAAqC;EACrC,8BAAwC;ALgf5C;;AKvgBE;EACE,8BAAwC;AL0gB5C;;AKvgBE;EACE,2BAAqC;AL0gBzC;;AKvgBE;EACE,4BAAsC;AL0gB1C;;AKvgBE;EACE,6BAAuC;AL0gB3C;;AKvgBE;EACE,4BAAsC;EACtC,6BAAuC;AL0gB3C;;AKvgBE;EACE,2BAAqC;EACrC,8BAAwC;AL0gB5C;;AKjiBE;EACE,8BAAwC;ALoiB5C;;AKjiBE;EACE,2BAAqC;ALoiBzC;;AKjiBE;EACE,4BAAsC;ALoiB1C;;AKjiBE;EACE,6BAAuC;ALoiB3C;;AKjiBE;EACE,4BAAsC;EACtC,6BAAuC;ALoiB3C;;AKjiBE;EACE,2BAAqC;EACrC,8BAAwC;ALoiB5C;;AK3jBE;EACE,8BAAwC;AL8jB5C;;AK3jBE;EACE,2BAAqC;AL8jBzC;;AK3jBE;EACE,4BAAsC;AL8jB1C;;AK3jBE;EACE,6BAAuC;AL8jB3C;;AK3jBE;EACE,4BAAsC;EACtC,6BAAuC;AL8jB3C;;AK3jBE;EACE,2BAAqC;EACrC,8BAAwC;AL8jB5C;;AM3hBE;ECzDA;IACE,YAAY;IDuCd,2BCtCgD;IDuChD,gCCvCgD;IDwChD,8BCxCgD;IDyChD,mCCzCgD;EPopBhD;EOlpBA;IACE,YAAY;EPopBd;EOlpBA;IDiCA,0BChC+C;IDiC/C,+BCjC+C;IDkC/C,6BClC+C;IDmC/C,kCCnC+C;EPupB/C;AACF;;AQ/pBA;EACE,ePIkB;AD8pBpB;;AQ/pBA;EACE,WACF;ARiqBA;;AQ/pBA;EACE,kBAAkB;ARkqBpB;;AQ/pBA;EACE,kBAAkB;ARkqBpB;;AQ/pBA;EACE,aAAa;EACb,mBAAmB;ARkqBrB;;AQ/pBA;EACE,aAAa;EACb,sBAAsB;ARkqBxB;;AQ/pBA;EACE,6BAA6B;ARkqB/B;;AQ/pBA;EACE,6BAA6B;ARkqB/B;;AQ/pBA;EACE,qBAAqB;ARkqBvB;;AQ/pBA;EACE,uBAAuB;ARkqBzB;;AQ/pBA;EACE,mBAAmB;ARkqBrB;;AQ/pBA;EACE,cJjDc;AJmtBhB;;AQ/pBA;EACE,mBJrDc;EIsDd,WJzDU;AJ2tBZ;;AQ/pBA;EACE,2BAA2B;ARkqB7B;;AQ/pBA;EACE,qBAAqB;ARkqBvB;;AQ/pBA;EACE,kBAAkB;ARkqBpB;;AM1tBI;EAEE,eLF2B;AD8tBjC;;AM3tBM;EAHF;IAII,oDAA+I;EN+tBrJ;AACF;;AM7tBM;EAPF;IAQI,gBLV4B;ED2uBlC;AACF;;AQzpBA;EACE,ePlF+B;AD8uBjC;;AQzpBA;EACE,YAAY;AR4pBd;;AQzpBA;EACE,qBAAqB;AR4pBvB;;AQzpBA;EACE,gBP/FiC;AD2vBnC;;ASnwBA;EACE,iDAAiD;EACjD,eRIkB;EQDlB,WLTU;AJ6wBZ;;ASjwBA;EACE,cLVc;AJ8wBhB;;ASrwBA;EAII,qBAAqB;ATqwBzB;;ASzwBA;EAQI,qBAAqB;EACrB,cAAc;ATqwBlB;;ASjwBA;EACE,yBAA0C;EAC1C,aAAa;EACb,sBAAsB;EACtB,iBAAyB;ATowB3B;;ASxwBA;EAOI,iBRFyB;EQGzB,YAAY;EACZ,cAAc;ATqwBlB;;ASjwBE;EAbF;IAcI,URXkB;EDgxBpB;ESnxBF;IAgBM,YAAY;ETswBhB;AACF;;AU9yBA;EACE,aAAa;AVizBf;;AU/yBA;EACE,eAAe;EACf,aAAa;AVkzBf;;AUhzBA;EACE,oBAAoB;EACpB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,WAAW;EACX,aAAa;EACb,aAAa;AVmzBf;;AUjzBA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,sBAAsB;EACtB,aAAa;EACb,aAAa;EACb,eAAe;EACf,gBAAgB;AVozBlB;;AUjzBA;EACE,yBN1Bc;EM2Bd,cN3Bc;AJ+0BhB;;AUtzBA;EAKI,yBN9BY;EM+BZ,cN/BY;EMgCZ,6BNhCY;AJq1BhB;;AU5zBA;EAWI,eAAe;AVqzBnB","sourcesContent":["@import 'globals';\n\nhtml, body {\n  height: 100%;\n  font-size: $app-font-size;\n}\nbody { margin: 0 }\n\n//@import 'theming.scss';\n@import 'components/all';\n@import 'generic/all';\n@import 'generic';\n@import 'portfolio';\n@import 'snackbar';\n","// set to true/false to center (or keep to the left) the menu in the home component\n$home-page-centered: false;\n// The position of the `Nico Kupfer` menu\n$name-logo-position: 'right';\n// Use opacity for the Home Page menu transitions\n$home-page-use-opacity: true;\n// We want extra margin at the top for all the pages.\n$content-with-margin: true;\n\n\n$app-font-size: 20px; // MUST BE PX\n$jumbo-font-size: 7 * $app-font-size;\n$huge-font-size: 5 * $app-font-size;\n$h2-font-size: 3 * $app-font-size;\n$big-font-size: 2 * $app-font-size;\n\n$name-logo-top: 5rem;\n$name-logo-right: 13rem;\n$name-logo-left: 5rem;\n$name-logo-right-hover: $name-logo-right + 2rem;\n$name-logo-left-hover: 6rem;\n\n$app-row-top: 5rem;\n\n// How much to indent stuff in the home page when we hover on them\n$indent-hover: 4rem;\n\n$app-row-width: 75%;\n$app-row-width-sm: 95%;\n\n$app-row-text-padding: 2.5rem;\n\n","@import 'globals';\n\n.latte-item {\n  min-height: 400px;\n  //max-height: 500px;\n\n  font-size: $app-font-size;\n\n  * {\n    font-size: $app-font-size;\n  }\n}\n\n.latte-content {\n  height: auto\n}\n\n.latte-stage {\n  display: flex;\n  flex-direction: row;\n}\n\n","@import 'globals';\n@import 'colors';\n\n$size: 50px;\n$thickness: 5px;\n$angle: 40deg;\n$angleHover: 30deg;\n$angleActive: 25deg;\n\n@mixin transition( $value ) {\n  transition: $value;\n}\n\n@mixin transform( $value ) {\n  transform: $value;\n}\n\n@mixin transform-origin( $value ) {\n  transform-origin: $value;\n}\n\n@mixin arrowTransform( $angle, $x: 0, $y: 0 ) {\n  i:first-child {\n    @include transform( translate( $x, $y ) rotate( $angle ) );\n  }\n\n  i:last-child {\n    @include transform( translate( $x, -$y ) rotate( -$angle ) );\n  }\n}\n\nbutton {\n  -webkit-appearance: none;\n  background: transparent;\n  border: 0;\n  outline: 0;\n}\n\n.paginate {\n  position: relative;\n  margin: 10px;\n  width: $size;\n  height: $size;\n  cursor: pointer;\n  @include transform( translate3d(0,0,0) ); // fixes flicker in webkit\n\n  //position: absolute;\n  //top: 50%;\n  //margin-top: -20px;\n  -webkit-filter: drop-shadow( 0 2px 0px rgba(0,0,0,0.2) );\n\n  i {\n    position: absolute;\n    top: 40%;\n    left: 0;\n    width: $size;\n    height: $thickness;\n    border-radius: $thickness / 2;\n    background: #fff;\n\n    @include transition( all 0.15s ease );\n  }\n\n  &.left {\n    //right: 58%;\n\n    i {\n      @include transform-origin( 0% 50% );\n    }\n\n    @include arrowTransform( $angle, 0, -1px );\n\n    &:hover {\n      @include arrowTransform( $angleHover, 0, -1px );\n    }\n\n    &:active {\n      @include arrowTransform( $angleActive, 1px, -1px );\n    }\n\n    &[disabled] {\n      @include arrowTransform( 0deg, -5px, 0 );\n\n      &:hover {\n        @include arrowTransform( 0deg, -5px, 0 );\n      }\n    }\n  }\n\n  &.right {\n    //left: 58%;\n\n    i {\n      @include transform-origin( 100% 50% );\n    }\n\n    @include arrowTransform( $angle, 0, 1px );\n\n    &:hover {\n      @include arrowTransform( $angleHover, 0, 1px );\n    }\n\n    &:active {\n      @include arrowTransform( $angleActive, 1px, 1px );\n    }\n\n    &[disabled] {\n      @include arrowTransform( 0deg, 5px, 0 );\n\n      &:hover {\n        @include arrowTransform( 0deg, 5px, 0 );\n      }\n    }\n  }\n\n  &[disabled] {\n    opacity: 0.3;\n    cursor: default;\n  }\n}\n\n.pagination {\n  display: flex;\n  flex-direction: row;\n}\n.paginate-counter {\n  text-align: center;\n  //position: absolute;\n  width: 100%;\n  //top: 50%;\n  //margin-top: -15px;\n  font-size: $app-font-size;\n  //text-shadow: 0px 2px 0px rgba( 0, 0, 0, 0.2 );\n  color: $primary-color-text;\n}\n","$white: #fff;\n$black: #111;\n$pink: #c80064;\n$yellow: #f5d500;\n$yellow2: rgb(154,125,51);\n\n$box-shadow: #666;\n\n$text-color: $white;\n$app-background: $black;\n\n\n$primary-color: $yellow;\n$primary-color-text: $white;\n","$margin: 0;\n\n@while $margin <= 80 {\n  .mb-#{$margin} {\n    margin-bottom: #{$margin}px !important;\n  }\n\n  .mt-#{$margin} {\n    margin-top: #{$margin}px !important;\n  }\n\n  .ml-#{$margin} {\n    margin-left: #{$margin}px !important;\n  }\n\n  .mr-#{$margin} {\n    margin-right: #{$margin}px !important;\n  }\n\n  .mx-#{$margin} {\n    margin-left: #{$margin}px !important;\n    margin-right: #{$margin}px !important;\n  }\n\n  .my-#{$margin} {\n    margin-top: #{$margin}px !important;\n    margin-bottom: #{$margin}px !important;\n  }\n\n  $margin: $margin + 5;\n}\n","@import 'colors';\n\n@function strip-unit($value) {\n  @return $value / ($value * 0 + 1);\n}\n\n@mixin fluid-type($min-vw, $max-vw, $min-font-size, $max-font-size) {\n  $u1: unit($min-vw);\n  $u2: unit($max-vw);\n  $u3: unit($min-font-size);\n  $u4: unit($max-font-size);\n\n  @if $u1 == $u2 and $u1 == $u3 and $u1 == $u4 {\n    & {\n\n      font-size: $min-font-size;\n      @media screen and (min-width: $min-vw) {\n        font-size: calc(#{$min-font-size} + #{strip-unit($max-font-size - $min-font-size)} * ((100vw - #{$min-vw}) / #{strip-unit($max-vw - $min-vw)}));\n      }\n\n      @media screen and (min-width: $max-vw) {\n        font-size: $max-font-size;\n      }\n    }\n  }\n}\n\n@mixin transitions($time: 0.4s, $property: all) {\n  transition: $time $property;\n}\n\n@mixin no_select() {\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n\n@mixin box_shadow($color: $box-shadow, $size: 4px) {\n  -webkit-box-shadow: 0 0 $size 0 $color;\n  -moz-box-shadow: 0 0 $size 0 $color;\n  box-shadow: 0 0 $size 0 $color;\n}\n\n@mixin transform($value) {\n  transform: $value;\n  -moz-transform: $value;\n  -o-transform: $value;\n  -webkit-transform: $value;\n}\n\n// keyframes mixin\n@mixin keyframes($name) {\n  @-webkit-keyframes #{$name} {\n    @content;\n  }\n  @-moz-keyframes #{$name} {\n    @content;\n  }\n  @-ms-keyframes #{$name} {\n    @content;\n  }\n  @keyframes #{$name} {\n    @content;\n  }\n}\n","@import 'mixins';\n\n$pulse-move-px: 4px;\n@include keyframes(pulse) {\n  0%, 100% {\n    opacity: 0.2;\n    @include transform(translateY(-$pulse-move-px))\n  }\n  25% {\n    opacity: 0.8;\n  }\n  50% {\n    @include transform(translateY($pulse-move-px))\n  }\n}\n","@import 'mixins';\n@import 'colors';\n@import 'globals';\n@import 'breakpoints';\n\nhtml, body {\n  font-size: $app-font-size;\n}\n\n.w-100 {\n  width: 100%\n}\n\n.relative {\n  position: relative;\n}\n\n.v-hidden {\n  visibility: hidden;\n}\n\n.flex-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.flex-column {\n  display: flex;\n  flex-direction: column;\n}\n\n.space-evenly {\n  justify-content: space-evenly;\n}\n\n.space-around {\n  justify-content: space-around;\n}\n\n.just-left {\n  justify-content: left;\n}\n\n.just-center {\n  justify-content: center;\n}\n\n.align-center {\n  align-items: center;\n}\n\n.accent {\n  color: $primary-color\n}\n\n.accent-bg {\n  background: $primary-color;\n  color: $primary-color-text;\n}\n\n.progress {\n  cursor: progress !important;\n}\n\n.loading {\n  opacity: 0 !important;\n}\n\n.center {\n  text-align: center;\n}\n\n.jumbo {\n  //font-size: $jumbo-font-size;\n  @include fluid-type($breakpoint-mobile-sm - 100px, $breakpoint-max-width, $h2-font-size, $jumbo-font-size);\n}\n\n//@media (max-width: $breakpoint-tablet){\n//  .jumbo {\n//    font-size: $huge-font-size;\n//  }\n//}\n//@media (max-width: $breakpoint-mobile){\n//  .jumbo {\n//    font-size: $huge-font-size;\n//  }\n//}\n\n//@media (max-width: $breakpoint-mobile-sm){\n//  .jumbo {\n//    font-size: $h2-font-size;\n//  }\n//}\n\nh2, .h2 {\n  font-size: $h2-font-size;\n}\n\n.secondary {\n  opacity: 0.4;\n}\n\n.no-deco {\n  text-decoration: none;\n}\n\n.mid-size {\n  font-size: $huge-font-size;\n}\n","@import 'colors';\n@import 'globals';\n@import 'breakpoints';\n\nbody {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: $app-font-size;\n  //font-family: 'Monospaced', monospace;\n  //background: $app-background;\n  color: $primary-color-text;\n}\n\na {\n  color: $primary-color;\n  //text-decoration: underline;\n  &:hover {\n    text-decoration: none;\n  }\n\n  &.no-style {\n    text-decoration: none;\n    color: inherit;\n  }\n}\n\n.app-row {\n  width: calc(100% - #{$name-logo-left * 2});\n  display: flex;\n  flex-direction: column;\n  margin: $app-row-top auto;\n\n  .text {\n    padding: 0 $app-row-text-padding;\n    width: 600px;\n    margin: 0 auto;\n    //margin: 0 auto 0 0;\n  }\n\n  @media(max-width: $breakpoint-mobile) {\n    width: $app-row-width-sm;\n    .text {\n      padding: 0 0;\n    }\n  }\n}\n\n.with-margin {\n  @if($content-with-margin) {\n\n  }\n  @else {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n}\n","@import 'colors';\n\n.cdk-overlay-container:empty {\n  display: none;\n}\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  z-index: 1000;\n}\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.mat-snack-bar-container {\n  border: 3px solid $primary-color;\n  color: $primary-color;\n\n  .mat-simple-snackbar-action > button {\n    border: 1px solid $primary-color;\n    color: $primary-color;\n    box-shadow: 0 0 3px 0 $primary-color;\n  }\n\n  .mat-simple-snackbar {\n    font-size: 14px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2:
/*!*****************************************************************************************!*\
  !*** multi ./node_modules/latte-carousel/dist/latte-carousel.min.css ./src/styles.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Library/WebServer/Documents/portfolio/frontend/portfolio/node_modules/latte-carousel/dist/latte-carousel.min.css */"peLw");
module.exports = __webpack_require__(/*! /Library/WebServer/Documents/portfolio/frontend/portfolio/src/styles.scss */"+EN/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "peLw":
/*!*****************************************************************!*\
  !*** ./node_modules/latte-carousel/dist/latte-carousel.min.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--12-1!../../postcss-loader/src??embedded!./latte-carousel.min.css */ "rz7h");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "rz7h":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./node_modules/latte-carousel/dist/latte-carousel.min.css ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * Latte-Carousel v1.6.1\r\n * https://github.com/latte-carousel/latte-carousel\n */\n.latte-carousel{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-drag:none}\n.latte-carousel,.latte-content{font-size:0;display:inline-block;box-sizing:border-box;width:100%;margin:0;padding:0;border:0}\n.latte-content{overflow:hidden}\n.latte-stage{position:relative}\n.latte-item,.latte-stage{font-size:0;display:inline-block;box-sizing:border-box;margin:0;padding:0;border:0}\n.latte-item{overflow:hidden}\n.latte-item *{font-size:medium}\n.latte-next,.latte-previous{position:absolute;z-index:10;top:50%;display:inline-block;box-sizing:border-box;width:0;height:0;margin:-11px 0 0;padding:10px;cursor:pointer;border:solid #333;border-width:0 2px 2px 0;background:rgba(0,0,0,0)}\n.latte-next.invisible,.latte-previous.invisible{display:none}\n.latte-previous{left:-6px;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg)}\n.latte-next{right:-6px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}\n.latte-dots{position:absolute;bottom:-25px;left:0;display:inline-block;box-sizing:border-box;width:100%;text-align:center}\n.latte-dots.invisible{display:none}\n.latte-dots .latte-dot{display:inline-block;box-sizing:border-box;width:15px;height:15px;margin:5px;cursor:pointer;border-radius:15px;background-color:#ddd}\n.latte-dots .latte-dot.active{background-color:#aaa}\n/*# sourceMappingURL=latte-carousel.min.css.map*/", "",{"version":3,"sources":["webpack://node_modules/latte-carousel/dist/latte-carousel.min.css","webpack://latte/src/scss/_carousel.scss","webpack://latte/src/scss/_content.scss","webpack://latte/src/scss/_stage.scss","webpack://latte/src/scss/_item.scss","webpack://latte/src/scss/_button.scss","webpack://latte/src/scss/_dots.scss"],"names":[],"mappings":"AAAA;;;EAGE;ACHF,gBAGI,iBAAkB,CASlB,wBAAiB,CAAjB,qBAAiB,CAAjB,oBAAiB,CAAjB,gBAAiB,CAIjB,sBAAuB,CACvB,mBAAoB;AACvB,+BAjBG,WAAY,CAIZ,oBAAqB,CAErB,qBAAsB,CACtB,UAAW,CACX,QAAS,CACT,SAAU,CAIV,QCHS;ADOZ,eCdG,eAOS;AACZ,aCTG,iBAQS;AACZ,yBAXG,WAAY,CAIZ,oBAAqB,CAErB,qBAAsB,CACtB,QAAS,CACT,SAAU,CAEV,QCDS;ADEZ,YCRG,eAMS;AAVb,cAaQ,gBAAkB;AACrB,4BCZD,iBAAkB,CAClB,UAAW,CACX,OAAQ,CAER,oBAAqB,CAErB,qBAAsB,CACtB,OAAQ,CACR,QAAS,CAET,gBAAiB,CACjB,YAAa,CAEb,cAAe,CAGf,iBAAyB,CAAzB,wBAAyB,CACzB,wBAAuB;AAnB3B,gDAsBQ,YAAa;AAChB,gBAID,SAAU,CAEV,gCAAW,CAAX,4BAAW,CAAX,wBAAyB;AAC5B,YAGG,UAAW,CAEX,gCAAW,CAAX,4BAAW,CAAX,wBAAyB;AAC5B,YCnCG,iBAAkB,CAClB,YAAa,CACb,MAAO,CAEP,oBAAqB,CAErB,qBAAsB,CACtB,UAAW,CAEX,iBAAkB;AAVtB,sBAaQ,YAAa;AAbrB,uBAiBQ,oBAAqB,CAErB,qBAAsB,CACtB,UAAW,CACX,WAAY,CACZ,UAAW,CAEX,cAAe,CAEf,kBAAmB,CACnB,qBAAyB;AA3BjC,8BA8BY,qBAAyB;ANxBrC,gDAAgD","sourcesContent":["/*!\n * Latte-Carousel v1.6.1\r\n * https://github.com/latte-carousel/latte-carousel\n */\n.latte-carousel{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-drag:none}.latte-carousel,.latte-content{font-size:0;display:inline-block;box-sizing:border-box;width:100%;margin:0;padding:0;border:0}.latte-content{overflow:hidden}.latte-stage{position:relative}.latte-item,.latte-stage{font-size:0;display:inline-block;box-sizing:border-box;margin:0;padding:0;border:0}.latte-item{overflow:hidden}.latte-item *{font-size:medium}.latte-next,.latte-previous{position:absolute;z-index:10;top:50%;display:inline-block;box-sizing:border-box;width:0;height:0;margin:-11px 0 0;padding:10px;cursor:pointer;border:solid #333;border-width:0 2px 2px 0;background:rgba(0,0,0,0)}.latte-next.invisible,.latte-previous.invisible{display:none}.latte-previous{left:-6px;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg)}.latte-next{right:-6px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.latte-dots{position:absolute;bottom:-25px;left:0;display:inline-block;box-sizing:border-box;width:100%;text-align:center}.latte-dots.invisible{display:none}.latte-dots .latte-dot{display:inline-block;box-sizing:border-box;width:15px;height:15px;margin:5px;cursor:pointer;border-radius:15px;background-color:#ddd}.latte-dots .latte-dot.active{background-color:#aaa}\n\n/*# sourceMappingURL=latte-carousel.min.css.map*/",".latte-carousel {\n    font-size: 0;\n\n    position: relative;\n\n    display: inline-block;\n\n    box-sizing: border-box;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n\n    user-select: none;\n\n    border: 0;\n\n    -webkit-user-drag: none;\n    -moz-user-drag: none;\r\n}\r\n",".latte-content {\n    font-size: 0;\n\n    display: inline-block;\n    overflow: hidden;\n\n    box-sizing: border-box;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n\n    border: 0;\r\n}\r\n",".latte-stage {\n    font-size: 0;\n\n    position: relative;\n\n    display: inline-block;\n\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n\n    border: 0;\r\n}\r\n",".latte-item {\n    font-size: 0;\n\n    display: inline-block;\n    overflow: hidden;\n\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n\n    border: 0;\r\n\r\n    * {\n        font-size: initial;\r\n    }\n}\r\n",".latte-previous,\n.latte-next {\n    position: absolute;\n    z-index: 10;\n    top: 50%;\n\n    display: inline-block;\n\n    box-sizing: border-box;\n    width: 0;\n    height: 0;\n    margin: 0;\n    margin-top: -11px;\n    padding: 10px;\n\n    cursor: pointer;\n\n    border: solid #333333;\n    border-width: 0 2px 2px 0;\n    background: transparent;\r\n\r\n    &.invisible {\n        display: none;\r\n    }\n}\r\n\r\n.latte-previous {\n    left: -6px;\n\n    transform: rotate(135deg);\r\n}\r\n\r\n.latte-next {\n    right: -6px;\n\n    transform: rotate(-45deg);\r\n}\r\n",".latte-dots {\n    position: absolute;\n    bottom: -25px;\n    left: 0;\n\n    display: inline-block;\n\n    box-sizing: border-box;\n    width: 100%;\n\n    text-align: center;\r\n\r\n    &.invisible {\n        display: none;\r\n    }\r\n\r\n    .latte-dot {\n        display: inline-block;\n\n        box-sizing: border-box;\n        width: 15px;\n        height: 15px;\n        margin: 5px;\n\n        cursor: pointer;\n\n        border-radius: 15px;\n        background-color: #dddddd;\r\n\r\n        &.active {\n            background-color: #aaaaaa;\r\n        }\n    }\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.f1dad2b4c77f03ad3cc1.js.map