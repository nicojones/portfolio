(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-page-pages-about"],{

/***/ "/1Ee":
/*!******************************************************!*\
  !*** ./src/app/pages/home-page/pages/about/index.ts ***!
  \******************************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.module */ "p1YJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return _about_module__WEBPACK_IMPORTED_MODULE_0__["AboutModule"]; });




/***/ }),

/***/ "NKJy":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/home-page/pages/about/shared/resolvers/about-page.resolver.ts ***!
  \*************************************************************************************/
/*! exports provided: AboutPageResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageResolver", function() { return AboutPageResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~env/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class AboutPageResolver {
    constructor(http) {
        this.http = http;
    }
    resolve() {
        if (AboutPageResolver.aboutPage) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(AboutPageResolver.aboutPage);
        }
        return this.http
            .get(`${_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url}/section/${"about" /* About */}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((aboutPage) => (AboutPageResolver.aboutPage = aboutPage)));
    }
}
AboutPageResolver.ɵfac = function AboutPageResolver_Factory(t) { return new (t || AboutPageResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AboutPageResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AboutPageResolver, factory: AboutPageResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutPageResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "gbzE":
/*!*******************************************!*\
  !*** ./src/app/modules/book/last-book.ts ***!
  \*******************************************/
/*! exports provided: lastBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastBook", function() { return lastBook; });
const lastBook = {
    title: 'More on Goodreads.com',
    link: 'https://www.goodreads.com/review/list/48022935-nico-jones?ref=nav_mybooks&shelf=read',
    image: '/assets/images/nico.png',
    descr: 'This were the books I read since January last year. If you would like to see the complete list of books, please visit my profile on Goodreads.',
    pages: null
};


/***/ }),

/***/ "p1YJ":
/*!*************************************************************!*\
  !*** ./src/app/pages/home-page/pages/about/about.module.ts ***!
  \*************************************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~app/shared */ "M0ag");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "w+n7");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~app/services */ "o0su");
/* harmony import */ var _app_modules_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~app/modules/carousel */ "4Fwo");
/* harmony import */ var _home_page_pages_about_shared_resolvers_about_page_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~home-page/pages/about/shared/resolvers/about-page.resolver */ "NKJy");
/* harmony import */ var _app_modules_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~app/modules/text */ "1U8Q");










class AboutModule {
}
AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutModule_Factory(t) { return new (t || AboutModule)(); }, providers: [
        _app_services__WEBPACK_IMPORTED_MODULE_4__["BooksService"],
        _home_page_pages_about_shared_resolvers_about_page_resolver__WEBPACK_IMPORTED_MODULE_6__["AboutPageResolver"]
    ], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                {
                    path: '',
                    component: _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
                    resolve: {
                        aboutPage: _home_page_pages_about_shared_resolvers_about_page_resolver__WEBPACK_IMPORTED_MODULE_6__["AboutPageResolver"]
                    }
                }
            ]),
            _app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _app_modules_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
            _app_modules_text__WEBPACK_IMPORTED_MODULE_7__["TextModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _app_modules_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
        _app_modules_text__WEBPACK_IMPORTED_MODULE_7__["TextModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
                            resolve: {
                                aboutPage: _home_page_pages_about_shared_resolvers_about_page_resolver__WEBPACK_IMPORTED_MODULE_6__["AboutPageResolver"]
                            }
                        }
                    ]),
                    _app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _app_modules_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
                    _app_modules_text__WEBPACK_IMPORTED_MODULE_7__["TextModule"]
                ],
                providers: [
                    _app_services__WEBPACK_IMPORTED_MODULE_4__["BooksService"],
                    _home_page_pages_about_shared_resolvers_about_page_resolver__WEBPACK_IMPORTED_MODULE_6__["AboutPageResolver"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "w+n7":
/*!****************************************************************!*\
  !*** ./src/app/pages/home-page/pages/about/about.component.ts ***!
  \****************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~routes/routes */ "io67");
/* harmony import */ var _app_shared_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~app/shared/animations */ "aDQ/");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~app/services */ "o0su");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _app_modules_book_last_book__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~app/modules/book/last-book */ "gbzE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_modules_text_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~app/modules/text/text.component */ "PYwK");
/* harmony import */ var _app_modules_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~app/modules/carousel/carousel.component */ "TfxY");












function AboutComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 12);
} if (rf & 2) {
    const multi_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("shown", ctx_r0.plusIndex === i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", multi_r4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AboutComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "some books...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AboutComponent_ng_container_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "no books.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AboutComponent_ng_container_16_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "one book.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AboutComponent_ng_container_16_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r8.shelf.reading.length, " books, among them ", ctx_r8.shelf.reading[0].title, ". ");
} }
function AboutComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AboutComponent_ng_container_16_ng_container_1_Template, 2, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AboutComponent_ng_container_16_ng_container_2_Template, 2, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AboutComponent_ng_container_16_ng_container_3_Template, 2, 2, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r2.shelf.reading.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
} }
function AboutComponent_app_carousel_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-carousel", 16);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("books", ctx_r3.shelf.read)("title", ctx_r3.title)("wrap", true)("totalBooks", ctx_r3.shelf.totalRead)("lastBook", ctx_r3.lastBook);
} }
class AboutComponent {
    constructor(route, booksService, ref) {
        this.route = route;
        this.booksService = booksService;
        this.ref = ref;
        this.Routes = _routes_routes__WEBPACK_IMPORTED_MODULE_1__["Routes"];
        this.shelf = _app_services__WEBPACK_IMPORTED_MODULE_3__["BooksService"].shelf;
        this.lastBook = _app_modules_book_last_book__WEBPACK_IMPORTED_MODULE_5__["lastBook"];
        this.title = 'books I\'ve read';
        this.plusIndex = 0;
        this.aboutPage = this.route.snapshot.data.aboutPage;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(this.booksService.getCurrentlyReading(), this.booksService.getReadBooks())
            .subscribe(() => this.ref.markForCheck());
        setInterval(() => {
            this.plusIndex = (this.plusIndex + 1) % (this.aboutPage.title.multi.length);
            this.ref.markForCheck();
        }, 5000);
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["BooksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 22, vars: 10, consts: [[1, "app-row", "with-margin"], [1, "jumbo", "slide-in", "center"], [1, "accent"], [1, "plus-box"], [3, "innerHTML", "shown", 4, "ngFor", "ngForOf"], [1, "text"], [3, "text"], [1, "slide-in"], [4, "ngIf"], [3, "ngSwitch", 4, "ngIf"], [3, "routerLink"], ["class", "mt-20", 3, "books", "title", "wrap", "totalBooks", "lastBook", 4, "ngIf"], [3, "innerHTML"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "mt-20", 3, "books", "title", "wrap", "totalBooks", "lastBook"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AboutComponent_span_6_Template, 1, 3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Currently reading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AboutComponent_ng_container_15_Template, 2, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AboutComponent_ng_container_16_Template, 4, 3, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " You can see them ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AboutComponent_app_carousel_21_Template, 1, 5, "app-carousel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aboutPage.title.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aboutPage.title.multi);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aboutPage.title.last);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.aboutPage.title.period, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx.aboutPage.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.shelf.reading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shelf.reading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + ctx.Routes.Reading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shelf.read);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _app_modules_text_text_component__WEBPACK_IMPORTED_MODULE_8__["TextComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _app_modules_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__["CarouselComponent"]], styles: [".plus-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n}\n\n.plus-box[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  transition: 0.4s all;\n  position: absolute;\n  opacity: 0;\n}\n\n.plus-box[_ngcontent-%COMP%]    > span.shown[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0FBRHpCOztBQUZBO0VDMEJFLG9CQUQ0QztFRGxCMUMsa0JBQWtCO0VBQ2xCLFVBQVU7QUFBZDs7QUFSQTtFQVdNLFVBQVU7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuXG4ucGx1cy1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gID4gc3BhbiB7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbnMoKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcblxuICAgICYuc2hvd24ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ2NvbG9ycyc7XG5cbkBmdW5jdGlvbiBzdHJpcC11bml0KCR2YWx1ZSkge1xuICBAcmV0dXJuICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7XG59XG5cbkBtaXhpbiBmbHVpZC10eXBlKCRtaW4tdncsICRtYXgtdncsICRtaW4tZm9udC1zaXplLCAkbWF4LWZvbnQtc2l6ZSkge1xuICAkdTE6IHVuaXQoJG1pbi12dyk7XG4gICR1MjogdW5pdCgkbWF4LXZ3KTtcbiAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcbiAgJHU0OiB1bml0KCRtYXgtZm9udC1zaXplKTtcblxuICBAaWYgJHUxID09ICR1MiBhbmQgJHUxID09ICR1MyBhbmQgJHUxID09ICR1NCB7XG4gICAgJiB7XG5cbiAgICAgIGZvbnQtc2l6ZTogJG1pbi1mb250LXNpemU7XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluLXZ3KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygjeyRtaW4tZm9udC1zaXplfSArICN7c3RyaXAtdW5pdCgkbWF4LWZvbnQtc2l6ZSAtICRtaW4tZm9udC1zaXplKX0gKiAoKDEwMHZ3IC0gI3skbWluLXZ3fSkgLyAje3N0cmlwLXVuaXQoJG1heC12dyAtICRtaW4tdncpfSkpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWF4LXZ3KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJG1heC1mb250LXNpemU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9ucygkdGltZTogMC40cywgJHByb3BlcnR5OiBhbGwpIHtcbiAgdHJhbnNpdGlvbjogJHRpbWUgJHByb3BlcnR5O1xufVxuXG5AbWl4aW4gbm9fc2VsZWN0KCkge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIGJveF9zaGFkb3coJGNvbG9yOiAkYm94LXNoYWRvdywgJHNpemU6IDRweCkge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAkc2l6ZSAwICRjb2xvcjtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgJHNpemUgMCAkY29sb3I7XG4gIGJveC1zaGFkb3c6IDAgMCAkc2l6ZSAwICRjb2xvcjtcbn1cblxuQG1peGluIHRyYW5zZm9ybSgkdmFsdWUpIHtcbiAgdHJhbnNmb3JtOiAkdmFsdWU7XG4gIC1tb3otdHJhbnNmb3JtOiAkdmFsdWU7XG4gIC1vLXRyYW5zZm9ybTogJHZhbHVlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogJHZhbHVlO1xufVxuXG4vLyBrZXlmcmFtZXMgbWl4aW5cbkBtaXhpbiBrZXlmcmFtZXMoJG5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1vei1rZXlmcmFtZXMgI3skbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbXMta2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */"], data: { animation: [Object(_app_shared_animations__WEBPACK_IMPORTED_MODULE_2__["slideIn"])()] }, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                animations: [Object(_app_shared_animations__WEBPACK_IMPORTED_MODULE_2__["slideIn"])()]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["BooksService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=home-page-pages-about.d894c9f1927188456306.js.map