(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-page-home-page-module"],{

/***/ "6DQq":
/*!************************************************************************!*\
  !*** ./src/app/pages/home-page/shared/resolvers/home-page.resolver.ts ***!
  \************************************************************************/
/*! exports provided: HomePageResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageResolver", function() { return HomePageResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~env/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class HomePageResolver {
    constructor(http) {
        this.http = http;
    }
    resolve() {
        if (HomePageResolver.homePage) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(HomePageResolver.homePage);
        }
        return this.http
            .get(`${_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url}/section/${"home" /* Home */}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((homePage) => (HomePageResolver.homePage = homePage)));
    }
}
HomePageResolver.ɵfac = function HomePageResolver_Factory(t) { return new (t || HomePageResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
HomePageResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomePageResolver, factory: HomePageResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "FayZ":
/*!******************************************************!*\
  !*** ./src/app/pages/home-page/home-page.routing.ts ***!
  \******************************************************/
/*! exports provided: HomePageRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRouting", function() { return HomePageRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~home-page/home-page.component */ "JFIp");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~routes/routes */ "io67");
/* harmony import */ var _home_page_shared_resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~home-page/shared/resolvers */ "g0V9");







class HomePageRouting {
}
HomePageRouting.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomePageRouting });
HomePageRouting.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomePageRouting_Factory(t) { return new (t || HomePageRouting)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"],
                    resolve: {
                        homePage: _home_page_shared_resolvers__WEBPACK_IMPORTED_MODULE_4__["HomePageResolver"]
                    }
                },
                {
                    path: _routes_routes__WEBPACK_IMPORTED_MODULE_3__["Routes"].Contact,
                    loadChildren: () => Promise.all(/*! import() | home-page-pages-contact-me */[__webpack_require__.e("common"), __webpack_require__.e("home-page-pages-contact-me")]).then(__webpack_require__.bind(null, /*! ~home-page/pages/contact-me */ "mABs")).then((m) => m.ContactMeModule)
                },
                {
                    path: _routes_routes__WEBPACK_IMPORTED_MODULE_3__["Routes"].About,
                    loadChildren: () => Promise.all(/*! import() | home-page-pages-about */[__webpack_require__.e("default~goodreads-goodreads-module~home-page-pages-about"), __webpack_require__.e("common"), __webpack_require__.e("home-page-pages-about")]).then(__webpack_require__.bind(null, /*! ~home-page/pages/about */ "/1Ee")).then((m) => m.AboutModule)
                },
                {
                    path: _routes_routes__WEBPACK_IMPORTED_MODULE_3__["Routes"].Work,
                    loadChildren: () => Promise.all(/*! import() | home-page-pages-my-work */[__webpack_require__.e("common"), __webpack_require__.e("home-page-pages-my-work")]).then(__webpack_require__.bind(null, /*! ~home-page/pages/my-work */ "0kd+")).then((m) => m.MyWorkModule)
                }
            ])
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomePageRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageRouting, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"],
                            resolve: {
                                homePage: _home_page_shared_resolvers__WEBPACK_IMPORTED_MODULE_4__["HomePageResolver"]
                            }
                        },
                        {
                            path: _routes_routes__WEBPACK_IMPORTED_MODULE_3__["Routes"].Contact,
                            loadChildren: () => Promise.all(/*! import() | home-page-pages-contact-me */[__webpack_require__.e("common"), __webpack_require__.e("home-page-pages-contact-me")]).then(__webpack_require__.bind(null, /*! ~home-page/pages/contact-me */ "mABs")).then((m) => m.ContactMeModule)
                        },
                        {
                            path: _routes_routes__WEBPACK_IMPORTED_MODULE_3__["Routes"].About,
                            loadChildren: () => Promise.all(/*! import() | home-page-pages-about */[__webpack_require__.e("default~goodreads-goodreads-module~home-page-pages-about"), __webpack_require__.e("common"), __webpack_require__.e("home-page-pages-about")]).then(__webpack_require__.bind(null, /*! ~home-page/pages/about */ "/1Ee")).then((m) => m.AboutModule)
                        },
                        {
                            path: _routes_routes__WEBPACK_IMPORTED_MODULE_3__["Routes"].Work,
                            loadChildren: () => Promise.all(/*! import() | home-page-pages-my-work */[__webpack_require__.e("common"), __webpack_require__.e("home-page-pages-my-work")]).then(__webpack_require__.bind(null, /*! ~home-page/pages/my-work */ "0kd+")).then((m) => m.MyWorkModule)
                        }
                    ])
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "JFIp":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~app/shared/animations */ "aDQ/");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~app/services */ "o0su");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function HomePageComponent_div_0_div_2_small_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "small", 11);
} if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", t_r4.mini, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function HomePageComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomePageComponent_div_0_div_2_small_5_Template, 1, 1, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("accent", t_r4.accent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + t_r4.url)("innerHTML", t_r4.textHover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", t_r4.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", t_r4.mini);
} }
function HomePageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@fadeIn.done", function HomePageComponent_div_0_Template_div_animation_fadeIn_done_1_listener() { const __r2 = ctx.ngIf; return __r2.loading = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomePageComponent_div_0_div_2_Template, 6, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const __r2 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show-menu", ctx_r0.showMenu)("hover-effects", !(__r2.loading || ctx_r0.clientOs.isMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.homePage.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loading", __r2.loading);
} }
function HomePageComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.homePage.mobileTap);
} }
const _c0 = function () { return { loading: true }; };
class HomePageComponent {
    constructor(route) {
        this.route = route;
        this.showMenu = false;
        this.clientOs = Object(_app_services__WEBPACK_IMPORTED_MODULE_2__["getLocalStorage"])().getItem("co" /* ClientOS */);
        this.homePage = this.route.snapshot.data.homePage;
    }
    toggleMenu() {
        if (this.clientOs.isMobile) {
            this.showMenu = !this.showMenu;
        }
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home"]], decls: 2, vars: 3, consts: [["class", "home app-row my-0", 3, "click", 4, "ngIf"], ["class", "tap-anywhere", 4, "ngIf"], [1, "home", "app-row", "my-0", 3, "click"], [1, "jumbo-box"], ["class", "jumbo-line fade-in", 3, "accent", 4, "ngFor", "ngForOf"], [1, "myself"], [1, "jumbo-line", "fade-in"], [1, "jumbo", "hover-item", "link"], [1, "no-style", 3, "routerLink", "innerHTML"], [1, "jumbo", "hover-item", "hello"], ["class", "mini", 3, "innerHTML", 4, "ngIf"], [1, "mini", 3, "innerHTML"], [1, "tap-anywhere"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomePageComponent_div_0_Template, 4, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomePageComponent_span_1_Template, 2, 1, "span", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clientOs.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".jumbo-box.show-menu[_ngcontent-%COMP%]    > .jumbo-line[_ngcontent-%COMP%]    > h1.hello[_ngcontent-%COMP%], .jumbo-box.hover-effects[_ngcontent-%COMP%]    > .jumbo-line[_ngcontent-%COMP%]:hover    > h1.hello[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.jumbo-box.show-menu[_ngcontent-%COMP%]    > .jumbo-line[_ngcontent-%COMP%]    > h1.link[_ngcontent-%COMP%], .jumbo-box.hover-effects[_ngcontent-%COMP%]    > .jumbo-line[_ngcontent-%COMP%]:hover    > h1.link[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.home[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.home[_ngcontent-%COMP%]   .myself[_ngcontent-%COMP%] {\n  transition: 2s all;\n  position: absolute;\n  right: 0;\n  width: calc(25% + 15rem);\n  height: 90%;\n  top: 10%;\n  overflow: hidden;\n  background-image: url(\"/assets/images/nico.png\");\n  background-position: 2.5rem 0;\n  background-size: cover;\n  background-repeat: no-repeat;\n  z-index: -1;\n  opacity: 0.7;\n}\n\n@media (max-width: 500px) {\n  .home[_ngcontent-%COMP%]   .myself[_ngcontent-%COMP%] {\n    opacity: 0.3;\n  }\n}\n\n.jumbo-box.show-menu[_ngcontent-%COMP%]    > .jumbo-line[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n.jumbo-box[_ngcontent-%COMP%]   .jumbo-line[_ngcontent-%COMP%] {\n  transition: 0.4s all;\n  width: -webkit-max-content;\n  width: max-content;\n  min-width: 600px;\n}\n\n.jumbo-box[_ngcontent-%COMP%]   .jumbo-line[_ngcontent-%COMP%]    > .hover-item[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  margin: 0 auto;\n  cursor: pointer;\n  display: flex;\n  min-width: -webkit-max-content;\n  min-width: max-content;\n  transition: 0.4s all;\n  z-index: 1;\n}\n\n.jumbo-box[_ngcontent-%COMP%]   .jumbo-line[_ngcontent-%COMP%]    > .hover-item.hello[_ngcontent-%COMP%] {\n  z-index: 0;\n}\n\n.jumbo-box[_ngcontent-%COMP%]   .jumbo-line[_ngcontent-%COMP%]    > .hover-item.link[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n}\n\n.jumbo-box[_ngcontent-%COMP%]   .jumbo-line[_ngcontent-%COMP%]    > .hover-item[_ngcontent-%COMP%]    > .mini[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  float: right;\n  align-self: center;\n  justify-content: center;\n  margin-left: 1rem;\n}\n\n@media (max-width: 500px) {\n  .jumbo-box[_ngcontent-%COMP%]   .jumbo-line[_ngcontent-%COMP%]    > .hover-item[_ngcontent-%COMP%]    > .mini[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n\n.jumbo-box.hover-effects[_ngcontent-%COMP%]    > .jumbo-line[_ngcontent-%COMP%]:hover {\n  padding-left: 4rem;\n}\n\n.img-home[_ngcontent-%COMP%] {\n  height: 80%;\n  float: right;\n}\n\n.tap-anywhere[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 3rem;\n  width: 15rem;\n  left: 50%;\n  text-align: center;\n  margin-left: -7.5rem;\n  animation: pulse 3s infinite ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvbWl4aW5zLnNjc3MiLCJzcmMvc3R5bGVzL2dsb2JhbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPRTtFQUVJLFVBQVU7QUFQaEI7O0FBYUU7RUFFSSxVQUFVO0FBWGhCOztBQWtCQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0FBZnpCOztBQVlBO0VDSUUsa0JBRDRDO0VESTFDLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGdEQUFrQztFQUNsQyw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsWUFBWTtBQWRoQjs7QUFlSTtFQW5CSjtJQW9CTSxZQUFZO0VBWGhCO0FBQ0Y7O0FBZ0JBO0VBU0ksY0FBYztBQXJCbEI7O0FBWUE7RUN0QkUsb0JBRDRDO0VEdUMxQywwQkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQXZCcEI7O0FBTUE7RUFvQk0sbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLDhCQUFzQjtFQUF0QixzQkFBc0I7RUM5QzFCLG9CQUQ0QztFRGtEeEMsVUFBVTtBQXZCaEI7O0FBSkE7RUErQlUsVUFBVTtBQXZCcEI7O0FBUkE7RUFxQ1Usa0JBQWtCO0VBQ2xCLFVBQVU7QUF6QnBCOztBQWJBO0VBNkNRLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpQkFBaUI7QUE1QnpCOztBQThCUTtFQW5EUjtJQW9EVSxlQUFlO0VBMUJ2QjtBQUNGOztBQTNCQTtFQTJESSxrQkVwRmU7QUZ3RG5COztBQWlDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBOUJkOztBQWtDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFKd0I7RUFLeEIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixvQkFBcUM7RUFDckMsd0NBQXdDO0FBL0IxQyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuQGltcG9ydCAnY29sb3JzJztcbkBpbXBvcnQgJ2dsb2JhbHMnO1xuQGltcG9ydCAnaW1hZ2VzJztcbkBpbXBvcnQgJ2JyZWFrcG9pbnRzJztcblxuJXNob3ctbWVudSB7XG4gID4gaDEuaGVsbG8ge1xuICAgIEBpZiAoJGhvbWUtcGFnZS11c2Utb3BhY2l0eSkge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9IEBlbHNlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgPiBoMS5saW5rIHtcbiAgICBAaWYgKCRob21lLXBhZ2UtdXNlLW9wYWNpdHkpIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfSBAZWxzZSB7XG4gICAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgIH1cbiAgfVxufVxuXG4uaG9tZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgLm15c2VsZiB7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbnMoMnMpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogY2FsYygyNSUgKyAxNXJlbSk7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgdG9wOiAxMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGltYWdlLW5pY28pO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIuNXJlbSAwO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1vYmlsZS1zbSkge1xuICAgICAgb3BhY2l0eTogMC4zO1xuICAgIH1cblxuICB9XG59XG5cbi5qdW1iby1ib3gge1xuXG4gIEBpZiAoJGhvbWUtcGFnZS1jZW50ZXJlZCkge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgJi5zaG93LW1lbnUgPiAuanVtYm8tbGluZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgQGV4dGVuZCAlc2hvdy1tZW51O1xuICB9XG5cblxuICAuanVtYm8tbGluZSB7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbnMoKTtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgbWluLXdpZHRoOiA2MDBweDtcblxuICAgID4gLmhvdmVyLWl0ZW0ge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9ucygpO1xuICAgICAgLy9taW4td2lkdGg6ICRicmVha3BvaW50LW1vYmlsZS1zbTtcbiAgICAgIHotaW5kZXg6IDE7XG5cbiAgICAgICYuaGVsbG8ge1xuICAgICAgICBAaWYgKCRob21lLXBhZ2UtdXNlLW9wYWNpdHkpIHtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYubGluayB7XG4gICAgICAgIEBpZiAoJGhvbWUtcGFnZS11c2Utb3BhY2l0eSkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgID4gLm1pbmkge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbW9iaWxlLXNtKSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5ob3Zlci1lZmZlY3RzID4gLmp1bWJvLWxpbmU6aG92ZXIge1xuICAgIHBhZGRpbmctbGVmdDogJGluZGVudC1ob3ZlcjtcbiAgICBAZXh0ZW5kICVzaG93LW1lbnU7XG4gIH1cbn1cblxuLmltZy1ob21lIHtcbiAgaGVpZ2h0OiA4MCU7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuJHRhcC1hbnl3aGVyZS13aWR0aDogMTVyZW07XG4udGFwLWFueXdoZXJlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDNyZW07XG4gIHdpZHRoOiAkdGFwLWFueXdoZXJlLXdpZHRoO1xuICBsZWZ0OiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IC0kdGFwLWFueXdoZXJlLXdpZHRoIC8gMjtcbiAgYW5pbWF0aW9uOiBwdWxzZSAzcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cbiIsIkBpbXBvcnQgJ2NvbG9ycyc7XG5cbkBmdW5jdGlvbiBzdHJpcC11bml0KCR2YWx1ZSkge1xuICBAcmV0dXJuICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7XG59XG5cbkBtaXhpbiBmbHVpZC10eXBlKCRtaW4tdncsICRtYXgtdncsICRtaW4tZm9udC1zaXplLCAkbWF4LWZvbnQtc2l6ZSkge1xuICAkdTE6IHVuaXQoJG1pbi12dyk7XG4gICR1MjogdW5pdCgkbWF4LXZ3KTtcbiAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcbiAgJHU0OiB1bml0KCRtYXgtZm9udC1zaXplKTtcblxuICBAaWYgJHUxID09ICR1MiBhbmQgJHUxID09ICR1MyBhbmQgJHUxID09ICR1NCB7XG4gICAgJiB7XG5cbiAgICAgIGZvbnQtc2l6ZTogJG1pbi1mb250LXNpemU7XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluLXZ3KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygjeyRtaW4tZm9udC1zaXplfSArICN7c3RyaXAtdW5pdCgkbWF4LWZvbnQtc2l6ZSAtICRtaW4tZm9udC1zaXplKX0gKiAoKDEwMHZ3IC0gI3skbWluLXZ3fSkgLyAje3N0cmlwLXVuaXQoJG1heC12dyAtICRtaW4tdncpfSkpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWF4LXZ3KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJG1heC1mb250LXNpemU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9ucygkdGltZTogMC40cywgJHByb3BlcnR5OiBhbGwpIHtcbiAgdHJhbnNpdGlvbjogJHRpbWUgJHByb3BlcnR5O1xufVxuXG5AbWl4aW4gbm9fc2VsZWN0KCkge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIGJveF9zaGFkb3coJGNvbG9yOiAkYm94LXNoYWRvdywgJHNpemU6IDRweCkge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAkc2l6ZSAwICRjb2xvcjtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgJHNpemUgMCAkY29sb3I7XG4gIGJveC1zaGFkb3c6IDAgMCAkc2l6ZSAwICRjb2xvcjtcbn1cblxuQG1peGluIHRyYW5zZm9ybSgkdmFsdWUpIHtcbiAgdHJhbnNmb3JtOiAkdmFsdWU7XG4gIC1tb3otdHJhbnNmb3JtOiAkdmFsdWU7XG4gIC1vLXRyYW5zZm9ybTogJHZhbHVlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogJHZhbHVlO1xufVxuXG4vLyBrZXlmcmFtZXMgbWl4aW5cbkBtaXhpbiBrZXlmcmFtZXMoJG5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1vei1rZXlmcmFtZXMgI3skbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbXMta2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiLy8gc2V0IHRvIHRydWUvZmFsc2UgdG8gY2VudGVyIChvciBrZWVwIHRvIHRoZSBsZWZ0KSB0aGUgbWVudSBpbiB0aGUgaG9tZSBjb21wb25lbnRcbiRob21lLXBhZ2UtY2VudGVyZWQ6IGZhbHNlO1xuLy8gVGhlIHBvc2l0aW9uIG9mIHRoZSBgTmljbyBLdXBmZXJgIG1lbnVcbiRuYW1lLWxvZ28tcG9zaXRpb246ICdyaWdodCc7XG4vLyBVc2Ugb3BhY2l0eSBmb3IgdGhlIEhvbWUgUGFnZSBtZW51IHRyYW5zaXRpb25zXG4kaG9tZS1wYWdlLXVzZS1vcGFjaXR5OiB0cnVlO1xuLy8gV2Ugd2FudCBleHRyYSBtYXJnaW4gYXQgdGhlIHRvcCBmb3IgYWxsIHRoZSBwYWdlcy5cbiRjb250ZW50LXdpdGgtbWFyZ2luOiB0cnVlO1xuXG5cbiRhcHAtZm9udC1zaXplOiAyMHB4OyAvLyBNVVNUIEJFIFBYXG4kanVtYm8tZm9udC1zaXplOiA3ICogJGFwcC1mb250LXNpemU7XG4kaHVnZS1mb250LXNpemU6IDUgKiAkYXBwLWZvbnQtc2l6ZTtcbiRoMi1mb250LXNpemU6IDMgKiAkYXBwLWZvbnQtc2l6ZTtcbiRiaWctZm9udC1zaXplOiAyICogJGFwcC1mb250LXNpemU7XG5cbiRuYW1lLWxvZ28tdG9wOiA1cmVtO1xuJG5hbWUtbG9nby1yaWdodDogMTNyZW07XG4kbmFtZS1sb2dvLWxlZnQ6IDVyZW07XG4kbmFtZS1sb2dvLXJpZ2h0LWhvdmVyOiAkbmFtZS1sb2dvLXJpZ2h0ICsgMnJlbTtcbiRuYW1lLWxvZ28tbGVmdC1ob3ZlcjogNnJlbTtcblxuJGFwcC1yb3ctdG9wOiA1cmVtO1xuXG4vLyBIb3cgbXVjaCB0byBpbmRlbnQgc3R1ZmYgaW4gdGhlIGhvbWUgcGFnZSB3aGVuIHdlIGhvdmVyIG9uIHRoZW1cbiRpbmRlbnQtaG92ZXI6IDRyZW07XG5cbiRhcHAtcm93LXdpZHRoOiA3NSU7XG4kYXBwLXJvdy13aWR0aC1zbTogOTUlO1xuXG4kYXBwLXJvdy10ZXh0LXBhZGRpbmc6IDIuNXJlbTtcblxuIl19 */"], data: { animation: [Object(_app_shared_animations__WEBPACK_IMPORTED_MODULE_1__["slide"])(), Object(_app_shared_animations__WEBPACK_IMPORTED_MODULE_1__["slideIn"])(), Object(_app_shared_animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"])(800 /* FadeInStaggerSlow */)] }, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                animations: [Object(_app_shared_animations__WEBPACK_IMPORTED_MODULE_1__["slide"])(), Object(_app_shared_animations__WEBPACK_IMPORTED_MODULE_1__["slideIn"])(), Object(_app_shared_animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"])(800 /* FadeInStaggerSlow */)]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "g0V9":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-page/shared/resolvers/index.ts ***!
  \***********************************************************/
/*! exports provided: HomePageResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_page_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page.resolver */ "6DQq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomePageResolver", function() { return _home_page_resolver__WEBPACK_IMPORTED_MODULE_0__["HomePageResolver"]; });




/***/ }),

/***/ "ry1Y":
/*!*****************************************************!*\
  !*** ./src/app/pages/home-page/home-page.module.ts ***!
  \*****************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~home-page/home-page.component */ "JFIp");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~app/shared */ "M0ag");
/* harmony import */ var _home_page_home_page_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~home-page/home-page.routing */ "FayZ");
/* harmony import */ var _home_page_shared_resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~home-page/shared/resolvers */ "g0V9");






class HomePageModule {
}
HomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomePageModule_Factory(t) { return new (t || HomePageModule)(); }, providers: [
        _home_page_shared_resolvers__WEBPACK_IMPORTED_MODULE_4__["HomePageResolver"]
    ], imports: [[
            _app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _home_page_home_page_routing__WEBPACK_IMPORTED_MODULE_3__["HomePageRouting"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]], imports: [_app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _home_page_home_page_routing__WEBPACK_IMPORTED_MODULE_3__["HomePageRouting"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _home_page_home_page_routing__WEBPACK_IMPORTED_MODULE_3__["HomePageRouting"]
                ],
                declarations: [
                    _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]
                ],
                providers: [
                    _home_page_shared_resolvers__WEBPACK_IMPORTED_MODULE_4__["HomePageResolver"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=home-page-home-page-module.1106f61f38d96af9b835.js.map