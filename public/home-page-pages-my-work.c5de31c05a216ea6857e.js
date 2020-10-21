(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-page-pages-my-work"],{

/***/ "0kd+":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/pages/my-work/index.ts ***!
  \********************************************************/
/*! exports provided: MyWorkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_work_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-work.module */ "phuS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyWorkModule", function() { return _my_work_module__WEBPACK_IMPORTED_MODULE_0__["MyWorkModule"]; });




/***/ }),

/***/ "Fik7":
/*!********************************************************************!*\
  !*** ./src/app/pages/home-page/pages/my-work/my-work.component.ts ***!
  \********************************************************************/
/*! exports provided: MyWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWorkComponent", function() { return MyWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~app/shared/animations */ "aDQ/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_modules_text_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~app/modules/text/text.component */ "PYwK");





class MyWorkComponent {
    constructor(route) {
        this.route = route;
        this.myWork = this.route.snapshot.data.myWork;
    }
    ngOnInit() {
    }
}
MyWorkComponent.ɵfac = function MyWorkComponent_Factory(t) { return new (t || MyWorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
MyWorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyWorkComponent, selectors: [["app-my-work"]], decls: 4, vars: 3, consts: [[1, "app-row", "with-margin"], [1, "jumbo", "slide-in", "center", 3, "innerHTML"], [1, "text"], [3, "text"]], template: function MyWorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.myWork.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx.myWork.text);
    } }, directives: [_app_modules_text_text_component__WEBPACK_IMPORTED_MODULE_3__["TextComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9wYWdlcy9teS13b3JrL215LXdvcmsuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [Object(_app_shared_animations__WEBPACK_IMPORTED_MODULE_1__["slideIn"])()] }, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyWorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-work',
                templateUrl: './my-work.component.html',
                styleUrls: ['./my-work.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                animations: [Object(_app_shared_animations__WEBPACK_IMPORTED_MODULE_1__["slideIn"])()]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "YCRP":
/*!*************************************************************************!*\
  !*** ./src/app/pages/home-page/pages/my-work/shared/resolvers/index.ts ***!
  \*************************************************************************/
/*! exports provided: MyWorkResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_work_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-work.resolver */ "lmYv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyWorkResolver", function() { return _my_work_resolver__WEBPACK_IMPORTED_MODULE_0__["MyWorkResolver"]; });




/***/ }),

/***/ "lmYv":
/*!************************************************************************************!*\
  !*** ./src/app/pages/home-page/pages/my-work/shared/resolvers/my-work.resolver.ts ***!
  \************************************************************************************/
/*! exports provided: MyWorkResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWorkResolver", function() { return MyWorkResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~env/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class MyWorkResolver {
    constructor(http) {
        this.http = http;
    }
    resolve() {
        if (MyWorkResolver.myWork) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(MyWorkResolver.myWork);
        }
        return this.http
            .get(`${_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url}/section/${"work" /* Work */}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((myWork) => (MyWorkResolver.myWork = myWork)));
    }
}
MyWorkResolver.ɵfac = function MyWorkResolver_Factory(t) { return new (t || MyWorkResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MyWorkResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MyWorkResolver, factory: MyWorkResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyWorkResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "phuS":
/*!*****************************************************************!*\
  !*** ./src/app/pages/home-page/pages/my-work/my-work.module.ts ***!
  \*****************************************************************/
/*! exports provided: MyWorkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWorkModule", function() { return MyWorkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _my_work_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-work.component */ "Fik7");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~app/shared */ "M0ag");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page_pages_my_work_shared_resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~home-page/pages/my-work/shared/resolvers */ "YCRP");
/* harmony import */ var _app_modules_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~app/modules/text */ "1U8Q");








class MyWorkModule {
}
MyWorkModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyWorkModule });
MyWorkModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyWorkModule_Factory(t) { return new (t || MyWorkModule)(); }, providers: [
        _home_page_pages_my_work_shared_resolvers__WEBPACK_IMPORTED_MODULE_4__["MyWorkResolver"]
    ], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: '',
                    component: _my_work_component__WEBPACK_IMPORTED_MODULE_1__["MyWorkComponent"],
                    resolve: {
                        myWork: _home_page_pages_my_work_shared_resolvers__WEBPACK_IMPORTED_MODULE_4__["MyWorkResolver"]
                    }
                }
            ]),
            _app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _app_modules_text__WEBPACK_IMPORTED_MODULE_5__["TextModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyWorkModule, { declarations: [_my_work_component__WEBPACK_IMPORTED_MODULE_1__["MyWorkComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _app_modules_text__WEBPACK_IMPORTED_MODULE_5__["TextModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyWorkModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _my_work_component__WEBPACK_IMPORTED_MODULE_1__["MyWorkComponent"]
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _my_work_component__WEBPACK_IMPORTED_MODULE_1__["MyWorkComponent"],
                            resolve: {
                                myWork: _home_page_pages_my_work_shared_resolvers__WEBPACK_IMPORTED_MODULE_4__["MyWorkResolver"]
                            }
                        }
                    ]),
                    _app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _app_modules_text__WEBPACK_IMPORTED_MODULE_5__["TextModule"]
                ],
                providers: [
                    _home_page_pages_my_work_shared_resolvers__WEBPACK_IMPORTED_MODULE_4__["MyWorkResolver"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=home-page-pages-my-work.c5de31c05a216ea6857e.js.map