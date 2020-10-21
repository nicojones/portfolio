(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["goodreads-goodreads-module"],{

/***/ "Squv":
/*!*******************************************!*\
  !*** ./src/app/shared/resolvers/index.ts ***!
  \*******************************************/
/*! exports provided: ReadingBooksResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reading_books_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reading-books-resolver.service */ "n9Rc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReadingBooksResolver", function() { return _reading_books_resolver_service__WEBPACK_IMPORTED_MODULE_0__["ReadingBooksResolver"]; });




/***/ }),

/***/ "SuX4":
/*!********************************************************!*\
  !*** ./src/app/pages/goodreads/goodreads.component.ts ***!
  \********************************************************/
/*! exports provided: GoodreadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodreadsComponent", function() { return GoodreadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~app/shared/animations */ "aDQ/");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~app/services */ "o0su");
/* harmony import */ var _app_modules_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~app/modules/carousel/carousel.component */ "TfxY");






class GoodreadsComponent {
    constructor(booksService) {
        this.booksService = booksService;
        /**
         * List of Goodreads books
         */
        this.shelf = _app_services__WEBPACK_IMPORTED_MODULE_2__["BooksService"].shelf;
        /**
         * Title for the carousel.
         */
        this.title = {
            reading: 'currently reading',
            read: 'read since last january'
        };
    }
}
GoodreadsComponent.ɵfac = function GoodreadsComponent_Factory(t) { return new (t || GoodreadsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["BooksService"])); };
GoodreadsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoodreadsComponent, selectors: [["app-goodreads"]], decls: 9, vars: 5, consts: [[1, "flex-row", "app-row", "space-around", "with-margin"], [1, "jumbo", "slide-in"], [1, "accent"], [3, "books", "title"], [1, "slide-in", "w-100"]], template: function GoodreadsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "I read ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "a lot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-carousel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-carousel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("books", ctx.shelf.reading)("title", ctx.title.reading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("books", ctx.shelf.read)("title", ctx.title.read);
    } }, directives: [_app_modules_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dvb2RyZWFkcy9nb29kcmVhZHMuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [Object(_app_shared_animations__WEBPACK_IMPORTED_MODULE_1__["slideIn"])()] }, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoodreadsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-goodreads',
                templateUrl: './goodreads.component.html',
                styleUrls: ['./goodreads.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                animations: [Object(_app_shared_animations__WEBPACK_IMPORTED_MODULE_1__["slideIn"])()]
            }]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_2__["BooksService"] }]; }, null); })();


/***/ }),

/***/ "jxwG":
/*!*****************************************************!*\
  !*** ./src/app/pages/goodreads/goodreads.module.ts ***!
  \*****************************************************/
/*! exports provided: GoodreadsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodreadsModule", function() { return GoodreadsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~app/shared */ "M0ag");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~app/services */ "o0su");
/* harmony import */ var _goodreads_goodreads_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~goodreads/goodreads.component */ "SuX4");
/* harmony import */ var _app_modules_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~app/modules/carousel */ "4Fwo");
/* harmony import */ var _app_shared_resolvers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~app/shared/resolvers */ "Squv");
/* harmony import */ var _app_shared_resolvers_read_books_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~app/shared/resolvers/read-books-resolver.service */ "lZKX");










class GoodreadsModule {
}
GoodreadsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GoodreadsModule });
GoodreadsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GoodreadsModule_Factory(t) { return new (t || GoodreadsModule)(); }, providers: [
        _app_services__WEBPACK_IMPORTED_MODULE_3__["BooksService"],
        _app_shared_resolvers__WEBPACK_IMPORTED_MODULE_6__["ReadingBooksResolver"],
        _app_shared_resolvers_read_books_resolver_service__WEBPACK_IMPORTED_MODULE_7__["ReadBooksResolver"]
    ], imports: [[
            _app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _app_modules_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                {
                    path: '',
                    component: _goodreads_goodreads_component__WEBPACK_IMPORTED_MODULE_4__["GoodreadsComponent"],
                    resolve: {
                        reading: _app_shared_resolvers__WEBPACK_IMPORTED_MODULE_6__["ReadingBooksResolver"],
                        read: _app_shared_resolvers_read_books_resolver_service__WEBPACK_IMPORTED_MODULE_7__["ReadBooksResolver"]
                    }
                }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GoodreadsModule, { declarations: [_goodreads_goodreads_component__WEBPACK_IMPORTED_MODULE_4__["GoodreadsComponent"]], imports: [_app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _app_modules_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoodreadsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _app_modules_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _goodreads_goodreads_component__WEBPACK_IMPORTED_MODULE_4__["GoodreadsComponent"],
                            resolve: {
                                reading: _app_shared_resolvers__WEBPACK_IMPORTED_MODULE_6__["ReadingBooksResolver"],
                                read: _app_shared_resolvers_read_books_resolver_service__WEBPACK_IMPORTED_MODULE_7__["ReadBooksResolver"]
                            }
                        }
                    ])
                ],
                declarations: [
                    _goodreads_goodreads_component__WEBPACK_IMPORTED_MODULE_4__["GoodreadsComponent"]
                ],
                exports: [],
                providers: [
                    _app_services__WEBPACK_IMPORTED_MODULE_3__["BooksService"],
                    _app_shared_resolvers__WEBPACK_IMPORTED_MODULE_6__["ReadingBooksResolver"],
                    _app_shared_resolvers_read_books_resolver_service__WEBPACK_IMPORTED_MODULE_7__["ReadBooksResolver"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "lZKX":
/*!*****************************************************************!*\
  !*** ./src/app/shared/resolvers/read-books-resolver.service.ts ***!
  \*****************************************************************/
/*! exports provided: ReadBooksResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadBooksResolver", function() { return ReadBooksResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~app/services */ "o0su");



class ReadBooksResolver {
    constructor(booksService) {
        this.booksService = booksService;
    }
    resolve() {
        return this.booksService.getReadBooks();
    }
}
ReadBooksResolver.ɵfac = function ReadBooksResolver_Factory(t) { return new (t || ReadBooksResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["BooksService"])); };
ReadBooksResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReadBooksResolver, factory: ReadBooksResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReadBooksResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_1__["BooksService"] }]; }, null); })();


/***/ }),

/***/ "n9Rc":
/*!********************************************************************!*\
  !*** ./src/app/shared/resolvers/reading-books-resolver.service.ts ***!
  \********************************************************************/
/*! exports provided: ReadingBooksResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingBooksResolver", function() { return ReadingBooksResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~app/services */ "o0su");



class ReadingBooksResolver {
    constructor(booksService) {
        this.booksService = booksService;
    }
    resolve() {
        return this.booksService.getCurrentlyReading();
    }
}
ReadingBooksResolver.ɵfac = function ReadingBooksResolver_Factory(t) { return new (t || ReadingBooksResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["BooksService"])); };
ReadingBooksResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReadingBooksResolver, factory: ReadingBooksResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReadingBooksResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_1__["BooksService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=goodreads-goodreads-module.f577f573c107f9c949f0.js.map