(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+DMx":
/*!*******************************************************!*\
  !*** ./src/app/functions/guess-client-os.function.ts ***!
  \*******************************************************/
/*! exports provided: guessClientOS, detectAndSaveOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guessClientOS", function() { return guessClientOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectAndSaveOS", function() { return detectAndSaveOS; });
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~app/services */ "o0su");

/**
 * Function from StackOverflow to detect OS. Maybe not needed, but it's just to be fancy
 * {@url https://stackoverflow.com/a/38241481/2016686}
 */
function guessClientOS() {
    /**
     * As detected by the browser.
     */
    const platform = window.navigator.platform;
    /**
     * These are the possible values
     */
    const macOsPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    /**
     * This is what we need to guess.
     */
    let os = "??" /* Unknown */;
    let isMobile = false;
    if (macOsPlatforms.indexOf(platform) !== -1) {
        os = "MacOS" /* MacOS */;
    }
    else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = "Windows" /* Windows */;
    }
    else if (/Linux/.test(platform)) {
        os = "Linux" /* Linux */;
    }
    else {
        // Otherwise, we try with phones...
        const userAgent = window.navigator.userAgent;
        const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
        if (/Android/.test(userAgent)) {
            os = "Android" /* Android */;
            isMobile = true;
        }
        else if (iosPlatforms.indexOf(platform) !== -1) {
            os = "iOS" /* iOS */;
            isMobile = true;
        }
    }
    return { isMobile, os };
}
/**
 * Saves the OS/Browser guess in the local storage. we don't need this every time...
 */
function detectAndSaveOS() {
    if (!Object(_app_services__WEBPACK_IMPORTED_MODULE_0__["getLocalStorage"])().getItem("co" /* ClientOS */)) {
        Object(_app_services__WEBPACK_IMPORTED_MODULE_0__["getLocalStorage"])().setItem("co" /* ClientOS */, guessClientOS());
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Library/WebServer/Documents/portfolio/frontend/portfolio/src/main.ts */"zUnb");


/***/ }),

/***/ "0AQh":
/*!**********************************************!*\
  !*** ./src/app/pages/login/login.routing.ts ***!
  \**********************************************/
/*! exports provided: LoginRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRouting", function() { return LoginRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~login/components */ "GyMv");





class LoginRouting {
}
LoginRouting.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginRouting });
LoginRouting.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginRouting_Factory(t) { return new (t || LoginRouting)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                {
                    path: '',
                    component: _login_components__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
                }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginRouting, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _login_components__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
                        }
                    ])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "18MR":
/*!***********************************************!*\
  !*** ./src/app/services/app-title.service.ts ***!
  \***********************************************/
/*! exports provided: AppTitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTitleService", function() { return AppTitleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class AppTitleService {
    constructor(titleService) {
        this.titleService = titleService;
        AppTitleService.title = this.titleService;
    }
}
AppTitleService.ɵfac = function AppTitleService_Factory(t) { return new (t || AppTitleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
AppTitleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppTitleService, factory: AppTitleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppTitleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "5Dro":
/*!*********************************************!*\
  !*** ./src/app/functions/clone.function.ts ***!
  \*********************************************/
/*! exports provided: clone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/**
 * For Frozen javascript objects that are immutable, we return an editable copy.
 * @param object
 */
function clone(object) {
    return JSON.parse(JSON.stringify(object || null));
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    // url: 'http://portfolio.local/api'
    url: 'http://172.20.10.3/home-section.json?'
    // url: 'http://172.20.10.3/api'
};


/***/ }),

/***/ "CBiq":
/*!********************************************************!*\
  !*** ./src/app/shared/animations/fade-in.animation.ts ***!
  \********************************************************/
/*! exports provided: fadeIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

/**
 * A shortcut for the Animation below
 * If you pass a `finalOpacity` explicitly, the name of the function will change -> 0.7 -> `fadeIn0.7`
 * @param staggerTime
 * @param duration
 * @param finalOpacity
 */
function fadeIn(staggerTime = 500 /* FadeInStaggerTime */, duration = "400ms" /* FadeInDuration */, finalOpacity = null) {
    // export function fadeIn(timings: string = Timings.CubicBezier) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])(`fadeIn${finalOpacity || ''}`, [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.fade-in', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(staggerTime, [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(duration, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: finalOpacity || 1 }))
                ])
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(duration, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
        ])
    ]);
}


/***/ }),

/***/ "F33o":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_components_stars_shared_services_stars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~app/components/stars/shared/services/stars.service */ "b6aK");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~routes/routes */ "io67");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class NotFoundComponent {
    constructor(ref) {
        this.ref = ref;
        this.Routes = _routes_routes__WEBPACK_IMPORTED_MODULE_2__["Routes"];
        this.showBlackHole = false;
        _app_components_stars_shared_services_stars_service__WEBPACK_IMPORTED_MODULE_1__["StarsService"].reverse$.next(true);
        setTimeout(() => {
            this.showBlackHole = true;
            this.ref.markForCheck();
        }, 100);
    }
    ngOnDestroy() {
        _app_components_stars_shared_services_stars_service__WEBPACK_IMPORTED_MODULE_1__["StarsService"].reverse$.next(false);
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 13, vars: 7, consts: [["src", "assets/images/astro/astro1.gif", "alt", "astronaut", 1, "astronaut", "object"], ["src", "assets/images/astro/rocket.gif", "alt", "rocket", 1, "rocket", "object"], [1, "__app-row", "just-center", "flex-column", "align-center", "page"], [1, "jumbo", "secondary", "my-0"], [1, "black-hole-box"], [1, "black-hole"], [1, "no-deco", "back-button", "secondary", 3, "routerLink"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("spiral-in", ctx.showBlackHole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("spiral-in", ctx.showBlackHole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("big", ctx.showBlackHole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + ctx.Routes.Home);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".page[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.astronaut[_ngcontent-%COMP%] {\n  width: 150px;\n  top: calc(50% - 0px);\n  left: calc(50% - 300px);\n  transform-origin: 300px center;\n  animation: circle 12s linear infinite reverse;\n}\n\n.rocket[_ngcontent-%COMP%] {\n  top: calc(50% - 0px);\n  left: calc(50% - 400px);\n  transform-origin: 400px center;\n  width: 200px;\n  animation: circle 10s linear infinite;\n}\n\n.spiral-in[_ngcontent-%COMP%] {\n  transition: 90s all;\n  transform-origin: 0 center;\n  top: 50%;\n  left: 50%;\n}\n\n.object[_ngcontent-%COMP%] {\n  position: fixed;\n}\n\n@keyframes circle {\n  to {\n    transform: rotate(1turn);\n  }\n}\n\n.black-hole-box[_ngcontent-%COMP%], .black-hole.big[_ngcontent-%COMP%] {\n  width: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n}\n\n.black-hole[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  transition: 15s all;\n  border-radius: 50%;\n  background: linear-gradient(#0a0808, #333, #000);\n  animation: animate 4s linear infinite;\n}\n\n.black-hole[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background: linear-gradient(#0a0808, #333, #000);\n}\n\n.black-hole[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(1) {\n  filter: blur(5px);\n}\n\n.black-hole[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2) {\n  filter: blur(10px);\n}\n\n.black-hole[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(3) {\n  filter: blur(25px);\n}\n\n.black-hole[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(4) {\n  filter: blur(50px);\n}\n\n.black-hole[_ngcontent-%COMP%]:after {\n  content: '';\n  position: absolute;\n  top: 8px;\n  left: 12px;\n  right: 13px;\n  bottom: 14px;\n  background: #0a0808;\n  border-radius: 50%;\n}\n\n@keyframes animate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLFlBQVk7QUFQZDs7QUFlQTtFQUNFLFlBTnFCO0VBT3JCLG9CQUF3QztFQUN4Qyx1QkFBeUM7RUFDekMsOEJBQWdEO0VBQ2hELDZDQUE2QztBQVovQzs7QUFlQTtFQUNFLG9CQUFxQztFQUNyQyx1QkFBc0M7RUFDdEMsOEJBQTZDO0VBQzdDLFlBQVk7RUFDWixxQ0FBcUM7QUFadkM7O0FBZUE7RUNMRSxtQkFENEM7RURRNUMsMEJBQTBCO0VBQzFCLFFBQVE7RUFDUixTQUFTO0FBWlg7O0FBZUE7RUFDRSxlQUFlO0FBWmpCOztBQWVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFaMUI7QUFDRjs7QUFlQTtFQUNFLFlBOUNxQjtFQStDckIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFsRHFCO0FBc0N2Qjs7QUFlQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VDaENULG1CQUQ0QztFRG1DNUMsa0JBQWtCO0VBQ2xCLGdEQUFtRztFQUNuRyxxQ0FBcUM7QUFadkM7O0FBTUE7RUFTSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0RBQW1HO0FBWHZHOztBQUZBO0VBZ0JNLGlCQUFpQjtBQVZ2Qjs7QUFOQTtFQW9CTSxrQkFBa0I7QUFWeEI7O0FBVkE7RUF3Qk0sa0JBQWtCO0FBVnhCOztBQWRBO0VBNEJNLGtCQUFrQjtBQVZ4Qjs7QUFsQkE7RUFrQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBaEd3QjtFQWlHeEIsa0JBQWtCO0FBWnRCOztBQWdCQTtFQUNFO0lBQ0UsdUJBQXVCO0VBYnpCO0VBZUE7SUFDRSx5QkFBeUI7RUFiM0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XG5cbiRibGFjay1ob2xlLWNvbG9yLTE6ICMwYTA4MDg7XG4kYmxhY2staG9sZS1jb2xvci0yOiAjMzMzO1xuJGJsYWNrLWhvbGUtY29sb3ItMzogIzAwMDtcbiRibGFjay1ob2xlLXNpemU6IDMwMHB4O1xuXG5cbi5wYWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4kYXN0cm9uYXV0LXdpZHRoOiAxNTBweDtcbiRyb2NrZXQtd2lkdGg6IDIwMHB4O1xuXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi5hc3Ryb25hdXQge1xuICB3aWR0aDogJGFzdHJvbmF1dC13aWR0aDtcbiAgdG9wOiBjYWxjKDUwJSAtICN7MCAqICRhc3Ryb25hdXQtd2lkdGh9KTtcbiAgbGVmdDogY2FsYyg1MCUgLSAjezIgKiAkYXN0cm9uYXV0LXdpZHRofSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46ICN7MiAqICRhc3Ryb25hdXQtd2lkdGh9IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBjaXJjbGUgMTJzIGxpbmVhciBpbmZpbml0ZSByZXZlcnNlO1xufVxuXG4ucm9ja2V0IHtcbiAgdG9wOiBjYWxjKDUwJSAtICN7MCAqICRyb2NrZXQtd2lkdGh9KTtcbiAgbGVmdDogY2FsYyg1MCUgLSAjezIgKiAkcm9ja2V0LXdpZHRofSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46ICN7MiAqICRyb2NrZXQtd2lkdGh9IGNlbnRlcjtcbiAgd2lkdGg6IDIwMHB4O1xuICBhbmltYXRpb246IGNpcmNsZSAxMHMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uc3BpcmFsLWluIHtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbnMoOTBzKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCBjZW50ZXI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG59XG5cbi5vYmplY3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbkBrZXlmcmFtZXMgY2lyY2xlIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcbiAgfVxufVxuXG4uYmxhY2staG9sZS1ib3gsIC5ibGFjay1ob2xlLmJpZyB7XG4gIHdpZHRoOiAkYmxhY2staG9sZS1zaXplO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAkYmxhY2staG9sZS1zaXplO1xufVxuXG4uYmxhY2staG9sZSB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb25zKDE1cyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCN7JGJsYWNrLWhvbGUtY29sb3ItMX0sICN7JGJsYWNrLWhvbGUtY29sb3ItMn0sICN7JGJsYWNrLWhvbGUtY29sb3ItM30pO1xuICBhbmltYXRpb246IGFuaW1hdGUgNHMgbGluZWFyIGluZmluaXRlO1xuXG4gID4gc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCN7JGJsYWNrLWhvbGUtY29sb3ItMX0sICN7JGJsYWNrLWhvbGUtY29sb3ItMn0sICN7JGJsYWNrLWhvbGUtY29sb3ItM30pO1xuXG4gICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgZmlsdGVyOiBibHVyKDVweCk7XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgIGZpbHRlcjogYmx1cigyNXB4KTtcbiAgICB9XG5cbiAgICAmOm50aC1jaGlsZCg0KSB7XG4gICAgICBmaWx0ZXI6IGJsdXIoNTBweCk7XG4gICAgfVxuICB9XG5cblxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4cHg7XG4gICAgbGVmdDogMTJweDtcbiAgICByaWdodDogMTNweDtcbiAgICBib3R0b206IDE0cHg7XG4gICAgYmFja2dyb3VuZDogJGJsYWNrLWhvbGUtY29sb3ItMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBhbmltYXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ2NvbG9ycyc7XG5cbkBmdW5jdGlvbiBzdHJpcC11bml0KCR2YWx1ZSkge1xuICBAcmV0dXJuICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7XG59XG5cbkBtaXhpbiBmbHVpZC10eXBlKCRtaW4tdncsICRtYXgtdncsICRtaW4tZm9udC1zaXplLCAkbWF4LWZvbnQtc2l6ZSkge1xuICAkdTE6IHVuaXQoJG1pbi12dyk7XG4gICR1MjogdW5pdCgkbWF4LXZ3KTtcbiAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcbiAgJHU0OiB1bml0KCRtYXgtZm9udC1zaXplKTtcblxuICBAaWYgJHUxID09ICR1MiBhbmQgJHUxID09ICR1MyBhbmQgJHUxID09ICR1NCB7XG4gICAgJiB7XG5cbiAgICAgIGZvbnQtc2l6ZTogJG1pbi1mb250LXNpemU7XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluLXZ3KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygjeyRtaW4tZm9udC1zaXplfSArICN7c3RyaXAtdW5pdCgkbWF4LWZvbnQtc2l6ZSAtICRtaW4tZm9udC1zaXplKX0gKiAoKDEwMHZ3IC0gI3skbWluLXZ3fSkgLyAje3N0cmlwLXVuaXQoJG1heC12dyAtICRtaW4tdncpfSkpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWF4LXZ3KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJG1heC1mb250LXNpemU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9ucygkdGltZTogMC40cywgJHByb3BlcnR5OiBhbGwpIHtcbiAgdHJhbnNpdGlvbjogJHRpbWUgJHByb3BlcnR5O1xufVxuXG5AbWl4aW4gbm9fc2VsZWN0KCkge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIGJveF9zaGFkb3coJGNvbG9yOiAkYm94LXNoYWRvdywgJHNpemU6IDRweCkge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAkc2l6ZSAwICRjb2xvcjtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgJHNpemUgMCAkY29sb3I7XG4gIGJveC1zaGFkb3c6IDAgMCAkc2l6ZSAwICRjb2xvcjtcbn1cblxuQG1peGluIHRyYW5zZm9ybSgkdmFsdWUpIHtcbiAgdHJhbnNmb3JtOiAkdmFsdWU7XG4gIC1tb3otdHJhbnNmb3JtOiAkdmFsdWU7XG4gIC1vLXRyYW5zZm9ybTogJHZhbHVlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogJHZhbHVlO1xufVxuXG4vLyBrZXlmcmFtZXMgbWl4aW5cbkBtaXhpbiBrZXlmcmFtZXMoJG5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1vei1rZXlmcmFtZXMgI3skbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbXMta2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~app/shared */ "M0ag");
/* harmony import */ var _login_login_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~login/login.routing */ "0AQh");
/* harmony import */ var _login_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~login/components */ "GyMv");
/* harmony import */ var _login_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~login/services */ "JwML");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");







class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, providers: [
        _login_services__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
    ], imports: [[
            _app_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
            _login_login_routing__WEBPACK_IMPORTED_MODULE_2__["LoginRouting"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_components__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]], imports: [_app_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
        _login_login_routing__WEBPACK_IMPORTED_MODULE_2__["LoginRouting"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _login_components__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
                ],
                imports: [
                    _app_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                    _login_login_routing__WEBPACK_IMPORTED_MODULE_2__["LoginRouting"]
                ],
                providers: [
                    _login_services__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "GyMv":
/*!*************************************************!*\
  !*** ./src/app/pages/login/components/index.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "YHxr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "JwML":
/*!***********************************************!*\
  !*** ./src/app/pages/login/services/index.ts ***!
  \***********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ "e6Jd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return _login_service__WEBPACK_IMPORTED_MODULE_0__["LoginService"]; });




/***/ }),

/***/ "M0ag":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "PCNd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });




/***/ }),

/***/ "Nvhu":
/*!************************************!*\
  !*** ./src/app/functions/index.ts ***!
  \************************************/
/*! exports provided: guessClientOS, detectAndSaveOS, clone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _guess_client_os_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guess-client-os.function */ "+DMx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guessClientOS", function() { return _guess_client_os_function__WEBPACK_IMPORTED_MODULE_0__["guessClientOS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectAndSaveOS", function() { return _guess_client_os_function__WEBPACK_IMPORTED_MODULE_0__["detectAndSaveOS"]; });

/* harmony import */ var _clone_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clone.function */ "5Dro");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return _clone_function__WEBPACK_IMPORTED_MODULE_1__["clone"]; });





/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_shared_angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~app/shared/angular-material.module */ "ssao");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _app_shared_angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        // RouterModule
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _app_shared_angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        // RouterModule
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _app_shared_angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                    // RouterModule
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "RfT1":
/*!******************************************************!*\
  !*** ./src/app/shared/animations/slide.animation.ts ***!
  \******************************************************/
/*! exports provided: slideIn, slide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideIn", function() { return slideIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slide", function() { return slide; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

function slideIn() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.slide-in', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: `translateX(${"-80px" /* SlideTranslate */})`, opacity: '0' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(400 /* SlideStaggerTime */, [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${"400ms" /* SlideDuration */} ease-out`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${"400ms" /* SlideDuration */} 200ms ease-out`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1' }))
                    ])
                ])
            ])
        ])
    ]);
}
function slide() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slide', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: `translateX(${"-80px" /* SlideTranslate */})`, opacity: '0' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${"400ms" /* SlideDuration */} ease-out`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${"400ms" /* SlideDuration */} 200ms ease-out`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1' }))
            ])
        ])
    ]);
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~routes/routes */ "io67");
/* harmony import */ var _app_shared_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~app/shared/animations */ "aDQ/");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~app/services */ "o0su");
/* harmony import */ var _app_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~app/functions */ "Nvhu");
/* harmony import */ var _app_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~app/services/guards/auth.guard */ "Xuht");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_stars_stars_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/stars/stars.component */ "uAVx");











function AppComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "go to admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + ctx_r0.Routes.Admin);
} }
class AppComponent {
    // noinspection JSUnusedLocalSymbols
    constructor(title) {
        this.title = title;
        this.Routes = _routes_routes__WEBPACK_IMPORTED_MODULE_1__["Routes"];
        this.isAuthed$ = _app_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"].loggedIn$;
        Object(_app_functions__WEBPACK_IMPORTED_MODULE_4__["detectAndSaveOS"])();
        _app_services__WEBPACK_IMPORTED_MODULE_3__["AppTitleService"].title.setTitle('Nicolas Kupfer');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AppTitleService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 4, consts: [["id", "name-logo", "routerLink", ""], [1, "name-logo-name"], [1, "name-logo-url"], ["id", "authed", 3, "routerLink", 4, "ngIf"], ["id", "authed", 3, "routerLink"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "nico kupfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "nico.kupfer.es/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_a_5_Template, 2, 1, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-stars");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slide", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.isAuthed$));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _components_stars_stars_component__WEBPACK_IMPORTED_MODULE_8__["StarsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["#name-logo[_ngcontent-%COMP%] {\n  position: fixed;\n  font-size: 20px;\n  font-family: 'Monospaced', monospace;\n  left: calc(100% - 13rem);\n  top: 5rem;\n  color: #fff;\n  text-decoration: none;\n  transition: all 0.4s;\n}\n\n#name-logo[_ngcontent-%COMP%]    > .name-logo-url[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#name-logo[_ngcontent-%COMP%]:hover {\n  left: calc(100% - 15rem);\n}\n\n#name-logo[_ngcontent-%COMP%]:hover    > .name-logo-name[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#name-logo[_ngcontent-%COMP%]:hover    > .name-logo-url[_ngcontent-%COMP%] {\n  display: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy9nbG9iYWxzLnNjc3MiLCJzcmMvc3R5bGVzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixvQ0FBb0M7RUFFbEMsd0JBQXNDO0VBS3hDLFNDR2tCO0VERmxCLFdFZFU7RUZlVixxQkFBcUI7RUFDckIsb0JBQW9CO0FBUHRCOztBQU5BO0VBb0JJLGFBQWE7QUFWakI7O0FBVkE7RUF5Qk0sd0JBQTRDO0FBWGxEOztBQWRBO0VBK0JNLGFBQWE7QUFibkI7O0FBbEJBO0VBa0NNLGdCQUFnQjtBQVp0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2NvbG9ycyc7XG5AaW1wb3J0ICdnbG9iYWxzJztcblxuI25hbWUtbG9nbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogJ01vbm9zcGFjZWQnLCBtb25vc3BhY2U7XG4gIEBpZigkbmFtZS1sb2dvLXBvc2l0aW9uID09ICdyaWdodCcpIHtcbiAgICBsZWZ0OiBjYWxjKDEwMCUgLSAjeyRuYW1lLWxvZ28tcmlnaHR9KTtcbiAgfVxuICBAZWxzZSB7XG4gICAgbGVmdDogJG5hbWUtbG9nby1sZWZ0O1xuICB9XG4gIHRvcDogJG5hbWUtbG9nby10b3A7XG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvci10ZXh0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuXG5cbiAgPiAubmFtZS1sb2dvLW5hbWUge1xuXG4gIH1cbiAgPiAubmFtZS1sb2dvLXVybCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIEBpZigkbmFtZS1sb2dvLXBvc2l0aW9uID09ICdyaWdodCcpIHtcbiAgICAgIGxlZnQ6IGNhbGMoMTAwJSAtICN7JG5hbWUtbG9nby1yaWdodC1ob3Zlcn0pO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBsZWZ0OiAkbmFtZS1sb2dvLWxlZnQtaG92ZXI7XG4gICAgfVxuICAgID4gLm5hbWUtbG9nby1uYW1lIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgID4gLm5hbWUtbG9nby11cmwge1xuICAgICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIHNldCB0byB0cnVlL2ZhbHNlIHRvIGNlbnRlciAob3Iga2VlcCB0byB0aGUgbGVmdCkgdGhlIG1lbnUgaW4gdGhlIGhvbWUgY29tcG9uZW50XG4kaG9tZS1wYWdlLWNlbnRlcmVkOiBmYWxzZTtcbi8vIFRoZSBwb3NpdGlvbiBvZiB0aGUgYE5pY28gS3VwZmVyYCBtZW51XG4kbmFtZS1sb2dvLXBvc2l0aW9uOiAncmlnaHQnO1xuLy8gVXNlIG9wYWNpdHkgZm9yIHRoZSBIb21lIFBhZ2UgbWVudSB0cmFuc2l0aW9uc1xuJGhvbWUtcGFnZS11c2Utb3BhY2l0eTogdHJ1ZTtcbi8vIFdlIHdhbnQgZXh0cmEgbWFyZ2luIGF0IHRoZSB0b3AgZm9yIGFsbCB0aGUgcGFnZXMuXG4kY29udGVudC13aXRoLW1hcmdpbjogdHJ1ZTtcblxuXG4kYXBwLWZvbnQtc2l6ZTogMjBweDsgLy8gTVVTVCBCRSBQWFxuJGp1bWJvLWZvbnQtc2l6ZTogNyAqICRhcHAtZm9udC1zaXplO1xuJGh1Z2UtZm9udC1zaXplOiA1ICogJGFwcC1mb250LXNpemU7XG4kaDItZm9udC1zaXplOiAzICogJGFwcC1mb250LXNpemU7XG4kYmlnLWZvbnQtc2l6ZTogMiAqICRhcHAtZm9udC1zaXplO1xuXG4kbmFtZS1sb2dvLXRvcDogNXJlbTtcbiRuYW1lLWxvZ28tcmlnaHQ6IDEzcmVtO1xuJG5hbWUtbG9nby1sZWZ0OiA1cmVtO1xuJG5hbWUtbG9nby1yaWdodC1ob3ZlcjogJG5hbWUtbG9nby1yaWdodCArIDJyZW07XG4kbmFtZS1sb2dvLWxlZnQtaG92ZXI6IDZyZW07XG5cbiRhcHAtcm93LXRvcDogNXJlbTtcblxuLy8gSG93IG11Y2ggdG8gaW5kZW50IHN0dWZmIGluIHRoZSBob21lIHBhZ2Ugd2hlbiB3ZSBob3ZlciBvbiB0aGVtXG4kaW5kZW50LWhvdmVyOiA0cmVtO1xuXG4kYXBwLXJvdy13aWR0aDogNzUlO1xuJGFwcC1yb3ctd2lkdGgtc206IDk1JTtcblxuJGFwcC1yb3ctdGV4dC1wYWRkaW5nOiAyLjVyZW07XG5cbiIsIiR3aGl0ZTogI2ZmZjtcbiRibGFjazogIzExMTtcbiRwaW5rOiAjYzgwMDY0O1xuJHllbGxvdzogI2Y1ZDUwMDtcbiR5ZWxsb3cyOiByZ2IoMTU0LDEyNSw1MSk7XG5cbiRib3gtc2hhZG93OiAjNjY2O1xuXG4kdGV4dC1jb2xvcjogJHdoaXRlO1xuJGFwcC1iYWNrZ3JvdW5kOiAkYmxhY2s7XG5cblxuJHByaW1hcnktY29sb3I6ICR5ZWxsb3c7XG4kcHJpbWFyeS1jb2xvci10ZXh0OiAkd2hpdGU7XG4iXX0= */"], data: { animation: [Object(_app_shared_animations__WEBPACK_IMPORTED_MODULE_2__["slide"])()] }, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                animations: [Object(_app_shared_animations__WEBPACK_IMPORTED_MODULE_2__["slide"])()]
            }]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AppTitleService"] }]; }, null); })();


/***/ }),

/***/ "Xuht":
/*!***********************************************!*\
  !*** ./src/app/services/guards/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~app/services */ "o0su");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~routes/routes */ "io67");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class AuthGuard {
    constructor(snackbar, router) {
        this.snackbar = snackbar;
        this.router = router;
    }
    /**
     * @returns - Permission to activate route
     */
    isAuthed() {
        if (Object(_app_services__WEBPACK_IMPORTED_MODULE_1__["getLocalStorage"])().getItem("x" /* Auth */)) {
            AuthGuard.loggedIn$.next(true);
            return true;
        }
        else {
            this.snackbar.open('Not authed', 'dismiss');
            this.router.navigateByUrl(_routes_routes__WEBPACK_IMPORTED_MODULE_2__["Routes"].absolute('Home'));
            AuthGuard.loggedIn$.next(false);
            return false;
        }
    }
    /**
     * @returns - Permission to lazy load module
     */
    canLoad() {
        return this.isAuthed();
    }
    /**
     * @returns - Permission to activate route
     */
    canActivate() {
        return this.isAuthed();
    }
}
AuthGuard.loggedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](!!Object(_app_services__WEBPACK_IMPORTED_MODULE_1__["getLocalStorage"])().getItem("x" /* Auth */));
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "YHxr":
/*!***********************************************************!*\
  !*** ./src/app/pages/login/components/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~routes/routes */ "io67");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~app/services */ "o0su");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~login/services */ "JwML");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












class LoginComponent {
    constructor(router, service, snackbar) {
        this.router = router;
        this.service = service;
        this.snackbar = snackbar;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    onSave() {
        const value = this.form.value;
        this.service
            .doLogin(value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            this.snackbar.open('error from BE', null, {
                duration: 2000
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }))
            .subscribe((response) => {
            Object(_app_services__WEBPACK_IMPORTED_MODULE_5__["getLocalStorage"])().setItem("x" /* Auth */, response);
            this.snackbar.open('Logged in', null, { duration: 2000 });
            this.router.navigateByUrl(_routes_routes__WEBPACK_IMPORTED_MODULE_4__["Routes"].absolute('Admin'));
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_services__WEBPACK_IMPORTED_MODULE_7__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 15, vars: 1, consts: [[1, "app-row"], [1, "jumbo", "center"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "row"], ["matInput", "", "formControlName", "username"], ["matInput", "", "formControlName", "password", "type", "pass"], ["mat-button", ""]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: [".form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 90%;\n  width: 500px;\n  align-self: center;\n}\n\n.form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n\n.form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 30px;\n}\n\n.form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  border: 1px solid #fff;\n}\n\n.form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n\n.form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vY29tcG9uZW50cy9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0FBRHBCOztBQUpBO0VBUUksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFBdEI7O0FBVkE7RUFhTSxhQUFhO0VBQ2IsZUFBZTtBQUNyQjs7QUFmQTtFQWtCTSxXQ3BCTTtFRHFCTixzQkNyQk07QURzQlo7O0FBcEJBO0VBMkJNLGtDQUFrQztBQUh4Qzs7QUF4QkE7RUFnQ00sV0FBVztBQUpqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2NvbXBvbmVudHMvbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdjb2xvcnMnO1xuXG4uZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogOTAlO1xuICB3aWR0aDogNTAwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcblxuICAucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbiAgICAlbGFiZWwtaW5wdXQge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG5cbiAgICAlYm9yZGVyLWNvbG9yIHtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvci10ZXh0O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktY29sb3ItdGV4dDtcbiAgICB9XG5cbiAgICBsYWJlbCB7XG4gICAgICBAZXh0ZW5kICVsYWJlbC1pbnB1dDtcbiAgICB9XG4gICAgaW5wdXQge1xuICAgICAgQGV4dGVuZCAlbGFiZWwtaW5wdXQ7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgQGV4dGVuZCAlYm9yZGVyLWNvbG9yO1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgQGV4dGVuZCAlbGFiZWwtaW5wdXQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIEBleHRlbmQgJWJvcmRlci1jb2xvcjtcbiAgICB9XG4gIH1cbn1cbiIsIiR3aGl0ZTogI2ZmZjtcbiRibGFjazogIzExMTtcbiRwaW5rOiAjYzgwMDY0O1xuJHllbGxvdzogI2Y1ZDUwMDtcbiR5ZWxsb3cyOiByZ2IoMTU0LDEyNSw1MSk7XG5cbiRib3gtc2hhZG93OiAjNjY2O1xuXG4kdGV4dC1jb2xvcjogJHdoaXRlO1xuJGFwcC1iYWNrZ3JvdW5kOiAkYmxhY2s7XG5cblxuJHByaW1hcnktY29sb3I6ICR5ZWxsb3c7XG4kcHJpbWFyeS1jb2xvci10ZXh0OiAkd2hpdGU7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _login_services__WEBPACK_IMPORTED_MODULE_7__["LoginService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~app/shared */ "M0ag");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~app/services */ "o0su");
/* harmony import */ var _app_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~app/components/not-found/not-found.component */ "F33o");
/* harmony import */ var _components_stars_stars_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/stars/stars.component */ "uAVx");
/* harmony import */ var _app_pages_login_login_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~app/pages/login/login.module */ "F4UR");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _app_services__WEBPACK_IMPORTED_MODULE_7__["AppTitleService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRouting"],
            _app_pages_login_login_module__WEBPACK_IMPORTED_MODULE_10__["LoginModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_stars_stars_component__WEBPACK_IMPORTED_MODULE_9__["StarsComponent"],
        _app_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRouting"],
        _app_pages_login_login_module__WEBPACK_IMPORTED_MODULE_10__["LoginModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components_stars_stars_component__WEBPACK_IMPORTED_MODULE_9__["StarsComponent"],
                    _app_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRouting"],
                    _app_pages_login_login_module__WEBPACK_IMPORTED_MODULE_10__["LoginModule"]
                ],
                providers: [
                    _app_services__WEBPACK_IMPORTED_MODULE_7__["AppTitleService"]
                ],
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "aDQ/":
/*!********************************************!*\
  !*** ./src/app/shared/animations/index.ts ***!
  \********************************************/
/*! exports provided: slideIn, slide, fadeIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slide_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide.animation */ "RfT1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideIn", function() { return _slide_animation__WEBPACK_IMPORTED_MODULE_0__["slideIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slide", function() { return _slide_animation__WEBPACK_IMPORTED_MODULE_0__["slide"]; });

/* harmony import */ var _fade_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fade-in.animation */ "CBiq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return _fade_in_animation__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]; });

/* harmony import */ var _timings_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timings.animation */ "zOaN");
/* empty/unused harmony star reexport */




/***/ }),

/***/ "b6aK":
/*!*******************************************************************!*\
  !*** ./src/app/components/stars/shared/services/stars.service.ts ***!
  \*******************************************************************/
/*! exports provided: StarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarsService", function() { return StarsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class StarsService {
}
StarsService.reverse$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
StarsService.ɵfac = function StarsService_Factory(t) { return new (t || StarsService)(); };
StarsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StarsService, factory: StarsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StarsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~routes/routes */ "io67");
/* harmony import */ var _app_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~app/components/not-found/not-found.component */ "F33o");
/* harmony import */ var _app_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~app/services/guards/auth.guard */ "Xuht");







class AppRouting {
}
AppRouting.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRouting });
AppRouting.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRouting_Factory(t) { return new (t || AppRouting)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                {
                    path: _routes_routes__WEBPACK_IMPORTED_MODULE_2__["Routes"].Home,
                    loadChildren: () => __webpack_require__.e(/*! import() | home-page-home-page-module */ "home-page-home-page-module").then(__webpack_require__.bind(null, /*! ~home-page/home-page.module */ "ry1Y")).then((m) => m.HomePageModule)
                },
                {
                    path: _routes_routes__WEBPACK_IMPORTED_MODULE_2__["Routes"].Reading,
                    loadChildren: () => Promise.all(/*! import() | goodreads-goodreads-module */[__webpack_require__.e("default~goodreads-goodreads-module~home-page-pages-about"), __webpack_require__.e("goodreads-goodreads-module")]).then(__webpack_require__.bind(null, /*! ~goodreads/goodreads.module */ "jxwG")).then((m) => m.GoodreadsModule)
                },
                {
                    path: _routes_routes__WEBPACK_IMPORTED_MODULE_2__["Routes"].Login,
                    loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ~login/login.module */ "F4UR")).then((m) => m.LoginModule)
                },
                {
                    path: _routes_routes__WEBPACK_IMPORTED_MODULE_2__["Routes"].Admin,
                    loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ~admin/admin.module */ "GCp2")).then((m) => m.AdminModule),
                    canActivate: [_app_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                    canLoad: [_app_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
                },
                {
                    path: '**',
                    component: _app_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
                }
            ], { useHash: true })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRouting, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                        {
                            path: _routes_routes__WEBPACK_IMPORTED_MODULE_2__["Routes"].Home,
                            loadChildren: () => __webpack_require__.e(/*! import() | home-page-home-page-module */ "home-page-home-page-module").then(__webpack_require__.bind(null, /*! ~home-page/home-page.module */ "ry1Y")).then((m) => m.HomePageModule)
                        },
                        {
                            path: _routes_routes__WEBPACK_IMPORTED_MODULE_2__["Routes"].Reading,
                            loadChildren: () => Promise.all(/*! import() | goodreads-goodreads-module */[__webpack_require__.e("default~goodreads-goodreads-module~home-page-pages-about"), __webpack_require__.e("goodreads-goodreads-module")]).then(__webpack_require__.bind(null, /*! ~goodreads/goodreads.module */ "jxwG")).then((m) => m.GoodreadsModule)
                        },
                        {
                            path: _routes_routes__WEBPACK_IMPORTED_MODULE_2__["Routes"].Login,
                            loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ~login/login.module */ "F4UR")).then((m) => m.LoginModule)
                        },
                        {
                            path: _routes_routes__WEBPACK_IMPORTED_MODULE_2__["Routes"].Admin,
                            loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ~admin/admin.module */ "GCp2")).then((m) => m.AdminModule),
                            canActivate: [_app_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                            canLoad: [_app_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
                        },
                        {
                            path: '**',
                            component: _app_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
                        }
                    ], { useHash: true })
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "d5rD":
/*!*******************************************!*\
  !*** ./src/app/services/books.service.ts ***!
  \*******************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~env/environment */ "AytR");







class BooksService {
    constructor(http) {
        this.http = http;
    }
    getCurrentlyReading(forceLoad = false) {
        if (BooksService.shelf.reading && !forceLoad) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(BooksService.shelf.reading);
        }
        return this.http
            .get(`${_env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url}/goodreads/reading`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((books) => (BooksService.shelf.reading = books)));
    }
    getReadBooks(forceLoad = false, page = BooksService.shelf.page + 1) {
        if (BooksService.shelf.read && !forceLoad) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(BooksService.shelf.read);
        }
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', page);
        return this.http
            .get(`${_env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url}/goodreads/read`, { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((read) => {
            BooksService.shelf.read = read.read;
            BooksService.shelf.totalRead = read.totalRead;
            BooksService.shelf.page = read.page;
            return read.read;
        }));
    }
}
BooksService.shelf = { read: null, reading: null, page: 0, totalRead: 0 };
BooksService.ɵfac = function BooksService_Factory(t) { return new (t || BooksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BooksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BooksService, factory: BooksService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "e6Jd":
/*!*******************************************************!*\
  !*** ./src/app/pages/login/services/login.service.ts ***!
  \*******************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~env/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class LoginService {
    constructor(http) {
        this.http = http;
    }
    doLogin(data) {
        const body = new FormData();
        body.append('username', data.username);
        body.append('password', data.password);
        return this.http.post(`${_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url}/login/auth`, body);
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "io67":
/*!*****************************************!*\
  !*** ./src/app/shared/routes/routes.ts ***!
  \*****************************************/
/*! exports provided: RouteUrls, Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteUrls", function() { return RouteUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routes", function() { return Routes; });
const RouteUrls = {
    Work: 'work',
    Contact: 'contact',
    About: 'about',
    Home: '',
    Reading: 'books-reading',
    Read: 'books-read',
    Admin: 'dashboard',
    Login: '_login_'
};
const Routes = Object.assign(Object.assign({}, RouteUrls), { absolute: (key) => {
        return `/${Routes[key]}`;
    }, path: (keys, absolute = '/') => {
        return absolute + keys.join('/');
    } });


/***/ }),

/***/ "n90K":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: getLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalStorage", function() { return getLocalStorage; });
class StorageService {
    static getLocalStorage() {
        return this.storageFactory || this.createStorageFactory(this.localStorage);
    }
    static createStorageFactory(storage) {
        this.storageFactory = {
            getSize: () => this.getSize(storage),
            setItem: (key, value) => this.setItem(storage, key, value),
            getItem: (key) => this.getItem(storage, key),
            removeItem: (key) => this.removeItem(storage, key),
            removeItems: (keys) => this.removeItems(storage, keys),
            clear: () => this.clear(storage),
            has: (key) => this.has(storage, key)
        };
        return this.storageFactory;
    }
    static getSize(storage) {
        return storage.length;
    }
    /**
     * @param storage: Storage
     * @param key - Key to store under
     * @param value - Value to stringify
     */
    static setItem(storage, key, value) {
        storage.setItem("p" /* Prefix */ + key, JSON.stringify(value));
    }
    /**
     * @param storage: Storage
     * @param key - Key to get
     * @returns - Parsed object or number or a plain string
     */
    static getItem(storage, key) {
        const unparsed = storage.getItem("p" /* Prefix */ + key);
        try {
            return JSON.parse(unparsed);
        }
        catch (_a) {
            return unparsed;
        }
    }
    /**
     * @param storage: Storage
     * @param key - Key to remove
     */
    static removeItem(storage, key) {
        storage.removeItem("p" /* Prefix */ + key);
    }
    /**
     * @param storage: Storage
     * @param keys - Multiple keys provided to remove
     */
    static removeItems(storage, keys) {
        for (let i = 0, length = keys.length; i < length; i++) {
            storage.removeItem("p" /* Prefix */ + keys[i]);
        }
    }
    /**
     * Empty the list
     */
    static clear(storage) {
        storage.clear();
    }
    /**
     * @param storage
     * @param key - Key to check
     * @returns - True if the storage has such key
     */
    static has(storage, key) {
        return storage.hasOwnProperty("p" /* Prefix */ + key);
    }
}
/**
 * Cache the reference
 */
StorageService.localStorage = window.localStorage;
/**
 * Shortcut to the local storage factory
 */
function getLocalStorage() {
    return StorageService.getLocalStorage();
}


/***/ }),

/***/ "o0su":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: getLocalStorage, AppTitleService, BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ "n90K");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocalStorage", function() { return _storage_service__WEBPACK_IMPORTED_MODULE_0__["getLocalStorage"]; });

/* harmony import */ var _app_title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-title.service */ "18MR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppTitleService", function() { return _app_title_service__WEBPACK_IMPORTED_MODULE_1__["AppTitleService"]; });

/* harmony import */ var _books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./books.service */ "d5rD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return _books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]; });






/***/ }),

/***/ "ssao":
/*!***************************************************!*\
  !*** ./src/app/shared/angular-material.module.ts ***!
  \***************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



const materialModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]
];
class AngularMaterialModule {
}
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); }, imports: [[
            ...materialModules
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    ...materialModules
                ],
                exports: [
                    ...materialModules
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "uAVx":
/*!*****************************************************!*\
  !*** ./src/app/components/stars/stars.component.ts ***!
  \*****************************************************/
/*! exports provided: StarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarsComponent", function() { return StarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_components_stars_shared_services_stars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~app/components/stars/shared/services/stars.service */ "b6aK");



const _c0 = ["canvasElement"];
class StarsComponent {
    constructor() {
        this.scale = 1; // The device's pixel-ratio, which might change on resize.
        this.screen = { w: 0, h: 0 };
        this.pointer = { x: null, y: null };
        /**
         * The list of stars that we need to re-render on each step
         * @private
         */
        this.stars = [];
        /**
         * Velocity of each star
         * @private
         */
        this.velocity = {
            x: 0,
            y: 0,
            xMomentum: 0,
            yMomentum: 0,
            z: 0.0005
        };
        /**
         * How "easy" the stars move when you move the cursor. 0 -> normal, 1 -> {@see reverse}
         * @private
         */
        this.moveStiffness = [70, 500];
        this.isTouchscreen = false;
        this.reverse = false;
        this.placeStar = (star) => {
            star.x = Math.random() * this.screen.w;
            star.y = Math.random() * this.screen.h;
        };
        this.step = () => {
            this.context.clearRect(0, 0, this.screen.w, this.screen.h);
            this.update();
            this.render();
            requestAnimationFrame(this.step);
        };
        this.onMouseLeave = () => {
            this.pointer.x = this.pointer.y = null;
        };
        this.onTouchMove = (event) => {
            this.isTouchscreen = true;
            this.movePointer(event.touches[0].clientX, event.touches[0].clientY);
        };
        this.onMouseMove = (event) => {
            this.isTouchscreen = false;
            this.movePointer(event.clientX, event.clientY);
        };
        this.resize = () => {
            this.scale = window.devicePixelRatio || 1;
            this.screen.w = window.innerWidth * this.scale;
            this.screen.h = window.innerHeight * this.scale;
            this.canvas.nativeElement.width = this.screen.w;
            this.canvas.nativeElement.height = this.screen.h;
            this.stars.forEach(this.placeStar);
        };
        this.updatePosition = (body) => {
            body.x += this.velocity.x * body.z;
            body.y += this.velocity.y * body.z;
            const xDistance = (body.x - this.screen.w / 2);
            const yDistance = (body.y - this.screen.h / 2);
            if (!this.reverse) {
                body.x += xDistance * this.velocity.z * body.z;
                body.y += yDistance * this.velocity.z * body.z;
                body.z += this.velocity.z;
                // recycle when out of bounds
                if (body.x < -this.config.overflow ||
                    body.x > this.screen.w + this.config.overflow ||
                    body.y < -this.config.overflow ||
                    body.y > this.screen.h + this.config.overflow) {
                    this.recycleBody(body);
                }
            }
            else {
                body.x -= xDistance * this.velocity.z * body.z * 10;
                body.y -= yDistance * this.velocity.z * body.z * 10;
                if (Math.abs(xDistance) + Math.abs(yDistance) < 50) {
                    body.z = 0;
                }
            }
        };
        this.recycleBody = (body) => {
            let direction = 'z';
            const vx = Math.abs(this.velocity.x);
            const vy = Math.abs(this.velocity.y);
            if (vx > 1 || vy > 1) {
                let axis;
                if (vx > vy) {
                    axis = Math.random() < vx / (vx + vy) ? 'h' : 'v';
                }
                else {
                    axis = Math.random() < vy / (vx + vy) ? 'v' : 'h';
                }
                if (axis === 'h') {
                    direction = this.velocity.x > 0 ? 'l' : 'r';
                }
                else {
                    direction = this.velocity.y > 0 ? 't' : 'b';
                }
            }
            body.z = this.config.starMinScale + Math.random() * (1 - this.config.starMinScale);
            if (direction === 'z') {
                body.z = 0.1;
                body.x = Math.random() * this.screen.w;
                body.y = Math.random() * this.screen.h;
            }
            else if (direction === 'l') {
                body.x = -this.config.overflow;
                body.y = this.screen.h * Math.random();
            }
            else if (direction === 'r') {
                body.x = this.screen.w + this.config.overflow;
                body.y = this.screen.h * Math.random();
            }
            else if (direction === 't') {
                body.x = this.screen.w * Math.random();
                body.y = -this.config.overflow;
            }
            else if (direction === 'b') {
                body.x = this.screen.w * Math.random();
                body.y = this.screen.h + this.config.overflow;
            }
        };
        this.config = {
            moveEaseness: this.moveStiffness[0],
            starDensity: 0.25,
            colorLimit: 400,
            size: 3,
            starMinScale: 0.1,
            overflow: 100,
            zVelocity: 0.005,
            maxImgSize: 480,
            imgSizeStep: 0.3,
            initialImgSize: 0
        };
    }
    ngOnInit() {
        this.context = this.canvas.nativeElement.getContext('2d');
        this.generate();
        this.step();
        _app_components_stars_shared_services_stars_service__WEBPACK_IMPORTED_MODULE_1__["StarsService"].reverse$.subscribe((reverse) => {
            this.reverse = reverse;
            !reverse && this.resize();
            this.config.moveEaseness = this.moveStiffness[Number(reverse)];
        });
        window.onresize = this.resize;
        document.onmousemove = this.onMouseMove;
        document.onmouseleave = this.onMouseLeave;
        document.ontouchmove = this.onTouchMove;
        document.ontouchend = this.onMouseLeave;
    }
    generate() {
        const starCount = (window.innerWidth + window.innerHeight) * this.config.starDensity;
        for (let i = 0; i < starCount; i++) {
            this.newStar();
        }
    }
    newStar() {
        this.stars.push({
            x: 0,
            y: 0,
            z: this.config.starMinScale + Math.random() * (1 - this.config.starMinScale),
            color: this.randomStarColor()
        });
    }
    update() {
        if (Math.abs(this.velocity.xMomentum) > 0.01) {
            this.velocity.xMomentum *= 0.96;
            this.velocity.yMomentum *= 0.96;
        }
        this.velocity.x += (this.velocity.xMomentum - this.velocity.x) * 0.8;
        this.velocity.y += (this.velocity.yMomentum - this.velocity.y) * 0.8;
        this.stars.forEach((star) => this.updatePosition(star));
    }
    render() {
        this.stars.forEach((star) => {
            this.context.beginPath();
            this.context.lineCap = 'round';
            this.context.lineWidth = this.config.size * star.z * this.scale;
            // Make stars twinkle
            this.context.strokeStyle = `rgba(${star.color},${(0.5 + 0.5 * Math.random())}`;
            this.context.beginPath();
            this.context.moveTo(star.x, star.y);
            let tailX = this.velocity.x * 2;
            let tailY = this.velocity.y * 2;
            // stroke() wont work on an invisible line
            if (Math.abs(tailX) < 0.1) {
                tailX = 0.5;
            }
            if (Math.abs(tailY) < 0.1) {
                tailY = 0.5;
            }
            this.context.lineTo(star.x + tailX, star.y + tailY);
            this.context.stroke();
        });
    }
    movePointer(x, y) {
        if (+this.pointer.x + +this.pointer.y) {
            const ox = x - this.pointer.x;
            const oy = y - this.pointer.y;
            this.velocity.xMomentum = this.velocity.xMomentum + ox / this.config.moveEaseness * this.scale * (this.isTouchscreen ? 1 : -1);
            this.velocity.yMomentum = this.velocity.yMomentum + oy / this.config.moveEaseness * this.scale * (this.isTouchscreen ? 1 : -1);
        }
        this.pointer.x = x;
        this.pointer.y = y;
    }
    randomStarColor() {
        const r = 50 + Math.floor(200 * Math.random());
        let g = 30 + Math.floor(170 * Math.random());
        if (g * 1.3 > r) {
            g = r / 3;
        }
        const b = g / 5;
        if (r + g + b < this.config.colorLimit) {
            const rand = Math.random();
            if (rand > 0.7) {
                // blue star
                return `${rand * 255},${rand * 255},255`;
            }
            return '255,255,255';
        }
        return `${r},${g},${b}`;
    }
}
StarsComponent.ɵfac = function StarsComponent_Factory(t) { return new (t || StarsComponent)(); };
StarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StarsComponent, selectors: [["app-stars"]], viewQuery: function StarsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, decls: 2, vars: 0, consts: [["id", "canvas"], ["canvasElement", ""]], template: function StarsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0, 1);
    } }, styles: ["#canvas[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: -3;\n  background: #111;\n  top: 0;\n  touch-action: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGFycy9zdGFycy5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JDTlU7RURPVixNQUFNO0VBQ04sa0JBQWtCO0FBRHBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdGFycy9zdGFycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2NvbG9ycyc7XG5cbiNjYW52YXMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IC0zO1xuICBiYWNrZ3JvdW5kOiAkYXBwLWJhY2tncm91bmQ7XG4gIHRvcDogMDtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xufVxuIiwiJHdoaXRlOiAjZmZmO1xuJGJsYWNrOiAjMTExO1xuJHBpbms6ICNjODAwNjQ7XG4keWVsbG93OiAjZjVkNTAwO1xuJHllbGxvdzI6IHJnYigxNTQsMTI1LDUxKTtcblxuJGJveC1zaGFkb3c6ICM2NjY7XG5cbiR0ZXh0LWNvbG9yOiAkd2hpdGU7XG4kYXBwLWJhY2tncm91bmQ6ICRibGFjaztcblxuXG4kcHJpbWFyeS1jb2xvcjogJHllbGxvdztcbiRwcmltYXJ5LWNvbG9yLXRleHQ6ICR3aGl0ZTtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StarsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stars',
                templateUrl: './stars.component.html',
                styleUrls: ['./stars.component.scss']
            }]
    }], function () { return []; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvasElement', { static: true }]
        }] }); })();


/***/ }),

/***/ "zOaN":
/*!********************************************************!*\
  !*** ./src/app/shared/animations/timings.animation.ts ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~env/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.893a991c793b369e846f.js.map